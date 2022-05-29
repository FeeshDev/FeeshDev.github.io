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
const basicKeybind = (key, callback) => {
    window.addEventListener('keydown', (e) => {
        if (e.key === key) {
            callback(true);
        }
    });
    window.addEventListener('keyup', (e) => {
        if (e.key === key) {
            callback(false);
        }
    });
}

dataUrlToBlobUrl = (dataurl) => {
    const base64ImageData = dataurl;
    const contentType = 'image/png';

    const byteCharacters = atob(base64ImageData.substr(`data:${contentType};base64,`.length));
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
        const slice = byteCharacters.slice(offset, offset + 1024);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    const blobUrl = URL.createObjectURL(blob);
    return blobUrl;
}

//TODO Add object properties or windows
//TODO Allow customizing color and opacity of objects (config)
//TODO Allow create by image
//TODO Allow moving and resizing by .5 of grid space

document.body.style.zoom = 1;
window.settings = {
    default: {
        snap_rotation: true,
        snap_radius: 15,
        rel_export: true,
        rel_size: false,
        cwidth: 600,
        cheight: 600,
        gsize: 50,
        ask_reload: false
    },
    reset: () => {
        for (const key in settings.current) {
            settings.current.setKey(key, settings.default[key]);
        }
        localStorage.setItem('settings', JSON.stringify(settings.current));
        if (confirm('Your settings have been reset, would you like to reload the page for them to apply?'))
            location.reload();
    },
    setAll: (settings) => {
        settings.current = { ...settings };
        localStorage.setItem('settings', JSON.stringify(settings.current));
    },
    setKey: (key, value) => {
        settings.current[key] = value;
        localStorage.setItem('settings', JSON.stringify(settings.current));
    }
};
try {
    if (localStorage.getItem('settings') !== '{}' && localStorage.getItem('settings') !== null) {
        settings.current = JSON.parse(localStorage.getItem('settings'));
    } else {
        throw 'ass';
    }
} catch (e) {
    settings.current = { ...settings.default };
}
for (const key in settings.current) {
    if (!Object.hasOwnProperty.call(settings.default, key)) {
        delete settings.current[key];
    }
}
for (const key in settings.default) {
    if (!Object.hasOwnProperty.call(settings.current, key)) {
        settings.setKey(key, settings.default[key]);
    }
}
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

getElem('sett_expRelSize').onchange = (t) => {
    settings.setKey('rel_size', t.target.checked);
    getElem('sizegrid').checked = t.target.checked;
}
getElem('sett_expRelSize').checked = settings.current.rel_size;
getElem('sizegrid').checked = settings.current.rel_size;

getElem('sett_askReload').onchange = (t) => {
    settings.setKey('ask_reload', t.target.checked);
}
getElem('sett_askReload').checked = settings.current.ask_reload;

getElem('sett_cw').onchange = (t) => {
    settings.setKey('cwidth', parseInt(t.target.value));
    getElem('cw').value = settings.current.cwidth;
}
getElem('sett_cw').value = settings.current.cwidth;
getElem('cw').value = settings.current.cwidth;

getElem('sett_ch').onchange = (t) => {
    settings.setKey('cheight', parseInt(t.target.value));
    getElem('ch').value = settings.current.cheight;
}
getElem('sett_ch').value = settings.current.cheight;
getElem('ch').value = settings.current.cheight;

getElem('sett_gsize').onchange = (t) => {
    settings.setKey('gsize', parseInt(t.target.value));
    getElem('bgrid').value = settings.current.gsize;
}
getElem('sett_gsize').value = settings.current.gsize;
getElem('bgrid').value = settings.current.gsize;


class SnapCanvas extends fabric.Canvas {
    constructor(canvas, size, options) {
        super(canvas, options);
        this.gridGranularity = size;
        this.bitchMode = false;
        this.on('object:scaling', this.onFabricObjectScaling.bind(this));
        this.on('object:scaled', this.onFabricObjectScaled.bind(this));
        this.on('object:moving', this.onFabricObjectMoving.bind(this));
    }

    snapGrid(cord) {
        let gridSize = this.gridGranularity;
        if (this.bitchMode) gridSize /= 2;
        return Math.round(cord / gridSize) * gridSize;
    }

    onFabricObjectMoving(e) {
        e.target.set({
            left: this.snapGrid(e.target.left),
            top: this.snapGrid(e.target.top)
        });
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
window.addEventListener('beforeunload', function (event) {
    if (settings.current.ask_reload) {
        event.returnValue = 'deez nuts';
    }
});

getElem('editor').style.display = 'none';

// Build using FabricJS v3.4

getElem('create').onclick = () => create();

getElem('import').onclick = () => Import();
const Import = () => {
    let json = window.prompt('Paste your JSON here.');
    let object = JSON.parse(json);
    let cRel = object.editorSettings.posRelativeCenter;
    let sRel = object.editorSettings.sizeRelativeToGrid;
    let c = create(object.width, object.height, object.editorSettings.gridSize, object.editorSettings.name, object);

    object.shapes.forEach(shape => {
        let width = shape.width;
        let height = shape.height;
        let x = shape.position.x;
        let y = shape.position.y;
        if (sRel) {
            width *= object.editorSettings.gridSize;
            height *= object.editorSettings.gridSize;
            x *= object.editorSettings.gridSize;
            y *= object.editorSettings.gridSize;
        }
        getElem('center').checked = cRel;
        getElem('sizegrid').checked = sRel;
        let left = cRel ? x - width / 2 + object.width / 2 : x;
        let right = cRel ? y - height / 2 + object.height / 2 : y;
        addSquare(c, left, right, width, height);
    });
}

const create = (cWidth, cHeight, gSize, bName, importObj) => {
    const cw = cWidth || getElemValue('cw', 'int');
    const ch = cHeight || getElemValue('ch', 'int');


    let htmlCanvas = getElem('c');
    htmlCanvas.width = cw;
    htmlCanvas.height = ch;

    window.canvas = new SnapCanvas('c', 10, {
        selection: false,
        fireRightClick: true,
        stopContextMenu: true
    });

    basicKeybind('Control', state => {
        canvas.bitchMode = state;
    });

    const gridSize = gSize || getElemValue('bgrid', 'int');

    getElem('editor').style.display = 'flex';
    getElem('config').style.display = 'flex';
    getElem('creation').style.display = 'none';

    canvas.gridGranularity = gridSize;

    window.shapes = [];

    // create grid
    let gridLines = [];
    for (var i = 0; i < (cw / gridSize); i++) {
        let line = new fabric.Line([i * gridSize, 0, i * gridSize, ch], {
            stroke: '#000',
            selectable: false,
            strokeWidth: 2,
        });
        gridLines.push(line);
    }
    for (var i = 0; i < (ch / gridSize); i++) {
        let line = new fabric.Line([0, i * gridSize, cw, i * gridSize], {
            stroke: '#000',
            selectable: false,
            strokeWidth: 2,
        });
        gridLines.push(line);
    }

    let greenbg = new fabric.Rect({
        width: cw,
        height: ch,
        fill: '#2d570b',
        opacity: 1,
        centeredRotation: true,
        selectable: false,
        hoverCursor: 'default'
    });
    canvas.add(greenbg);
    let grid = new fabric.Group(gridLines, {
        selectable: false,
        opacity: 0.25,
        hoverCursor: 'default'
    });
    canvas.add(grid);

    const buildName = bName || getElemValue('bname', 'string');
    getElem('exportjson').onclick = () => ExportJSON();
    const ExportJSON = () => {
        let relPos = getElem('center').checked;
        let relSize = getElem('sizegrid').checked;
        let mainObject = {
            editorSettings: {
                name: buildName,
                gridSize: gridSize,
                posRelativeCenter: relPos,
                sizeRelativeToGrid: relSize,
                bgImageUrl: bgImage && bgImage.getSrc() !== '' ? bgImage.getSrc() : null
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
                        x: relPos ? shape.left + shape.width / 2 - cw / 2 : shape.left,
                        y: relPos ? shape.top + shape.height / 2 - ch / 2 : shape.top
                    }
                }
            )
        });
        if (mainObject.editorSettings.sizeRelativeToGrid) {
            mainObject.shapes.forEach(group => {
                group.width /= mainObject.editorSettings.gridSize;
                group.height /= mainObject.editorSettings.gridSize;
                group.position.x /= mainObject.editorSettings.gridSize;
                group.position.y /= mainObject.editorSettings.gridSize;
            });
        };

        let exported = JSON.stringify(mainObject);

        getElem('exported').value = exported;
        console.log(exported);
        alert('Export successful!')
    }

    getElem('exportpng').onclick = () => ExportPNG();
    const ExportPNG = () => {
        let keepProcess = confirm('You have started the png export process, would you like to continue?');
        if (!keepProcess) return;
        let keepBg = confirm('Would you like to keep the background in the final exported image?');
        let keepRef = confirm('Would you like to keep the reference image in the final exported image?');
        let keepgrid = confirm('Would you like to keep the grid in the final exported image?');
        if (!keepRef && bgImage) bgImage.visible = false;
        if (!keepgrid) grid.visible = false;
        if (!keepBg) greenbg.visible = false;
        let data = canvas.toDataURL();
        let bloburl = dataUrlToBlobUrl(data);
        window.open(bloburl, '_blank');
        alert('Image exported, if a window did not open make sure to enable pop-ups and try again!');
        if (!keepRef && bgImage) bgImage.visible = true;
        if (!keepgrid) grid.visible = true;
        if (!keepBg) greenbg.visible = true;
    }

    window.bgImage = null;
    getElem('importbg').onclick = () => ImportBG('imp');
    const ImportBG = (src) => {
        let link = null;
        if (src === 'imp') {
            link = prompt('Please provide a valid cirect link to an image to use as a background.')
        } else if (src && src !== '') {
            link = src;
        } else {
            return;
        }
        if (link === null) return;
        console.log(link)
        try {
            fabric.Image.fromURL(link, function (img) {
                img.selectable = false;
                img.hoverCursor = 'default';
                let scaleRatioX = cw / img.width;
                let scaleRatioY = ch / img.height;
                img.set({
                    scaleX: scaleRatioX,
                    scaleY: scaleRatioY
                })
                canvas.add(img);
                img.center();
                canvas.sendToBack(img);
                img.bringForward();
                bgImage = img;
            }, { crossOrigin: 'anonymous' });
        } catch (e) {
            alert('There was an error loading the background image.')
        }
    }
    if (importObj) {
        ImportBG(importObj.editorSettings.bgImageUrl);
    }

    getElem('removebg').onclick = () => RemoveBG();
    const RemoveBG = () => {
        canvas.remove(bgImage);
        bgImage = null;
    }

    getElem('addSquare').onclick = () => addSquare(canvas);
    canvas.on({
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
        centeredRotation: true,
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
        centeredRotation: true,
    });

    let x = left >= 0 ? left : rect.width;
    let y = top >= 0 ? top : rect.height;

    let shape = new fabric.Group([rect, outline], {
        left: x,
        top: y,
        originX: 'left',
        originY: 'top',
        centeredRotation: true,
        noScaleCache: false,
        lockSkewingX: true,
        lockSkewingY: true
    });
    shapes.push(shape);
    shape.on('mousedown', (e) => {
        if (e.button === 3) {
            shapes.splice(shapes.indexOf(shape), 1);
            c.remove(shape);
        };
    });
    c.bitchMode = true;
    c.fire('object:scaled', { target: shape });
    c.bitchMode = false;

    c.add(shape);

    return shape;
}