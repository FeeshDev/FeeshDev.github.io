let gameInstance = null;
const imgFromSrc = string => {
    let image = new Image();
    image.src = string;
    image.onload = () => {
        return image;
    }
    //return image;
}
const imgFromId = id => {
    return document.getElementById(id);
}
const optimizedSort = (array, valueKey) => {
    let values = array.map(function (e, i) {
        return { index: i, value: e[valueKey] };
    });

    values.sort(function (a, b) {
        return +(a.value > b.value) || +(a.value === b.value) - 1;
    });

    let sortedValues = values.map(function (e) {
        return array[e.index];
    });

    //console.log(sortedValues);
    return sortedValues;
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
class FPSClass {
    constructor() {
        this.startTime = 0;
        this.frameNumber = 0;
    }
    getFPS() {
        this.frameNumber++;
        const timeSinceStart = (Date.now() - this.startTime) / 1000;
        const fps = Math.floor(this.frameNumber / timeSinceStart);
        if (timeSinceStart > 1) {
            this.startTime = Date.now();
            this.frameNumber = 0;
        }
        return fps;
    }
}
let fps = new FPSClass();

class GameIO {
    constructor() {
        gameInstance = this;
        this.renderers = [];
        this.scenes = [];
        this.particles = [];
        this.envs = {};
        this.types = [];
        this.objects = [];
        this.usedIDs = [];
        this.lerpSpeed = 1;

        this.renderDebug = false;
        this.renderHitboxes = false;

        this.messageQueue = [];

        this.recycledCanvases = [];
        for (let i = 0; i < 30; i++) {
            this.recycledCanvases.push(document.createElement("canvas"));
        }
        this.tempCanvases = [];
        this.tempCtxs = [];
        for (let a = 0; a < 5; a++) {
            this.tempCanvases.push(document.createElement("canvas"));
            this.tempCtxs.push(this.tempCanvases[a].getContext("2d"));
        }

        this.prerenderCanvas = document.createElement("canvas");
        this.prerenderCtx = this.prerenderCanvas.getContext("2d");

        this.blankCanvas = document.createElement("canvas");
        this.textRenderQueue = [];
        this.savedTexts = [];
        this.savedStrokes = [];

        this.me = {
            id: -1, visual: { position: new this.Vector2(0, 0) },
            slots: [null, null, null],
            new: { position: new this.Vector2(0, 0) },
            actualNew: { position: new this.Vector2(0, 0) },
            old: { position: new this.Vector2(0, 0) }
        };
        this.ws = { readyState: -1, send: () => { }, close: () => { } };
        this.connecting = false;
        this.spectating = true;
        this.currentPackets = [];

        this.hasEnvs = false;

        this.serverDetails = {
            lastFrame: Date.now(),
            thisFrame: Date.now(),
            dt: 1,
            dtArray: [5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2],
            fpsArray: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
            ticksSincePacket: 0
        };

        this.clientDetails = {
            lastFrame: Date.now(),
            thisFrame: Date.now(),
            dt: 1
        };

        this.packetFunctions = {
            setID: packet => {
                this.spectating = packet.s;
                this.objects.forEach(obj => {
                    if (obj.id === packet.id) {
                        this.me = obj;
                    }
                });
            },
            // Add
            x: packet => {
                if (this.getObj(packet.i) !== null) {
                    return null;
                }
                let obj = null;
                if (this.types[packet.b] === undefined) {
                    console.log(packet.b);
                }
                obj = new gameInstance.types[packet.b](packet);
                obj.visual.position.x = obj.new.position.x;
                obj.visual.position.y = obj.new.position.y;
                obj.visual.rotation = obj.new.rotation;
                this.objects.push(obj);
                return;
            },
            // Update
            y: packet => {
                if (this.getObj(packet.a[0]) === null) {
                    this.askForObj(packet.a[0]);
                    return;
                }
                let obj = this.getObj(packet.a[0]);
                obj.ticksAsleep = 0;
                obj.old.position = obj.visual.position.clone();
                obj.old.rotation = obj.visual.rotation;
                obj.actualOld.position = obj.new.position.clone();
                obj.actualOld.rotation = obj.new.rotation;
                obj.new.position = new this.Vector2(packet.a[1], packet.a[2]);
                if (isNaN(obj.old.position.x)) {
                    obj.old.position.x = obj.new.position.x;
                    obj.actualOld.position.x = obj.new.position.x;
                    console.log("NaN X Value");
                }
                if (isNaN(obj.old.position.y)) {
                    obj.old.position.y = obj.new.position.y;
                    obj.actualOld.position.y = obj.new.position.y;
                    console.log("NaN Y Value");
                }
                if (Math.abs(obj.visual.position.x - obj.new.position.x) < 0.3) {
                    obj.old.position.x = obj.new.position.x;
                }
                if (Math.abs(obj.visual.position.y - obj.new.position.y) < 0.3) {
                    obj.old.position.y = obj.new.position.y;
                }
                obj.new.rotation = packet.a[3] / 100;
                if (Math.abs(obj.old.rotation - obj.new.rotation) > Math.PI) {
                    if (obj.old.rotation > obj.new.rotation) {
                        obj.old.rotation -= Math.PI * 2;
                    } else {
                        obj.old.rotation += Math.PI * 2;
                    }
                }
                this.usedIDs.push(obj.id);
                obj.updatePacket(packet);
            },
            // Remove
            z: packet => {
                /*
                for (let i = 0; i < this.objects.length; i++) {
                    if (this.objects[i].id === packet.i) {
                        if (this.types[this.objects[i].type].remove(this.objects[i], packet)) {
                            return;
                        }
                        if (this.objects[i].visual.parent !== null) {
                            this.objects[i].visual.parent.remove(this.objects[i].visual);
                        }
                        this.objects.splice(i, 1);
                        break;
                    }
                }
                */

                this.objects.forEach((object, index) => {
                    if (object.id === packet.i) {
                        if (object.remove(packet)) {
                            return;
                        }
                        if (object.visual.parent !== null) {
                            object.visual.parent.remove(object.visual);
                            if (object.idDisplay && object.idDisplay.parent) {
                                object.idDisplay.parent.remove(object.idDisplay);
                            }
                        }
                        this.objects.splice(index, 1);
                        return;
                    }
                })
            },
            // Get envs
            e: packet => {
                if (!this.hasEnvs) {
                    this.hasEnvs = true;
                    this.envs = packet.envs;
                    this.onGetEnvs(this.envs);
                }
            }
        };
    }

    Vector2 = class Vector2 {
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }

        clone() {
            return new gameInstance.Vector2(this.x, this.y);
        }

        copy(v) {
            this.x = v.x;
            this.y = v.y;
        }

        set(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    Vector3 = class Vector3 {
        constructor(x = 0, y = 0, z = 0) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        clone() {
            return new this.Vector3(this.x, this.y, this.z);
        }
    }

    Vector4 = class Vector4 {
        constructor(x = 0, y = 0, z = 0, w = 0) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }

        clone() {
            return new this.Vector4(this.x, this.y, this.z, this.w);
        }
    }

    color = class Color {
        constructor() { }

        static hexToRgb(hex) {
            // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
            let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                return r + r + g + g + b + b;
            });

            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            if (!result) {
                return;
            }
            let r = parseInt(result[1], 16);
            let g = parseInt(result[2], 16);
            let b = parseInt(result[3], 16);
            return [r, g, b];
        }

        static rgbToHex(r, g, b) {
            const colour = c => clamp(0, 255, Math.round(c)).toString(16).padStart(2, "0");
            let res = `#${colour(r)}${colour(g)}${colour(b)}`;
            return res;
        }

        static colorLerp(hex1, hex2, percent = 50) {
            const startingRGB = gameInstance.color.hexToRgb(hex1);
            const targetRGB = gameInstance.color.hexToRgb(hex2);
            const resRGB = startingRGB.map((colour, i) => gameInstance.normalLerp(colour, targetRGB[i], percent / 100));
            return gameInstance.color.rgbToHex(...resRGB);
        }
    }

    gamepad() {
        let gamepads = [];
        if (navigator.getGamepads !== undefined) {
            gamepads = navigator.getGamepads();
        }

        gamepads.forEach(gamepad => {
            if (gamepad !== undefined) return gamepad;
        });
        return null;
    }

    gamepadControl() {
        let gamepad = {
            buttons: [],
            axes: []
        };
        for (let i = 0; i < 16; i++) {
            gamepad.buttons.push({
                pressed: false
            });
        }
        return gamepad;
    }

    getCanvas() {
        if (this.recycledCanvases.length > 0) {
            return this.recycledCanvases.splice(this.recycledCanvases.length - 1, 1)[0];
        }

        return document.createElement("canvas");
    }

    createCanvas(width, height) {
        let c = document.createElement("canvas");
        c.width = width;
        c.height = height;
        return c;
    }

    reverseFromRenderer(p, renderer) {
        //p.x = ( p.x - renderer.actualWidth / 2 ) * renderer.aratio;
        //p.y = ( p.y - renderer.actualHeight / 2 ) * renderer.aratio;
        p.x = p.x / renderer.aratio + renderer.actualWidth / 2;
        p.y = p.y / renderer.aratio + renderer.actualHeight / 2;
    }

    mouse = class Mouse extends this.Vector2 {
        constructor(renderer = undefined) {
            super(2, 2);
            this.renderer = renderer;
            this.clicking = false;
            this.rightClicking = false;
            this.changed = false;
            this.rightChanged = true;
            this.moved = false;
            this.locked = false;
            this.client = new gameInstance.Vector2(0, 0);
            this.enabled = true;

            const mous = this;

            window.addEventListener("mousemove", event => {
                if (!mous.enabled) {
                    return;
                }
                mous.x = event.clientX;
                mous.y = event.clientY;
                mous.fromRenderer(mous.renderer);
                mous.moved = true;
            });

            window.addEventListener("click", event => {
                if (event.button > 2) {
                    event.preventDefault();
                }
            });

            window.addEventListener("contextmenu", event => {
                event.preventDefault();
                if (event.stopPropagation !== undefined)
                    event.stopPropagation();
            });

            window.addEventListener("mousedown", event => {
                if (event.button === 0) {
                    mous.clicking = true;
                    mous.changed = true;
                }
                else if (event.button == 2) {
                    mous.rightClicking = true
                    mous.rightChanged = true;
                }
                else if (event.button > 2) {
                    event.preventDefault();
                }
            });

            window.addEventListener("mouseup", event => {
                if (event.button === 0) {
                    mous.clicking = false;
                    mous.changed = true;
                }
                else if (event.button === 2) {
                    mous.rightClicking = false;
                    mous.rightChanged = true;
                }
                else if (event.button > 2) {
                    // This one works
                    event.preventDefault();
                }
            });
        }

        fromRenderer(renderer) {
            this.x = (this.x - renderer.actualWidth / 2) * renderer.aratio;
            this.y = (this.y - renderer.actualHeight / 2) * renderer.aratio;
        }

        isCollidingWithRectangle(rectangle) {
            if (this.x < rectangle.hitbox.x + rectangle.width / 2 &&
                this.x > rectangle.hitbox.x - rectangle.width / 2 &&
                this.y < rectangle.hitbox.y + rectangle.height / 2 &&
                this.y > rectangle.hitbox.y - rectangle.height / 2)
                return true;
            return false;
        }
    };

    touch = () => {
        let touches = [];
        window.addEventListener("touchmove", event => {
            console.log("Touch move");
            event.preventDefault();
            while (event.targetTouches.length > touches.length) {
                touches.push(new this.Vector2(0, 0));
            }
            while (event.targetTouches.length < touches.length) {
                touches.splice(0, 1);
            }
            event.targetTouches.forEach((touch, i) => {
                touches[i].x = touch.pageX;
                touches[i].y = touch.pageY;
            });
        });
        window.addEventListener("touchend", event => {
            while (event.targetTouches.length < touches.length) {
                touches.splice(0, 1);
            }
        });
        window.addEventListener("touchstart", event => {
            event.preventDefault();
            event.targetTouches.forEach(touch => {
                if ((touch.pageX - this.renderers[0].c.width / 2 - this.renderers[0].left) * this.renderers[0].ratio / 2 > 0) {
                    controls.key_w = true;
                }
            });
        });
        return touches; // not a class
    }

    renderer = class Renderer {
        constructor(canvas) {
            if (canvas === undefined) {
                canvas = document.createElement("canvas");
                canvas.style.position = "absolute";
                document.body.appendChild(canvas);
                document.body.style.margin = "0";
                document.body.style.padding = "0";
                document.body.style.overflow = "hidden";
            }

            this.ctx = canvas.getContext('2d');
            this.c = canvas;
            this.clearScreen = true;
            this.top = 0;
            this.left = 0;
            this.leftOfScreen = 0;
            this.rightOfScreen = 0;
            this.topOfScreen = 0;
            this.bottomOfScreen = 0;
            this.position = new gameInstance.Vector2(0, 0);
            this.ratio = 1;
            this.qualitySize = 1;
            this.smoothingEnabled = true;
            this.c.style.zIndex = 10;

            window.addEventListener('resize', () => gameInstance.resize(), false);

            gameInstance.renderers.push(this);
            gameInstance.resize();
            gameInstance.resize();
        }

        render(scene) {
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            if (this.clearScreen) {
                this.clear();
            }
            this.ctx.translate(-this.position.x / this.ratio + this.c.width / 2, -this.position.y / this.ratio + this.c.height / 2);
            scene.render(this.ctx, this.ratio * scene.camera.ratio, 1);
        }

        clear() {
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.clearRect(0, 0, this.c.width, this.c.height);
        }

        drawBackground() {
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.fillStyle = "#000";
            this.ctx.globalAlpha = 1;
            this.ctx.fillRect(0, 0, this.c.width, this.c.height);
        }
    }

    socket = class Socket extends WebSocket {
        constructor(ip, onmessage, onopen, onclose, onerror) { // !!!! ip grabber confirmed !!!!
            if (ip === undefined) return null;
            super(ip);

            this.binaryType = "arraybuffer";
            this.onmessage = onmessage || (() => { });
            this.onopen = onopen || (() => { });
            this.onclose = onclose || (() => { });
            this.onerror = onerror || (() => { });
        }
    }

    resize() {
        let renderSize = 1;
        this.devicePixelRatio = 1;
        this.renderers.forEach(renderer => {
            renderSize = renderer.qualitySize;
            if (document.body.clientWidth / renderer.c.width <= document.body.clientHeight / renderer.c.height) {
                renderer.c.height = document.body.clientHeight * gameInstance.devicePixelRatio;
                renderer.c.width = renderer.c.height * 16 / 9;
                renderer.ratio = 1080 / renderer.c.height;
                renderer.c.style.height = "100%";
                renderer.c.style.width = document.body.clientHeight / renderer.c.height * renderer.c.width + 2;
                renderer.c.style.top = "0";
                renderer.top = 0;
                renderer.c.style.left = document.body.clientWidth / 2 - (document.body.clientHeight / renderer.c.height * renderer.c.width) / 2 - 1 + "px";
                renderer.left = document.body.clientWidth / 2 - (document.body.clientHeight / renderer.c.height * renderer.c.width) / 2 - 1;
            } else {
                renderer.c.width = document.body.clientWidth * gameInstance.devicePixelRatio;
                renderer.c.height = renderer.c.width * 9 / 16;
                renderer.ratio = 1920 / renderer.c.width;
                renderer.c.style.width = "100%";
                renderer.c.style.height = document.body.clientWidth / renderer.c.width * renderer.c.height;
                renderer.c.style.left = "0";
                renderer.left = 0;
                renderer.c.style.top = document.body.clientHeight / 2 - (document.body.clientWidth / renderer.c.width * renderer.c.height) / 2 + "px";
                renderer.top = document.body.clientHeight / 2 - (document.body.clientWidth / renderer.c.width * renderer.c.height) / 2;
            }

            renderer.aratio = renderer.ratio * renderer.qualitySize;
            renderer.actualWidth = document.body.clientWidth;
            renderer.actualHeight = document.body.clientHeight;

            renderer.leftOfScreen = -1920 / 2 - ((document.body.clientWidth * gameInstance.devicePixelRatio - renderer.c.width) / 2 * renderer.ratio);
            renderer.topOfScreen = -1080 / 2 - ((document.body.clientHeight * gameInstance.devicePixelRatio - renderer.c.height) / 2 * renderer.ratio);
            renderer.rightOfScreen = -renderer.leftOfScreen;
            renderer.bottomOfScreen = -renderer.topOfScreen;
            renderer.c.width /= renderSize;
            renderer.c.height /= renderSize;
            renderer.ratio *= renderSize;
            renderer.ctx.imageSmoothingEnabled = renderer.smoothingEnabled;
        });
    };

    object = class Object {
        constructor() {
            this.position = new gameInstance.Vector2(0, 0);
            this.size = 1;
            this.opacity = 1;
            this.rotation = 0;
            this.type = "object";
            this.background = false;
            this.debugObject = false;
            this.independentOpacity = false;
            this.independentRotation = false;
            this.enabled = true;
            this.parent = null;
            this.objects = [];
            this.belowObjects = [];
            this.hitbox = {
                x: 0,
                y: 0
            }
            this.calculatedHitbox = false;
        }

        calculateHitbox() {
            let objs = [];
            this.hitbox.x = this.hitbox.y = 0;
            let obj = this;

            while (obj !== null && obj.type !== "scene") {
                objs.unshift(obj);
                obj = obj.parent;
            }

            objs.forEach(obj => {
                this.hitbox.x += obj.position.x;
                this.hitbox.y += obj.position.y;
            })

            this.hitboxArray = objs;
            this.calculatedHitbox = true;
        }

        getGlobalPosition() {
            let objs = [];
            let pos = new gameInstance.Vector2();
            let obj = this;

            while (obj.type !== "scene") {
                objs.unshift(obj);
                obj = obj.parent;
            }

            objs.forEach(obj => {
                pos.x += obj.position.x;
                pos.y += obj.position.y;
            })

            return pos;
        }

        add(object) {
            if (object.parent !== null) {
                console.log("You can only have 1 parent per object");
                console.log(object);
                console.log(object.parent);
                console.trace();
                return;
            }
            object.parent = this;
            this.objects.push(object);
        }

        addBelow(object) {
            if (object.parent !== null) {
                console.log("You can only have 1 parent per object");
                return;
            }
            object.parent = this;
            this.belowObjects.unshift(object);
        }

        traverse(cb) {
            cb(this);

            this.objects.forEach(object => {
                cb(object);
                object.traverse(cb);
            });

            this.belowObjects.forEach(belowObject => {
                cb(belowObject);
                belowObject.traverse(cb);
            });
        }

        remove(object) {
            if (object.type === "text" && object.canvas !== undefined) {
                gameInstance.recycledCanvases.push(object.canvas);
            }
            if (object.type === "particle") {
                object.objects.forEach(subObject => {
                    if (subObject.type === "text" && subObject.canvas !== undefined) {
                        object.remove(subObject);
                    }
                })
            }
            while (this.objects.indexOf(object) !== -1) {
                this.objects.splice(this.objects.indexOf(object), 1);
                object.parent = null;
            }
            while (this.belowObjects.indexOf(object) !== -1) {
                this.belowObjects.splice(this.belowObjects.indexOf(object), 1);
                object.parent = null;
            }
        }

        render(ctx, ratio, opacity) {
            if (!this.enabled) {
                return;
            }
            if (this.isDebug && !gameInstance.renderDebug) return;
            if (this.isHitbox && !gameInstance.renderHitboxes) return;

            if (this.independentOpacity) {
                opacity = Math.min(this.opacity, 1);
            } else {
                opacity = Math.min(Math.max(0, opacity), 1);
                opacity = Math.min(this.opacity * opacity, 1);
            }
            if (opacity <= 0) {
                return;
            }
            let size = this.size;
            let invRatio = 1 / ratio;
            let translateX = this.position.x * invRatio;
            let translateY = this.position.y * invRatio;
            let needsTranslate = translateX !== 0 || translateY !== 0;
            let needsRotate = this.rotation !== 0;
            if (needsTranslate) {
                ctx.translate(translateX, translateY);
            }
            if (needsRotate) {
                ctx.rotate(this.rotation);
            }
            let newRatio = ratio / size;
            //this.belowObjects = optimizedSort(this.belowObjects, "layer");
            this.belowObjects.forEach(object => {
                object.render(ctx, newRatio, opacity);
            });
            ctx.globalAlpha = opacity;
            this.renderSpecific(ctx, ratio);
            //this.objects = optimizedSort(this.objects, "layer");
            this.objects.forEach(object => {
                if (!object.render) {
                    console.log(object);
                }
                if (object.independentRotation) {
                    ctx.rotate(-this.rotation);
                    object.render(ctx, newRatio, opacity);
                    ctx.rotate(this.rotation);
                } else {
                    object.render(ctx, newRatio, opacity);
                }
            });
            if (needsRotate) {
                ctx.rotate(-this.rotation);
            }
            if (needsTranslate) {
                ctx.translate(-translateX, -translateY);
            }
        }
        renderSpecific(ctx, ratio) {
            return;
        }
    }

    obj = class Obj {
        constructor(packet) {
            this.new = {
                position: new gameInstance.Vector2(packet.x, packet.y),
                rotation: packet.a / 100
            }

            this.old = {
                position: new gameInstance.Vector2(packet.x, packet.y),
                rotation: packet.a / 100
            }

            this.actualOld = {
                position: new gameInstance.Vector2(packet.x, packet.y),
                rotation: packet.a / 100
            };

            this.id = packet.i;

            this.idDisplay = new gameInstance.text(this.id, 0, -110, "#fff", "Oswald", 26);
            this.idDisplay.isDebug = true;
            gameInstance.mainScene.add(this.idDisplay);
            this.hasHealthBar = false;

            this.ticksAsleep = 0;
            this.visual = new gameInstance.object();
            this.type = packet.b;
            this.needsUpdate = packet.n;
        }

        tickUpdate() { }

        updatePacket(packet) { }

        remove(packet) { }
    };

    drawBorder(canvas, size, color, borderOpacity) {
        console.log("border draw");
        let img = canvas;
        canvas = this.tempCanvases[0];
        let ctx = this.tempCtxs[0];
        this.copyCanvas(img, canvas);
        let tempCanvas = this.tempCanvases[1];
        let tempCtx = this.tempCtxs[1];
        this.copyCanvas(img, tempCanvas);
        let dArr = [-1, -1, 0, -1, 1, -1, -1, 0, 1, 0, -1, 1, 0, 1, 1, 1]; // wtf is this for
        let angles = 20;
        let s = size;
        for (let a = 0; a < s; a++) {
            for (let i = 0; i < angles; i += 1) {
                let angle = i / angles * Math.PI * 2;
                tempCtx.drawImage(img, Math.cos(angle) * a, Math.sin(angle) * a);
            }
        }

        tempCtx.globalCompositeOperation = "source-in";
        tempCtx.fillStyle = color;
        tempCtx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = borderOpacity || 1;
        ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;

        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(img, 0, 0);

        this.copyCanvas(canvas, img)
        return img;
    }

    copyCanvas(source, dest) {
        dest.width = source.width;
        dest.height = source.height;
        let dctx = dest.getContext("2d");
        dctx.clearRect(0, 0, dest.width, dest.height);
        dctx.drawImage(source, 0, 0, dest.width, dest.height);
    }

    image = class Image extends this.object {
        constructor(image = null, x = 0, y = 0, width, height, opacity = 1) {
            super();
            this.image = image;
            if (this.image == null || this === undefined) {
                /*console.log( "Null image" );
                console.trace();
                return new this.object();*/
            }
            this.position = new gameInstance.Vector2(x, y);
            this.width = width || image.width || 100;
            this.height = height || image.height || 100;
            this.opacity = opacity;
            this.type = "image";
        }

        renderSpecific(ctx, ratio) {
            this.invRatio = 1 / ratio * this.size;
            try {
                ctx.drawImage(this.image, -this.width * 0.5 * this.invRatio, -this.height * 0.5 * this.invRatio, this.width * this.invRatio, this.height * this.invRatio);
                this.drawImages++;
            } catch (e) {
                if (this.image === null) {
                    return;
                }
                console.log("Failed to draw image");
                console.log(this.image);
                if (this.image !== undefined) {
                    console.log(this.image.id);
                }
            }
        }
    }

    prerender(obj, width, height, blur, canvas, scale = 1) {
        let hadCanvas = true;
        if (canvas === undefined) {
            canvas = this.getCanvas();
            hadCanvas = false;
        }
        //blur *= scale;
        let ctx;
        if (canvas.context !== undefined) {
            ctx = canvas.context;
        } else {
            ctx = canvas.getContext("2d");
            canvas.context = ctx;
        }
        if (height === undefined) {
            height = width;
        }
        if (canvas.width !== width * scale || canvas.height !== height * scale) {
            canvas.width = Math.max(width * scale, 1);
            canvas.height = Math.max(height * scale, 1);
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let oldX = obj.position.x;
        let oldY = obj.position.y;
        obj.position = new this.Vector2();
        if (blur) {
            prerenderCanvas.width = canvas.width;
            prerenderCanvas.height = canvas.height;
            prerenderCtx.translate(canvas.width / 2, canvas.height / 2);
            obj.render(prerenderCtx, 1 / scale, 1);
            ctx.filter = "blur(" + blur + "px)";
            ctx.drawImage(prerenderCanvas, 0, 0, canvas.width, canvas.height);
        } else {
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.filter = "";
            obj.render(ctx, 1 / scale, 1);
        }
        if (hadCanvas) {
            return;
        }
        return new this.image(canvas, oldX, oldY, width, height, obj.opacity);
    }

    flushTextRenderQueue = () => {
        while (this.textRenderQueue.length > 0) {
            let text = this.textRenderQueue.splice(0, 1)[0];
            text.redraw();
        }
    }

    findText = (queue, text) => {
        for (let i = 0; i < queue.length; i++) {
            const test = queue[i];
            if (test.text === text.text && test.fontSize === text.fontSize && test.textSize === text.fontSize) {
                return test;
            }
        }
        return null;
    }

    textImage(oldCanvas, text, fillStyle, font, fontSize, otherParams, stroke, lineWidth, clr, obj) {
        let canvas;
        if (oldCanvas == null || oldCanvas === undefined) {
            canvas = this.getCanvas();
        } else {
            canvas = oldCanvas;
        }
        let ctx = canvas.getContext("2d");
        fontSize *= 2;
        ctx.font = otherParams + " " + fontSize + "px " + font;
        ctx.fillStyle = fillStyle;
        ctx.strokeStyle = fillStyle;
        if (stroke) {
            ctx.lineWidth = lineWidth * 2;
        }
        let width = ctx.measureText(text).width;
        let height = fontSize * 1.2;
        if (stroke) {
            width += lineWidth * 2;
            height += lineWidth * 2;
        }
        if (otherParams.includes("italic")) {
            width += 20;
        }
        if (!clr) {
            canvas.width = Math.max(width, 1);
            canvas.height = Math.max(height, 1);
        }
        ctx.fillStyle = "#000";
        //ctx.fillRect( 0, 0, width, height );
        ctx.font = otherParams + " " + fontSize + "px " + font;
        ctx.fillStyle = fillStyle;
        ctx.strokeStyle = fillStyle;
        ctx.imageSmoothingEnabled = false;
        if (stroke) {
            ctx.lineWidth = lineWidth * 2;
            ctx.miterLimit = 0.1;
            ctx.strokeText(text, lineWidth, fontSize / 4 + height / 2 + lineWidth / 2);
        } else {
            ctx.fillText(text, -(width - canvas.width) / 2, fontSize / 4 + height / 2 - (height - canvas.height) / 2);
        }
        if (obj && obj.hasBorder) {
            text = obj;
            let bp = text.borderProperties;
            canvas = this.drawBorder(canvas, bp.size, bp.color, bp.opacity);
        }
        return canvas;
    }

    measureText(text, font, fontSize, stroke = 0) {
        let canvas = this.getCanvas();
        let ctx = canvas.getContext("2d");

        ctx.font = `${fontSize}px ${font}`;
        let width = ctx.measureText(text).width;
        let height = fontSize * 1.4;
        if (stroke) {
            width += lineWidth * 2;
            height += lineWidth * 2;
        }
        return { width, height };
    }

    fragmentText(text = "", font = "Arial", fontSize = "20", maxWidth = 200) {
        let words = text.split(' ');
        let lines = [];
        let line = "";
        if (this.measureText(text, font, fontSize).width < maxWidth) {
            return [text];
        }

        while (words.length > 0) {
            let split = false;

            while (this.measureText(words[0], font, fontSize).width >= maxWidth) {
                let tmp = words[0];
                words[0] = tmp.slice(0, -1);
                if (!split) {
                    split = true;
                    words.splice(1, 0, tmp.slice(-1));
                } else {
                    words[1] = tmp.slice(-1) + words[1];
                }
            }

            if (this.measureText(line + words[0], font, fontSize).width < maxWidth) {
                line += words.shift() + " ";
            } else {
                lines.push(line);
                line = "";
            }
            if (words.length === 0) {
                lines.push(line);
            }

        }
        return lines;
    }

    fragmentParagraph(text = "", font = "Arial", fontSize = "20", maxWidth = 200) {
        let lines = text.split("\n");
        let finalLines = [];
        lines.forEach(line => {
            let fragmentedTextLines = this.fragmentText(line, font, fontSize, maxWidth);
            finalLines.push(...fragmentedTextLines);
        });
        return finalLines;
    }

    prefabVisual = (type, details = {}, x = 0, y = 0, size = 1) => {
        let prefab = new this.types[type](details);
        this.mainScene.remove(prefab.visual);
        /*prefab.visual.objects.forEach(obj => {
            obj.size *= size;
        });*/
        prefab.visual.size *= size;
        prefab.visual.position.x += x;
        prefab.visual.position.x += y;
        if (typeof (prefab.underHpBar) !== "undefined") {
            prefab.visual.remove(prefab.underHpBar.visual);
        }
        return prefab.visual;
    }

    text = class Text extends this.object {
        constructor(text = "", x = 0, y = 0, fillStyle = "#000", font = "Arial", fontSize = 30, otherParams = "", opacity = 1, align = "center") {
            super();
            this.text = text;
            this.position = new gameInstance.Vector2(x, y);
            this.fillStyle = fillStyle;
            this.font = font;
            this.fontSize = fontSize;
            this.otherParams = otherParams;
            this.opacity = opacity;
            this.type = "text";
            this.width = 0;
            this.height = 0;
            this.align = align;
            this.ticksAlive = Math.floor(Math.random() * 199);
            this.oldText = "";
            this.oldFont = this.font;
            this.oldFontSize = this.fontSize;
            this.fontLoaded = false;
            this.hasBorder = false;
            this.borderProperties = {
                color: "#000",
                size: 2,
                opacity: 1
            }
            if (document.fonts !== undefined) {
                this.fontLoaded = document.fonts.check(this.otherParams + " " + fontSize + "px " + font);
            }
            this.canvas = gameInstance.blankCanvas;
        }

        save() {
            if (found === null) { // where did this variable come from
                this.savedTexts.push(this);
            }
        }

        redraw() {
            if (this.canvas == gameInstance.blankCanvas) {
                this.canvas = document.createElement("canvas");
            }
            this.canvas = gameInstance.textImage(this.canvas, this.text, this.fillStyle, this.font, this.fontSize, this.otherParams, false, 0, false, this);
            this.oldText = this.text;
            this.oldFont = this.font;
            this.oldFontSize = this.fontSize;
            this.width = this.canvas.width;// / 2;
            this.height = this.canvas.height;// / 2;
            if (document.fonts === undefined) {
                return;
            }
            if (!this.fontLoaded) {
                this.fontLoaded = document.fonts.check(this.otherParams + " " + this.fontSize + "px " + this.font);
            }
        }

        renderSpecific(ctx, ratio) {
            this.ticksAlive++;

            if (document.fonts === undefined) {
                this.fontLoaded = true;
                this.redraw();
            }
            if (!this.fontLoaded || this.canvas === this.blankCanvas || this.oldText !== this.text || this.oldFont !== this.font || this.oldFontSize !== this.fontSize) {
                this.redraw();
            }
            if (this.ticksAlive > 1000) {
                this.ticksAlive = 10;
            }

            ratio *= 2;
            ratio /= this.size;

            try {
                switch (this.align) {
                    case "right":
                        ctx.drawImage(this.canvas, -this.canvas.width / ratio, -this.canvas.height / 2 / ratio, this.canvas.width / ratio, this.canvas.height / ratio);
                        this.drawImages++;
                        break;
                    case "left":
                        ctx.drawImage(this.canvas, 0, -this.canvas.height / 2 / ratio, this.canvas.width / ratio, this.canvas.height / ratio);
                        this.drawImages++;
                        break;
                    default:
                        ctx.drawImage(this.canvas, -this.canvas.width / 2 / ratio, -this.canvas.height / 2 / ratio, this.canvas.width / ratio, this.canvas.height / ratio);
                        this.drawImages++;
                        break;
                }
            } catch (e) { }
        }
    }

    strokeText = class StrokeText extends this.object {
        constructor(text = "", x = 0, y = 0, strokeStyle = "#000", font = "Arial", fontSize = 30, otherParams = "", opacity = 1, align = "center") {
            this.text = text;
            this.position = new gameInstance.Vector2(x, y);
            this.strokeStyle = strokeStyle;
            this.font = font;
            this.fontSize = fontSize;
            this.otherParams = otherParams;
            this.opacity = opacity;
            this.type = "text";
            this.width = 0;
            this.align = align;
            this.lineWidth = 2;
            this.ticksAlive = Math.floor(Math.random() * 199);
            this.oldText = this.text;
            this.oldFont = this.font;
            this.oldFontSize = this.fontSize;
            this.oldLineWidth = this.lineWidth;
            this.canvas = this.blankCanvas;
            this.fontLoaded = false;
            if (document.fonts !== undefined) {
                this.fontLoaded = document.fonts.check(this.otherParams + " " + fontSize + "px " + font);
            }
        }

        save() {
            if (found === null) {
                this.savedStrokes.push(this);
            }
        }

        redraw() {
            if (this.canvas === this.blankCanvas) {
                this.canvas = document.createElement("canvas");
            }
            this.canvas = gameInstance.textImage(this.canvas, this.text, this.strokeStyle, this.font, this.fontSize, this.otherParams, true, this.lineWidth);
            this.canvas = gameInstance.textImage(this.canvas, this.text, this.strokeStyle, this.font, this.fontSize, this.otherParams, false, this.lineWidth, true);
            this.oldText = this.text;
            this.oldFont = this.font;
            this.oldFontSize = this.fontSize;
            this.oldLineWidth = this.lineWidth;
            this.width = this.canvas.width / 2;
            if (document.fonts == undefined) {
                return;
            }
            this.fontLoaded = document.fonts.check(this.otherParams + " " + this.fontSize + "px " + this.font);
        }

        renderSpecific(ctx, ratio) {
            ratio *= 2;
            ratio /= this.size;
            this.ticksAlive++;
            if (document.fonts == undefined) {
                this.fontLoaded = true;
                this.redraw();
            }
            if (!this.fontLoaded || this.canvas === undefined || this.oldText != this.text || this.oldFont != this.font || this.oldFontSize != this.fontSize || this.oldLineWidth != this.lineWidth) {
                //this.textRenderQueue.push( this );
                this.redraw();
            }
            if (this.ticksAlive > 1000) {
                this.ticksAlive = 10;
            }
            try {
                switch (this.align) {
                    case "right":
                        ctx.drawImage(this.canvas, -this.canvas.width / ratio, -this.canvas.height / 2 / ratio, this.canvas.width / ratio, this.canvas.height / ratio);
                        this.drawImages++;
                        break;
                    case "left":
                        ctx.drawImage(this.canvas, -this.lineWidth / ratio, -this.canvas.height / 2 / ratio, this.canvas.width / ratio, this.canvas.height / ratio);
                        this.drawImages++;
                        break;
                    default:
                        ctx.drawImage(this.canvas, -this.canvas.width / 2 / ratio, -this.canvas.height / 2 / ratio, this.canvas.width / ratio, this.canvas.height / ratio);
                        this.drawImages++;
                        break;
                }
            } catch (e) { }
        }
    }

    controls = class Controls {
        constructor() {
            this.switch = false;
            //this.shoot = false;
            this.changed = false;
        }

        clone() {
            let a = new this.controls();
            a.switch = this.switch;
            //a.shoot = this.shoot;
            return a;
        }
    }

    keyboard = class Keyboard extends this.controls {
        constructor() {
            super();
            this.changedKeys = [];

            this.press = e => {
                if (window.inConsole) return;
                let changed = false;
                switch (e.keyCode) {
                    case 81:
                    case 69:
                        if (!this.switch) {
                            changed = true;
                            this.switch = true;
                            this.changedKeys.push("switch");
                        }
                        break;

                    case 32:
                        if (!this.shoot) {
                            changed = true;
                            this.shoot = true;
                            this.changedKeys.push("shoot");
                        }
                        break;
                }
                this.changed = changed;
            }

            this.release = e => {
                if (window.inConsole) return;
                switch (e.keyCode) {
                    case 81:
                    case 69:
                        this.switch = false;
                        this.changedKeys.push("switch");
                        break;

                    case 32:
                        this.shoot = false;
                        this.changedKeys.push("shoot");
                        break;
                }
                this.changed = true;
            }

            window.addEventListener('keydown', this.press, false);
            window.addEventListener('keyup', this.release, false);
        }
    }

    /**
     * Create a rectangle
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @param {String} color
     * @param {Number} opacity
     */
    rectangle = class Rectangle extends this.object {
        constructor(x = 0, y = 0, width = 100, height = 100, color = "#000", opacity = 1) {
            super();
            this.position = new gameInstance.Vector2(x, y);
            this.width = width;
            this.height = height;
            this.color = color;
            this.opacity = opacity;
            this.type = "rectangle";
        }

        renderSpecific(ctx, ratio) {
            if (this.color.isGameColor) {
                ctx.fillStyle = this.color.color;
            } else {
                ctx.fillStyle = this.color;
            }
            ctx.fillRect(-this.width * this.size / 2 / ratio, - this.height * this.size / 2 / ratio, Math.max(this.width * this.size / ratio, 1), Math.max(this.height * this.size / ratio, 1));
        }
    }

    strokeRectangle = class StrokeRectangle extends this.object {
        constructor(x = 0, y = 0, width = 100, height = 100, color = "#000", lineWidth = 5, opacity = 1) {
            super();
            this.position = new gameInstance.Vector2(x, y);
            this.width = width;
            this.height = height;
            this.color = color;
            this.opacity = opacity;
            this.lineWidth = lineWidth;
            this.type = "rectangle";
        }

        renderSpecific(ctx, ratio) {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth * this.size / ratio;
            ctx.strokeRect(-this.width * this.size / 2 / ratio, - this.height * this.size / 2 / ratio, this.width * this.size / ratio, this.height * this.size / ratio);
        }
    }

    roundRectangle = class RoundRectangle extends this.object {
        constructor(x = 0, y = 0, width = 100, height = 100, radius = 0, color = "#000", opacity = 1) {
            super();
            this.position = new gameInstance.Vector2(x, y);
            this.width = width;
            this.height = height;
            this.color = color;
            this.radius = radius;
            this.opacity = opacity;
            this.type = "roundRectangle";
            this.strokeStyle = -1;
            this.lineWidth = 4;
        }

        renderSpecific(ctx, ratio) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.moveTo((-this.width / 2 + this.radius) * this.size / ratio, -this.height * this.size / 2 / ratio);
            ctx.lineTo((this.width / 2 - this.radius) * this.size / ratio, -this.height * this.size / 2 / ratio);
            ctx.arc((this.width / 2 - this.radius) * this.size / ratio, (-this.height / 2 + this.radius) * this.size / ratio, this.radius * this.size / ratio, Math.PI * 3 / 2, Math.PI * 2);
            ctx.lineTo(this.width * this.size / 2 / ratio, (this.height / 2 - this.radius) * this.size / ratio);
            ctx.arc((this.width / 2 - this.radius) * this.size / ratio, (this.height / 2 - this.radius) * this.size / ratio, this.radius * this.size / ratio, 0, Math.PI / 2);
            ctx.lineTo((-this.width / 2 + this.radius) * this.size / ratio, this.height * this.size / 2 / ratio);
            ctx.arc((-this.width / 2 + this.radius) * this.size / ratio, (this.height / 2 - this.radius) * this.size / ratio, this.radius * this.size / ratio, Math.PI / 2, Math.PI);
            ctx.lineTo(-this.width * this.size / 2 / ratio, (-this.height / 2 + this.radius) * this.size / ratio);
            ctx.arc((-this.width / 2 + this.radius) * this.size / ratio, (-this.height / 2 + this.radius) * this.size / ratio, this.radius * this.size / ratio, Math.PI, Math.PI * 3 / 2);
            ctx.fill();
            if (this.strokeStyle != -1) {
                ctx.strokeStyle = this.strokeStyle;
                ctx.lineWidth = this.lineWidth * this.size / ratio;
                let oldWidth = this.width;
                let oldHeight = this.height;
                this.width -= this.lineWidth / 2;
                this.height -= this.lineWidth / 2;
                ctx.beginPath();
                ctx.moveTo((-this.width / 2 + this.radius) * this.size / ratio, -this.height * this.size / 2 / ratio);
                ctx.lineTo((this.width / 2 - this.radius) * this.size / ratio, -this.height * this.size / 2 / ratio);
                ctx.arc((this.width / 2 - this.radius) * this.size / ratio, (-this.height / 2 + this.radius) * this.size / ratio, this.radius * this.size / ratio, Math.PI * 3 / 2, Math.PI * 2);
                ctx.lineTo(this.width * this.size / 2 / ratio, (this.height / 2 - this.radius) * this.size / ratio);
                ctx.arc((this.width / 2 - this.radius) * this.size / ratio, (this.height / 2 - this.radius) * this.size / ratio, this.radius * this.size / ratio, 0, Math.PI / 2);
                ctx.lineTo((-this.width / 2 + this.radius) * this.size / ratio, this.height * this.size / 2 / ratio);
                ctx.arc((-this.width / 2 + this.radius) * this.size / ratio, (this.height / 2 - this.radius) * this.size / ratio, this.radius * this.size / ratio, Math.PI / 2, Math.PI);
                ctx.lineTo(-this.width * this.size / 2 / ratio, (-this.height / 2 + this.radius) * this.size / ratio);
                ctx.arc((-this.width / 2 + this.radius) * this.size / ratio, (-this.height / 2 + this.radius) * this.size / ratio, this.radius * this.size / ratio, Math.PI, Math.PI * 3 / 2);
                ctx.stroke();
                this.width = oldWidth;
                this.height = oldHeight;
            }
        }
    }

    polygon = class Polygon extends this.object {
        constructor(x = 0, y = 0, points, color = "#000", opacity = 1) {
            super();
            this.position = new gameInstance.Vector2(x, y);
            this.points = points || [
                new gameInstance.Vector2(-50, 40),
                new gameInstance.Vector2(0, -40),
                new gameInstance.Vector2(50, 40)]
            this.color = color;
            this.opacity = opacity;
            this.shouldStroke = false;
            this.strokeColor = "#000000";
            this.lineWidth = 3;
            this.type = "polygon";
        }

        renderSpecific(ctx, ratio) {
            let oldMiter = ctx.miterLimit;
            ctx.miterLimit = 10;
            ctx.fillStyle = this.color;
            ctx.lineWidth = this.lineWidth * this.size / ratio;
            ctx.beginPath();
            ctx.moveTo(this.points[0].x * this.size / ratio, this.points[0].y * this.size / ratio);
            for (var i = 1; i < this.points.length; i++) {
                ctx.lineTo(this.points[i].x * this.size / ratio, this.points[i].y * this.size / ratio);
            }
            ctx.closePath();
            if (this.shouldStroke) {
                ctx.strokeStyle = this.strokeColor;
                ctx.stroke();
            }
            ctx.fill();
            ctx.miterLimit = oldMiter;
        }
    }

    circle = class Circle extends this.object {
        constructor(x = 0, y = 0, radius = 100, color = "#000", opacity = 1) {
            super();
            this.position = new gameInstance.Vector2(x, y);
            this.radius = radius;
            this.color = color;
            this.opacity = opacity;
            this.type = "circle";
        }

        renderSpecific(ctx, ratio) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(0, 0, this.radius * this.size / ratio, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }
    }

    arc = class Arc extends this.object {
        constructor(x = 0, y = 0, radius = 100, color = "#000", angle = Math.PI, rotation = 0, lineWidth = 5) {
            super();
            this.position = new gameInstance.Vector2(x, y);
            this.radius = radius;
            this.color = color;
            this.angle = angle;
            this.rotation = rotation;
            this.lineWidth = lineWidth;
            this.type = "arc";
        }

        renderSpecific(ctx, ratio) {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth * this.size / ratio;
            ctx.beginPath();
            ctx.arc(0, 0, this.radius * this.size / ratio, 0, this.angle);
            ctx.stroke();
        }
    }

    particle = class Particle extends this.rectangle {
        constructor(x, y, size, color, turn, opacityFade = 1, xVelocity = 0, yVelocity = 0, initialOpacity = 1, velocityFade = 1) {
            super(x, y, size, size, color, 0.7);
            this.turn = turn || (Math.floor(Math.random() * 2) - 0.5) * 0.2;
            this.opacityFade = opacityFade;
            this.rotation = Math.random() * Math.PI * 2;
            this.velocity = new gameInstance.Vector2(xVelocity, yVelocity);
            this.velocityFade = velocityFace;
            this.opacity = initialOpacity || 1;
            this.type = "particle";
            gameInstance.particles.push(this);
        }

        update(dt) {
            this.rotation += this.turn * dt;
            this.width -= 0.2 * dt;
            this.height -= 0.2 * dt;
            this.opacity -= 0.02 * dt * this.opacityFade;
            this.velocity.x *= this.velocityFade;
            this.velocity.y *= this.velocityFade;
            this.position.x += this.velocity.x * dt;
            this.position.y += this.velocity.y * dt;
            if (this.opacity <= 0 && gameInstance.particles.indexOf(this) != -1) {
                gameInstance.particles.splice(gameInstance.particles.indexOf(this), 1);
                if (this.parent != null)
                    this.parent.remove(this);
            }
        }
    }

    customParticle = class CustomParticle {
        constructor(obj, turn, opacityFade = 1, xVelocity = 0, yVelocity = 0, widthFade = 1, heightFade = 1) {
            obj.turn = turn || (Math.floor(Math.random() * 2) - 0.5) * 0.2;
            obj.opacityFade = opacityFade;
            obj.rotation = Math.random() * Math.PI * 2;
            obj.velocity = new gameInstance.Vector2(xVelocity, yVelocity);
            obj.widthFade = widthFade;
            obj.heightFade = heightFade;
            obj.type = "particle";
            obj.opacityThreshold = 0;

            gameInstance.particles.push(obj);

            obj.update = function (dt) {
                obj.rotation += obj.turn * dt;
                obj.width -= 0.4 * dt * obj.widthFade;
                obj.height -= 0.4 * dt * obj.heightFade;
                obj.opacity -= 0.02 * dt * obj.opacityFade;
                obj.position.x += obj.velocity.x * dt;
                obj.position.y += obj.velocity.y * dt;
                if (obj.opacity <= obj.opacityThreshold && gameInstance.particles.indexOf(obj) != -1) {
                    gameInstance.particles.splice(gameInstance.particles.indexOf(obj), 1);
                    if (obj.parent != null)
                        obj.parent.remove(obj);
                }
            }
        }
    }

    scene = class Scene extends this.object {
        constructor() {
            super();
            this.type = "scene";
            this.camera = {
                position: new gameInstance.Vector2(0, 0),
                ratio: 1,
                rotation: 0
            }
            gameInstance.scenes.push(this);
        }

        render(ctx, ratio, opacity) {
            ratio /= this.size;
            this.opacity = Math.min(Math.max(0, this.opacity), 1);
            opacity = Math.min(Math.max(0, opacity), 1);
            opacity = Math.min(this.opacity * opacity, 1);
            ctx.globalAlpha = this.opacity * opacity;
            ctx.translate(-this.camera.position.x / ratio, -this.camera.position.y / ratio);
            ctx.rotate(-this.camera.rotation);
            this.belowObjects.forEach(object => {
                object.render(ctx, ratio, opacity);
            });
            this.objects.forEach(object => {
                object.render(ctx, ratio, opacity);
            });
            ctx.rotate(this.camera.rotation);
            ctx.translate(this.camera.position.x / ratio, this.camera.position.y / ratio);
        }
    }

    sendPacket(packetType, packetValue, shouldBeReady = true) {
        if (shouldBeReady) {
            if (this.ws.readyState === 1) {
                this.currentPackets.push({
                    type: packetType,
                    data: packetValue
                });
            }
        } else {
            this.currentPackets.push({
                type: packetType,
                data: packetValue
            });
        }
    }

    sendPromisePacket(packetType, packetValue, resolved, shouldBeReady = true) {
        this.sendPacket(packetType, packetValue, shouldBeReady);
        const promise = new Promise((resolve, reject) => {
            game.packetFunctions[packetType] = packet => {
                resolve(packet);
            }
        });
        promise.then(result => resolved(result));
    }

    createSocket(serveraddr) {
        if (this.connecting) return;
        this.connecting = true;
        console.log("Closing old socket");
        this.ws.close();
        function open() {
            this.connecting = false;
        }
        this.ws = new this.socket(serveraddr, this.messageEvent, open);
        this.ws.binaryType = "arraybuffer";
    }

    selfExists() {
        if (!this.hasEnvs) {
            this.currentPackets.push({ type: "getEnvs" });
        }
        for (let i = 0; i < this.objects.length; i++) {
            if (this.objects[i].id === this.me.id) {
                return true;
            }
        }
        if (this.ws.readyState === 1) {
            this.currentPackets.push({ type: "getID" });
        }
    }

    notUpdatedIsClose(object) {
        if (Math.abs(this.me.new.position.x - object.new.position.x) < 1920 / 2 + 1600 && Math.abs(this.me.new.position.y - object.new.position.y) < 1080 / 2 + 1600)
            return true;
    }

    visualIsClose(object) {
        if (Math.abs(this.me.new.position.x - object.position.x) < 1920 / 2 + 1600 && Math.abs(this.me.new.position.y - object.position.y) < 1080 / 2 + 1600)
            return true;
    }

    lerp(initialValue, newValue) {
        if (this.serverDetails.ticksSincePacket > this.serverDetails.dt + 5) {
            return (newValue - initialValue) / this.serverDetails.dt * (this.serverDetails.dt + 5) + initialValue;
        }
        return (newValue - initialValue) / this.serverDetails.dt * this.serverDetails.ticksSincePacket + initialValue;
    }

    normalLerp(initialValue, newValue, dist) {
        return (newValue - initialValue) * dist + initialValue;
    }

    getObj(id) {
        for (let i = 0; i < this.objects.length; i++) {
            if (this.objects[i].id === id) {
                return this.objects[i];
            }
        }
        return null;
    }

    askForObj(id) {
        this.currentPackets.push({ type: "getObject", object: { id: id } });
    }

    onGetEnvs(envs) {

    }

    customSign(num) {
        return Math.sign(num);
    }

    average(array) {
        let sum = 0;
        array.forEach(entry => {
            sum += entry;
        });

        return sum / array.length;
    }

    addPacketType(type, func) {
        this.packetFunctions[type] = func;
    }

    messageEvent(message) {
        gameInstance.serverDetails.thisFrame = Date.now();
        /*for( var i = 0; i < this.serverDetails.dtArray.length - 1; i++ ) {
            this.serverDetails.dtArray[ i ] = this.serverDetails.dtArray[ i + 1 ];
        }
        this.serverDetails.dtArray[ this.serverDetails.dtArray.length - 1 ] = Math.max( Math.min( ( this.serverDetails.thisFrame - this.serverDetails.lastFrame ) / 16, 8.2 ), 2.2 );
        var sum = 0;
        for( var i = 0; i < this.serverDetails.dtArray.length; i++ ) {
            sum += this.serverDetails.dtArray[ i ];
        }
        this.serverDetails.dt = sum / this.serverDetails.dtArray.length;*/
        gameInstance.serverDetails.dt = 5.5; //4.6
        gameInstance.serverDetails.lastFrame = gameInstance.serverDetails.thisFrame;
        //try {
        if (msgpack !== undefined) {
            let packets = msgpack.decode(new Uint8Array(message.data));
            packets.forEach(packet => {
                if (gameInstance.packetFunctions[packet.t] !== undefined) {
                    gameInstance.packetFunctions[packet.t](packet);
                } else {
                    console.log("Encountered issue: unknown packet type");
                    console.log(packet);
                }
            });
        }
        /*this.particles.forEach( function( particle ) {
                particle.update( 1 );
        } );*/
        for (let i = 0; i < gameInstance.objects.length; i++) {
            gameInstance.objects[i].ticksAsleep++;
            if (gameInstance.usedIDs.indexOf(gameInstance.objects[i].id) === -1) {
                gameInstance.objects[i].old.position.x = gameInstance.objects[i].visual.position.x;
                gameInstance.objects[i].old.position.y = gameInstance.objects[i].visual.position.y;
                gameInstance.objects[i].old.rotation = gameInstance.objects[i].visual.rotation;
            }
            if (((gameInstance.objects[i].needsUpdate && (gameInstance.objects[i].ticksAsleep > 201 && (gameInstance.objects[i].old.position.x === gameInstance.objects[i].new.position.x && gameInstance.objects[i].old.position.y === gameInstance.objects[i].new.position.y && gameInstance.objects[i].old.rotation === gameInstance.objects[i].new.rotation))) || (!gameInstance.objects[i].needsUpdate && gameInstance.objects[i].ticksAsleep >= 120 && !gameInstance.notUpdatedIsClose(gameInstance.objects[i]))) && gameInstance.usedIDs.indexOf(gameInstance.objects[i].id) === -1) {
                if (gameInstance.objects[i].remove({})) {
                    continue;
                }
                if (gameInstance.objects[i].visual.parent !== null) {
                    gameInstance.objects[i].visual.parent.remove(gameInstance.objects[i].visual);
                }
                gameInstance.objects.splice(i, 1);
            }
        }
        gameInstance.usedIDs = [];
        gameInstance.selfExists();
        gameInstance.serverDetails.ticksSincePacket = 0;
        /*} catch( e ) {
                console.log( "Caught Error, plx report" );
        }*/
    }

    flushMessageQueue() {
        while (this.messageQueue.length > 0) {
            this.actualMessageEvent(this.messageQueue.splice(0, 1)[0]);
        }
    }

    actualMessageEvent() {
        //console.log( this.serverDetails.ticksSincePacket );
        this.serverDetails.thisFrame = performance.now();//Date.now();

        for (let i = 0; i < this.serverDetails.dtArray.length - 1; i++) {
            this.serverDetails.dtArray[i] = this.serverDetails.dtArray[i + 1];
        }
        this.serverDetails.dtArray[this.serverDetails.dtArray.length - 1] = this.serverDetails.thisFrame - this.serverDetails.lastFrame;
        let sum = 0;
        this.serverDetails.dtArray.length.forEach(num => sum += num);
        this.serverDetails.dt = sum / this.serverDetails.dtArray.length;
        // console.log(this.serverDetails.dt);

        //console.log( "Last Packet: " + game.serverDetails.ticksSincePacket );
        this.lerpSpeed = 3 / this.serverDetails.ticksSincePacket;
        if (isNaN(this.lerpSpeed)) {
            this.lerpSpeed = 1;
        }
        this.lerpSpeed = Math.min(Math.max(this.lerpSpeed, 0.1), 2);
        this.serverDetails.dt = 5.3; //4.6
        //console.log( this.serverDetails.ticksSincePacket );
        this.serverDetails.lastFrame = this.serverDetails.thisFrame;
        //try {
        if (msgpack !== undefined) {
            let packets = msgpack.decode(new Uint8Array(message.data));
            packets.forEach(packet => {
                if (this.packetFunctions[packet.t] !== undefined)
                    this.packetFunctions[packet.t](packet);
                else {
                    console.log("Encountered issue: unknown packet type");
                    console.log(packets);
                    packet = msgpack.decode(packet);
                    if (this.packetFunctions[packet.t] !== undefined) {
                        try {
                            this.packetFunctions[packet.t](packet);
                        } catch (e) {
                            console.log("Packet function error");
                            console.log(e);
                        }
                    }
                }
            });
        }
        /*this.particles.forEach( function( particle ) {
            particle.update( 1 );
        } );*/
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].ticksAsleep++;
            if (this.objects[i].ticksAsleep > 1) {
                this.objects[i].new.position.x = this.normalLerp(this.objects[i].new.position.x, this.objects[i].actualNew.position.x, 0.2);
                this.objects[i].new.position.y = this.normalLerp(this.objects[i].new.position.y, this.objects[i].actualNew.position.y, 0.2);
            }
            if (this.usedIDs.indexOf(this.objects[i].id) === -1) {
                this.objects[i].old.position.x = this.objects[i].visual.position.x;
                this.objects[i].old.position.y = this.objects[i].visual.position.y;
                this.objects[i].old.rotation = this.objects[i].visual.rotation;
            }
            if (((this.objects[i].needsUpdate && (this.objects[i].ticksAsleep > 201 && (this.objects[i].old.position.x === this.objects[i].new.position.x && this.objects[i].old.position.y === this.objects[i].new.position.y && this.objects[i].old.rotation === this.objects[i].new.rotation))) || (!this.objects[i].needsUpdate && this.objects[i].ticksAsleep >= 120 && !this.notUpdatedIsClose(this.objects[i]))) && this.usedIDs.indexOf(this.objects[i].id) === -1) {
                if (this.objects[i].remove({})) {
                    continue;
                }
                if (this.objects[i].visual.parent !== null) {
                    this.objects[i].visual.parent.remove(this.objects[i].visual);
                }
                this.objects.splice(i, 1);
            }
        }
        this.usedIDs = [];
        this.selfExists();
        this.serverDetails.ticksSincePacket = 0;
        /*} catch( e ) {
            console.log( "Caught Error, plx report" );
        }*/

    }

    update() {
        let currentFPS = Math.max(fps.getFPS(), 30);
        this.serverDetails.fpsArray.push(currentFPS);
        this.serverDetails.fpsArray.splice(0, 1);
        let myfps = 0;
        this.serverDetails.fpsArray.forEach(time => {
            myfps += time;
        });
        myfps /= this.serverDetails.fpsArray.length;
        this.serverDetails.ticksSincePacket += 1 / (myfps / 60);
        this.flushTextRenderQueue();
        this.objects.forEach(obj => {
            obj.visual.rotation = this.lerp(obj.old.rotation, obj.new.rotation);
            obj.visual.position.x = this.normalLerp(obj.visual.position.x, this.lerp(obj.old.position.x, obj.new.position.x), 0.8);
            obj.visual.position.y = this.normalLerp(obj.visual.position.y, this.lerp(obj.old.position.y, obj.new.position.y), 0.8);
            if (this.renderDebug) {
                obj.idDisplay.position.x = obj.visual.position.x;
                obj.idDisplay.position.y = obj.visual.position.y - 50;
            }
            obj.tickUpdate();
        });

        this.clientDetails.thisFrame = Date.now();
        this.clientDetails.dt = Math.min((this.clientDetails.thisFrame - this.clientDetails.lastFrame) / 16.67, 2);
        this.clientDetails.lastFrame = this.clientDetails.thisFrame;
        this.particles.forEach(particle => {
            particle.update(this.clientDetails.dt * 1.2);
        });
        if (this.ws.readyState === 1 && this.currentPackets.length > 0) {
            this.currentPackets.forEach(packet => {
                if (packet.type !== undefined) {
                    packet.t = packet.type;
                    delete packet.type;
                }
            });
            this.ws.send(msgpack.encode(this.currentPackets));
            this.currentPackets = [];
        }

    }

    addType(type, classProvided) {
        this.types[type] = classProvided;
    }
}

const requestFrame = callback => {
    (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        (callback => {
            setTimeout(callback, 1000 / 60);
        })
    )(callback);
};