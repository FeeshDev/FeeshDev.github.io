const getElem = (id) => {
    return document.getElementById(id);
}
const getElemValue = (id, type) => {
    let elem = getElem(id);
    switch (type) {
        case 'string':
            return elem.value.toString();
        case 'int':
            return parseInt(elem.value);
        case 'float':
            return parseFloat(elem.value.toString);
        default:
            return elem.value;
    }
}

window.settings = {
    current: JSON.parse(localStorage.getItem('settings')) || {
        snap_rotation: true,
        snap_radius: 15,
        rel_export: true,
        cwidth: 600,
        cheight: 600,
        gsize: 50
    },
    reset: () => {
        settings.current = {
            snap_rotation: true,
            snap_radius: 15,
            rel_export: false,
            cwidth: 600,
            cheight: 600,
            gsize: 50
        }
        localStorage.setItem('settings', JSON.stringify(settings.current));
        if (confirm('Your settings have been reset, would you like to reload the page for them to apply?'))
            location.reload();
    },
    setAll: (settings) => {
        settings.current = settings;
        localStorage.setItem('settings', JSON.stringify(settings.current));
    },
    setKey: (key, value) => {
        settings.current[key] = value;
        localStorage.setItem('settings', JSON.stringify(settings.current));
    }
};
localStorage.setItem('settings', JSON.stringify(settings.current));

getElem('sett_snap').onchange = (t) => {
    settings.setKey('snap_rotation', t.target.checked);
}
getElem('sett_snap').checked = settings.current.snap_rotation;

getElem('sett_snapAmt').onchange = (t) => {
    settings.setKey('snap_radius', parseInt(t.target.value));
}
getElem('sett_snapAmt').value = settings.current.snap_radius;

getElem('sett_expRel').onchange = (t) => {
    settings.setKey('rel_export', t.target.checked);
    getElem('center').checked = t.target.checked;
}
getElem('sett_expRel').checked = settings.current.rel_export;
getElem('center').checked = settings.current.rel_export;

getElem('sett_cw').onchange = (t) => {
    settings.setKey('cwidth', parseInt(t.target.value));
}
getElem('sett_cw').value = settings.current.cwidth;

getElem('sett_ch').onchange = (t) => {
    settings.setKey('cheight', parseInt(t.target.value));
}
getElem('sett_ch').value = settings.current.cheight;

getElem('sett_gsize').onchange = (t) => {
    settings.setKey('gsize', parseInt(t.target.value));
}
getElem('sett_gsize').value = settings.current.gsize;


class SnapCanvas extends fabric.Canvas {
    constructor(canvas, size, options) {
        super(canvas, options);
        this.gridGranularity = size;
        this.on('object:scaling', this.onFabricObjectScaling.bind(this));
        this.on('object:scaled', this.onFabricObjectScaled.bind(this));
    }

    snapGrid(cord) {
        return Math.round(cord / this.gridGranularity) * this.gridGranularity;
    }

    onFabricObjectScaled(e) {
        switch (e.target.type) {
            case 'group': {
                e.target.getObjects().forEach(obj => {
                    obj.set({
                        width: this.snapGrid(e.target.width * e.target.scaleX),
                        height: this.snapGrid(e.target.height * e.target.scaleY),
                    });
                });
                e.target.set({
                    width: this.snapGrid(e.target.width * e.target.scaleX),
                    height: this.snapGrid(e.target.height * e.target.scaleY),
                    scaleX: 1,
                    scaleY: 1,
                });
            }
        }
    }

    onFabricObjectScaling(e) {
        const active = this.getActiveObject();
        const [width, height] = [active.getScaledWidth(), active.getScaledHeight()];

        // X
        if (['tl', 'ml', 'bl'].indexOf(e.transform.corner) !== -1) {
            const tl = this.snapGrid(active.left);
            active.scaleX = (width + active.left - tl) / (active.width + active.strokeWidth);
            active.left = tl;
        } else if (['tr', 'mr', 'br'].indexOf(e.transform.corner) !== -1) {
            const tl = this.snapGrid(active.left + width);
            active.scaleX = (tl - active.left) / (active.width + active.strokeWidth);
        }

        // Y
        if (['tl', 'mt', 'tr'].indexOf(e.transform.corner) !== -1) {
            const tt = this.snapGrid(active.top);
            active.scaleY = (height + active.top - tt) / (active.height + active.strokeWidth);
            active.top = tt;
        } else if (['bl', 'mb', 'br'].indexOf(e.transform.corner) !== -1) {
            const tt = this.snapGrid(active.top + height);
            active.scaleY = (tt - active.top) / (active.height + active.strokeWidth);
        }

        // Avoid singularities
        active.scaleX = (active.scaleY >= 0 ? 1 : -1) * Math.max(Math.abs(active.scaleX), 0.001);
        active.scaleY = (active.scaleY >= 0 ? 1 : -1) * Math.max(Math.abs(active.scaleY), 0.001);
    }

}

window.selected = null;
/*window.addEventListener('beforeunload', function (event) {
    event.returnValue = 'deez nuts';
});*/

getElem('editor').style.display = 'none';

// Build using FabricJS v3.4

getElem('create').onclick = () => create();

getElem('import').onclick = () => Import();
const Import = () => {
    let json = window.prompt('Paste your JSON here.');
    let object = JSON.parse(json);
    let c = create(object.width, object.height, object.editorSettings.gridSize, object.editorSettings.name);

    object.shapes.forEach(shape => {
        let width = shape.width;
        let height = shape.height;
        let cRel = object.editorSettings.posRelativeCenter;
        getElem('center').checked = cRel;
        let left = cRel ? shape.position.x - width / 2 + object.width / 2 : shape.position.x;
        let right = cRel ? shape.position.y - height / 2 + object.height / 2 : shape.position.y;
        addSquare(c, left, right, width, height);
    });
}

const create = (cWidth, cHeight, gSize, bName) => {
    const cw = cWidth || getElemValue('cw', 'int');
    const ch = cHeight || getElemValue('ch', 'int');


    let htmlCanvas = getElem('c');
    htmlCanvas.width = cw;
    htmlCanvas.height = ch;

    let canvas = new SnapCanvas('c', 10, {
        selection: false,
        fireRightClick: true,
        stopContextMenu: true
    });

    const gridSize = gSize || getElemValue('bgrid', 'int');

    getElem('editor').style.display = 'flex';
    getElem('config').style.display = 'flex';
    getElem('creation').style.display = 'none';

    canvas.gridGranularity = gridSize;

    window.shapes = [];

    // create grid
    for (var i = 0; i < (ch / gridSize); i++) {
        canvas.add(new fabric.Line([i * gridSize, 0, i * gridSize, ch], {
            stroke: '#000',
            selectable: false,
            strokeWidth: 2,
            opacity: 0.25
        }));
        canvas.add(new fabric.Line([0, i * gridSize, cw, i * gridSize], {
            stroke: '#000',
            selectable: false,
            strokeWidth: 2,
            opacity: 0.25
        }))
    }

    const buildName = bName || getElemValue('bname', 'string');
    getElem('export').onclick = () => Export();
    const Export = () => {
        let rel = getElem('center').checked;
        let mainObject = {
            editorSettings: {
                name: buildName,
                gridSize: gridSize,
                posRelativeCenter: rel
            },
            width: cw,
            height: ch,
            shapes: []
        }

        shapes.forEach(shape => {
            mainObject.shapes.push(
                {
                    shape: shape.item(0).type,
                    width: shape.width,
                    height: shape.height,
                    position: {
                        x: rel ? shape.left + shape.width / 2 - cw / 2 : shape.left,
                        y: rel ? shape.top + shape.height / 2 - ch / 2 : shape.top
                    }
                }
            )
        });

        let exported = JSON.stringify(mainObject);

        getElem('exported').value = exported;
        console.log(exported);
        alert('Export successful!')
    }

    getElem('addSquare').onclick = () => addSquare(canvas);
    canvas.on({
        'object:moving': options => {
            options.target.set({
                left: Math.round(options.target.left / gridSize) * gridSize,
                top: Math.round(options.target.top / gridSize) * gridSize
            });
        },
        'object:rotating': options => {
            if (!settings.current.snap_rotation) return;
            let amt = settings.current.snap_radius || 15;
            options.target.rotate(Math.round(options.target.angle / amt) * amt)
        },
        'object:selected': (t) => {
            window.selected = t.target;
        }
    });

    return canvas;
}

const addSquare = (c, left, top, width, height) => {
    let rect = new fabric.Rect({
        width: width || c.gridGranularity,
        height: height || c.gridGranularity,
        fill: '#f00',
        opacity: 0.3,
        originX: 'center',
        originY: 'center',
        centeredRotation: true
    });
    let outline = new fabric.Rect({
        width: rect.width,
        height: rect.height,
        fill: 'rgba(0,0,0,0)',
        stroke: '#f00',
        strokeWidth: 2,
        opacity: 1,
        originX: 'center',
        originY: 'center',
        centeredRotation: true
    });

    let x = left || rect.width;
    let y = top || rect.height;

    let shape = new fabric.Group([rect, outline], {
        left: x,
        top: y,
        originX: 'left',
        originY: 'top',
        centeredRotation: true
    });
    shapes.push(shape);
    shape.on('mousedown', (e) => {
        if (e.button === 3) {
            shapes.splice(shapes.indexOf(shape), 1);
            c.remove(shape);
        };
    });
    c.fire('object:scaled', { target: shape })

    c.add(shape);

    return shape;
}