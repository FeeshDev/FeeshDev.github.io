function lerp(initialValue, newValue, dist) {
    return (newValue - initialValue) * dist + initialValue;
}

class ArrayList {
    constructor() {
        this.array = [];
        this.length = 0;
    }
    push(obj) {
        this.array[this.length++] = obj;
    }
    indexOf(obj) {
        for (let i = 0; i < this.length; i++) {
            if (this.array[i] === obj) {
                return i;
            }
        }
        return -1;
    }
    contains(obj) {
        return this.indexOf(obj) != -1;
    }
    pushIfNotIn(obj) {
        if (!this.contains(obj)) {
            this.push(obj);
        }
    }
    sort(cb) {
        this.array.sort(cb);
    }
    removeIfIn(obj) {
        while (this.indexOf(obj) !== -1) {
            this.remove(this.indexOf(obj));
        }
    }
    remove(index) {
        if (index >= this.length || index < 0) {
            return;
        }
        for (let i = index; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.length--;
    }
    splice(index, length) {
        for (let i = 0; i < length && index < this.length; i++) {
            this.remove(index);
        }
    }
    forEach(cb) {
        for (let i = 0; i < this.length; i++) {
            if (cb(this.array[i])) {
                this.remove(i);
                i--;
            }
        }
    }
    makeDebugArray() {
        let arr = [];
        for (let i = 0; i < this.length; i++) {
            arr.push(this.array[i]);
        }
        return arr;
    }
}

// easings.net
const easingFunctions = {
    "linear": x => {
        return x;
    },
    "easeOutElastic": x => {
        const c4 = (2 * Math.PI) / 3;
        return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    },
    "easeInQuad": x => {
        return x * x;
    },
    "easeOutQuad": x => {
        return 1 - (1 - x) * (1 - x);
    },
    "easeInExpo": x => {
        return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    },
    "easeOutExpo": x => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    },
    "easeOutCubic": x => {
        return 1 - (1 - x) * (1 - x) * (1 - x);
    },
    "easeInCubic": x => {
        return x * x * x;
    },
    "easeInQuart": x => {
        return x * x * x * x;
    },
    "easeOutBack": x => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        const x1 = x - 1;
        return 1 + c3 * x1 * x1 * x1 + c1 * x1 * x1;
    },
    "easeOutQuart": x => {
        const x1 = 1 - x;
        return 1 - (x1 * x1 * x1 * x1);
    }
}

class uiState {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.scale = 1;
        this.opacity = 1;
    }
}

let managerInstance = null;
class uiManager {
    constructor(game) {
        managerInstance = this;
        this.game = game;
        this.hasRequest = false;
        this.scenes = [];
        this.transitioningElements = new ArrayList();
        this.resizeElements = [];

        document.body.addEventListener("mousedown", function () {
            for (let x = 0; x < managerInstance.scenes.length; x++) {
                if (!managerInstance.scenes[x].enabled) {
                    continue;
                }
                let scene = managerInstance.scenes[x];
                for (let i = 0; i < scene.hoverElements.length; i++) {
                    let element = scene.hoverElements[i];
                    if (element.hovering) {
                        element.mousedown = true;
                        element.mouseWasDown = true;
                        if (element.onmousedown) {
                            element.onmousedown(element);
                        }
                        if (element.draggable) {
                            element.oldPosition.x = element.visual.position.x;
                            element.oldPosition.y = element.visual.position.y;
                            element.oldGlobalPosition = element.visual.getGlobalPosition();
                            element.reference.x = managerInstance.mouse.x - element.visual.getGlobalPosition().x;
                            element.reference.y = managerInstance.mouse.y - element.visual.getGlobalPosition().y;
                            element.dragging = true;
                            scene.dragging.pushIfNotIn(element);
                        }
                    }
                }
            }
        });

        document.body.addEventListener("mouseup", function () {
            for (var x = 0; x < managerInstance.scenes.length; x++) {
                if (!managerInstance.scenes[x].enabled) {
                    continue;
                }
                var scene = managerInstance.scenes[x];
                for (var i = 0; i < scene.hoverElements.length; i++) {
                    var element = scene.hoverElements[i];
                    if (element.mousedown && element.hovering && element.onclick) {
                        if (element.requestPointerLock) {
                            document.body.requestPointerLock();
                        }
                        element.onclick(element);
                    } else if (element.mouseWasDown && element.onmouseup) {
                        element.onmouseup(element);
                    }
                    if (element.dragging) {
                        scene.dragging.removeIfIn(element);
                        element.dragging = false;
                    }
                    element.mousedown = false;
                    element.mouseWasDown = false;
                }
            }
        });

        document.body.addEventListener("wheel", function (e) {
            for (var x = 0; x < managerInstance.scenes.length; x++) {
                if (!managerInstance.scenes[x].enabled) {
                    continue;
                }
                var scene = managerInstance.scenes[x];
                for (var i = 0; i < scene.scrollbars.length; i++) {
                    var element = scene.scrollbars[i];
                    if (element.onscroll) {
                        element.onscroll(element, e);
                    }
                }
            }
        });
    }

    makeContainer(x, y, width, height) {
        let obj = new this.game.object();
        obj.position.x = x;
        obj.position.y = y;
        obj.width = width;
        obj.height = height;
        return obj;
    }

    setResizeFunction(obj, func) {
        this.resizeElements.push({
            obj: obj,
            func: func
        });
    }

    resize() {
        this.resizeElements.forEach(elem => elem.func(elem.obj));
    }

    element = class Element {
        constructor(visual) {
            this.visual = visual;
            this.type = "element";
            this.manager = managerInstance;
            this.hasOwnTransitionTime = false;
            this.transitionTime = 1;
            this.time = 1;
            this.easeFunc = easingFunctions["linear"];
            this.updateHitbox = true;
            this.changeCursor = true;
            this.useCasualHitbox = true;
            this.hoverElements = [];
            this.elements = [];
            this.oldState = new uiState();
            this.newState = new uiState();
            this.reference = new managerInstance.game.Vector2();
            this.newreference = new managerInstance.game.Vector2();
            this.oldPosition = new managerInstance.game.Vector2();
            this.hovering = false;
            this.mousedown = false;
            this.draggable = false;
            this.dragging = false;
        }

        set easeType(type) {
            this.easeFunc = easingFunctions[type];
            this.easeTypeType = type;
        }

        get easeType() {
            return this.easeTypeType;
        }

        add(obj) {
            this.elements.push(obj);
            return this.visual.add(obj.visual);
        }

        addBelow(obj) {
            this.elements.push(obj);
            return this.visual.addBelow(obj.visual);
        }

        remove(obj) {
            let index = this.elements.indexOf(obj);
            if (index !== -1) {
                this.elements.splice(index, 1);
            }
            return this.visual.remove(obj.visual);
        }

        setCurrentState(state) {
            state.x = this.visual.position.x;
            state.y = this.visual.position.y;
            if (this.visual.width !== undefined) {
                state.width = this.visual.width;
                state.height = this.visual.height;
            }
            state.size = this.visual.size;
            state.opacity = this.visual.opacity;
        }

        setCasualState(force) {
            if (this.casual !== undefined && !force) {
                return;
            }
            this.casual = new uiState();
            this.setCurrentState(this.casual);
        }

        traverse(cb) {
            cb(this);
            this.visual.traverse(cb);
        }

        transition(obj, props) {
            if (!this.casual) {
                this.setCasualState();
            }
            if (!props) {
                props = Object.keys(obj);
            }
            this.time = 0;
            this.setCurrentState(this.oldState);
            this.newState = obj;
            this.transitionProps = props;
            this.manager.transitioningElements.pushIfNotIn(this);
        }

        transitionNow(obj, props) {
            for (let i = 0; i < props.length; i++) {
                let prop = props[i];
                if (prop === "x" || prop === "y") {
                    this.visual.position[prop] = obj[prop];
                } else {
                    this.visual[prop] = obj[prop];
                }
            }
        }

        show() {
            this.transition(this.shown, Object.keys(this.shown));
            this.isVisible = true;
        }

        hide() {
            this.transition(this.hidden, Object.keys(this.hidden));
            this.isVisible = false;
        }

        showNow() {
            this.transitionNow(this.shown, Object.keys(this.shown));
            this.isVisible = true;
        }

        hideNow() {
            this.transitionNow(this.hidden, Object.keys(this.hidden));
            this.isVisible = false;
        }

        addHoverElement(obj) {
            if (this.hoverElements.indexOf(obj) == -1) {
                this.hoverElements.push(obj);
            }
        }

        set hover(obj) {
            this.setCasualState();
            this.hoverObj = obj;
            this.hoverProperties = Object.keys(obj);
        }

        set onhover(cb) {
            this.hoverEvent = cb;
        }
    }

    updateDynamicBars(bar, current, max, lowerLimit = 0, disableAt0 = false) {
        if (max === null) {
            max = current;
        }
        const barWidthPerUnit = bar.initialWidth / (max - lowerLimit);
        const notTherePercent = 100 - (current - lowerLimit) / max * 100; // inverse of filled percent
        bar.setWidth((current - lowerLimit) * barWidthPerUnit, disableAt0);
        if (bar.shiftColor) {
            bar.shift(notTherePercent); // changing colour
        }
    }

    dynamicElement = class DynamicElement extends this.element {
        constructor(visual, verticalAlign = "center", horizontalAlign = "center") {
            super(visual);
            this.type = "dyanamic";

            this.intialText = this.visual.text;

            this.initialWidth = this.visual.width;
            this.initialHeight = this.visual.height;

            this.verticalAlign = verticalAlign;
            this.horizontalAlign = horizontalAlign;

            this.offsetX = this.visual.position.x;
            this.offsetY = this.visual.position.y;

            this.parentOffsetX = 0;
            this.parentOffsetY = 0;

            this.shiftColor = false;
            this.shiftFrom = "#000";
            this.shiftTo = "#fff";

            this.reAlign();
        }

        delete() {
            this.elements.forEach(elem => {
                this.remove(elem);
            });
            /*
            if (this.elements.length > 0) {
                this.remove(this.elements[0]);
            }*/
            /*
                    while (this.indexOf(obj) !== -1) {
            this.remove(this.indexOf(obj));
        }*/
            //Object.keys(this).forEach((key) => { delete this[key]; });
        }

        reAlign() {
            if (this.visual.type === "text") {
                let height = managerInstance.game.measureText(this.visual.text, this.visual.font, this.visual.fontSize).height;
                if (this.visual.height === 0) this.visual.height = height;
            }
            switch (this.verticalAlign) {
                case "top": {
                    this.visual.position.y = this.visual.height / 2 + this.offsetY - this.parentOffsetY;
                    break;
                }
                case "bottom": {
                    if (this.visual.type === "text") {
                        this.visual.height -= this.visual.height / 3;
                    }
                    this.visual.position.y = -(this.visual.height / 2) - this.offsetY + this.parentOffsetY;
                    break;
                }
                default: {
                    let extra = 0;
                    if (this.visual.type === "text") {
                        extra -= this.visual.height / 4;
                    }
                    this.visual.position.y = -this.offsetY - extra;
                    break;
                }
            }

            switch (this.horizontalAlign) {
                case "left": {
                    this.visual.position.x = this.visual.width / 2 + this.offsetX - this.parentOffsetX;
                    break;
                }
                case "right": {
                    this.visual.position.x = -(this.visual.width / 2) - this.offsetX + this.parentOffsetX;
                    break;
                }
                default: {
                    this.visual.position.x = -this.offsetX;
                    break;
                }
            }
        }

        getOffsets(offY, offX) {
            this.reAlign();
            let newOffsets = {
                x: 0,
                y: 0
            };
            if (offX) {
                newOffsets.x = this.visual.width / 2;
            }
            if (offY) {
                newOffsets.y = this.visual.height / 2;
            }
            return newOffsets;
        }

        setOffsets(offsetObj) {
            this.parentOffsetX = offsetObj.x;
            this.parentOffsetY = offsetObj.y;
            this.reAlign();
        }

        addElement(obj, hover = false, offY = true, offX = true, independentOpacity = true) {
            obj.visual.independentOpacity = independentOpacity;
            this.add(obj);

            if (hover) {
                this.scene.addElement(obj);
            }
            let offsetObj = this.getOffsets(offY, offX);
            obj.setOffsets(offsetObj);
        }

        addElementBelow(obj, hover = false, offY = true, offX = true, independentOpacity = true) {
            obj.visual.independentOpacity = independentOpacity;
            this.addBelow(obj);

            if (hover) {
                this.scene.addElement(obj);
            }
            let offsetObj = this.getOffsets(offY, offX);
            obj.setOffsets(offsetObj);
        }

        removeElement(obj) {
            this.remove(obj);
            this.scene.removeElement(obj);
        }

        clearElements() {
            if (this.elements.length === 0) return;
            this.elements.forEach(elem => {
                this.removeElement(elem);
                this.clearElements();
            });
        }

        setWidth(newWidth = 0, disableAt0 = false, lerp = true) {
            if (lerp) {
                this.visual.width = managerInstance.game.lerp(this.visual.width, newWidth);
            } else {
                this.visual.width = newWidth;
            }
            if (typeof (this.visual.radius) !== "undefined" && this.visual.width <= this.visual.radius * 2) {
                this.visual.width = this.visual.radius * 2;
            }
            if (disableAt0) {
                if (newWidth <= 0) {
                    this.visual.enabled = false;
                } else {
                    this.visual.enabled = true;
                }
            }
            this.reAlign();
        }

        setHeight(newHeight = 0, lerp = true) {
            if (lerp) {
                this.visual.height = managerInstance.game.lerp(this.visual.height, newHeight);
            } else {
                this.visual.height = newHeight;
            }
            if (typeof (this.visual.radius) !== "undefined" && this.visual.height <= this.visual.radius * 2) {
                this.visual.height = this.visual.radius * 2;
            }
            this.reAlign();
        }

        setText(newText = "", where = "before") {
            if (where === "before") {
                this.visual.text = `${newText}${this.intialText}`;
            } else if (where === "after") {
                this.visual.text = `${this.intialText}${newText}`;
            } else {
                this.visual.text = `${newText}`;
            }
            //this.reAlign();
        }

        addShift(secondColor, firstColor) {
            if (typeof (this.visual.color) === "undefined") return console.log("Theres no such thing as color on this.");
            this.shiftColor = true;
            this.shiftFrom = firstColor;
            this.shiftTo = secondColor;
        }

        shift(boostLeftPercent = 100) {
            if (!this.shiftColor) return;
            if (typeof (this.visual.color) === "undefined") return console.log("Theres no such thing as color on this.");
            const newHex = managerInstance.game.color.colorLerp(this.shiftFrom, this.shiftTo, boostLeftPercent);
            this.visual.color = newHex;
        }
    }

    button = class Button extends this.dynamicElement {
        constructor(visual, x, y, width, height, details, verticalAlign, horizontalAlign, style = "default") {
            let newVis = managerInstance.makeContainer(x, y, width, height);
            super(newVis, verticalAlign, horizontalAlign);
            this.visual = newVis;
            this.actualVisualElement = new this.manager.dynamicElement(new this.manager.game.object());
            this.addElement(this.actualVisualElement);

            switch (style) {
                default: {
                    let _square1 = new this.manager.game.roundRectangle(0, 0, width - 10, height - 10, 8, "#000", 0.2);
                    let square1 = new this.manager.dynamicElement(_square1, "center", "center");
                    this.actualVisualElement.addElement(square1);

                    let _square2 = new this.manager.game.roundRectangle(0, 0, width, height, 10, "#000", 0.2);
                    let square2 = new this.manager.dynamicElement(_square2, "center", "center");
                    this.actualVisualElement.addElement(square2);

                    this.actualVisualElement.hidden = {
                        size: 1,
                    }
                    this.actualVisualElement.shown = {
                        size: 1.08,
                    }
                    this.actualVisualElement.transitionTime = 0.05;
                    this.actualVisualElement.hasOwnTransitionTime = true;

                    this.actualVisualElement.hideNow();
                    this.addHoverElement(this.actualVisualElement);
                    break;
                }
            }

            if (visual.type === "element" || visual.type === "dynamic") {
                this.actualVisualElement.addElement(visual);
            } else {
                this.actualVisualElement.addElement(new this.manager.dynamicElement(visual));
            }

            this.transitionTime = 0.2;

            if (details.length === 0) return;

            let [name, description, positions] = details;
            let [boxPosVertical, boxPosHorizontal] = positions || ["bottom", "right"];

            let font = "Oswald";
            let fontSize = 20;
            let boxWidth = 300;
            let boxHeight = 150;

            let lines = this.manager.game.fragmentParagraph(description, font, fontSize, boxWidth - 20);
            let _hoverBox = new this.manager.game.roundRectangle((-width / 2) - 10, (height / 2) + 10, boxWidth, boxHeight, 10, "#1d1d1d");
            this.descriptionBox = new this.manager.dynamicElement(_hoverBox, boxPosVertical, boxPosHorizontal);

            let _nameText = new this.manager.game.text(name, 10, 10, "#fff", font, fontSize + 6, "", 1, "left");
            let nameText = new this.manager.dynamicElement(_nameText, "top", "left");
            this.descriptionBox.addElement(nameText, false, true, true, false);

            lines.forEach((line, index) => {
                let _text = new this.manager.game.text(line, 10, (index * (fontSize + 2)) + (fontSize + 20), "#bfc5c9", font, fontSize, "", 1, "left");
                let text = new this.manager.dynamicElement(_text, "top", "left");
                this.descriptionBox.addElement(text, false, true, true, false);
            });
            this.descriptionBox.hidden = {
                opacity: 0,
            }
            this.descriptionBox.shown = {
                opacity: 0.6,
            }
            this.descriptionBox.hideNow();
            this.addHoverElement(this.descriptionBox);
            this.visual.add(this.descriptionBox.visual);
        }
    }

    createConfirmBox = (reason, acceptFunction) => {
        if (this.hasRequest) return;
        this.hasRequest = true;

        let _confirmBox = new this.game.roundRectangle(0, 0, 600, 200, 10, "#3A3E41", 0.7);
        let confirmBox = new this.dynamicElement(_confirmBox, "center", "center");
        this.scene.addDynamic(confirmBox);

        let _confirm = new this.game.text(`Are you sure you want to ${reason}?`, 0, 30, "#fff", "Oswald", 32, "", 1);
        let confirm = new this.dynamicElement(_confirm, "top", "center");
        confirmBox.addElement(confirm);

        let width = this.game.measureText(_confirm.text, _confirm.font, _confirm.fontSize).width;

        confirmBox.setWidth(width + 40, false, false);

        let _no = new this.game.text("NO", 0, 6, "#fff", "Oswald", 32, "", 1);
        let no = new this.button(_no, 20, 20, 80, 60, [], "bottom", "right");
        confirmBox.addElement(no, true);

        let _yes = new this.game.text("YES", 0, 6, "#fff", "Oswald", 32, "", 1);
        let yes = new this.button(_yes, 20, 20, 80, 60, [], "bottom", "left");
        confirmBox.addElement(yes, true);

        const del = () => {
            confirmBox.clearElements();
            this.scene.removeDynamic(confirmBox);
            this.hasRequest = false;
        }

        yes.onclick = () => {
            del();
            acceptFunction();
        }

        no.onclick = () => {
            del();
        }

        return del;
    }

    popDialog = (swingDirection, title) => {
        let _confirmBox = new this.game.rectangle(0, 0, 600, 200, "#000", 0.7);
        let confirmBox = new this.dynamicElement(_confirmBox, "center", "center");
        this.scene.addDynamic(confirmBox);

        confirmBox.transitionTime = 0.1;
        confirmBox.easeType = "easeOutExpo";
        confirmBox.hidden = {
            size: 1
        }
        confirmBox.shown = {
            size: 2
        }

        let _confirm = new this.game.text(title, 0, 30, "#fff", "Oswald", 32, "", 1);
        let confirm = new this.dynamicElement(_confirm, "top", "center");
        confirmBox.addElement(confirm);

        return confirmBox;
        //let width = this.game.measureText(_confirm.text, _confirm.font, _confirm.fontSize).width;

        //confirmBox.setWidth(width + 40, false, false);
    }

    generateHealthBar = entity => {
        entity.hasHealthBar = true;
        entity.barShowTimer = 0;

        let _underHpBar = new this.game.roundRectangle(0, 60, 80, 20, 5, "#000", 0.4);
        entity.underHpBar = new this.dynamicElement(_underHpBar, "center", "center");
        entity.underHpBar.visual.independentRotation = true;

        let _hpBar = new this.game.roundRectangle(5, 0, 70, 10, 2.5, "#cc3428", 1);
        entity.hpBar = new this.dynamicElement(_hpBar, "center", "left");
        entity.hpBar.addShift("#cc3428", "#29cb3f");
        entity.hpBar.visual.independentOpacity = true;
        entity.underHpBar.addElement(entity.hpBar);

        entity.visual.add(entity.underHpBar.visual);

        entity.updateHealthBar = () => {
            if (entity.barShowTimer <= 0) {
                entity.barShowTimer = 0;
                entity.underHpBar.visual.enabled = false;
            } else {
                entity.underHpBar.visual.enabled = true;
                entity.barShowTimer--;
            }
        }
    }

    scene = class Scene extends this.element {
        constructor(renderer) {
            super(new managerInstance.game.scene());
            if (this.manager.scenes.length === 0) {
                this.manager.scene = this;
            }
            this.manager.scenes.push(this);
            this.enabled = true;
            this.hoverElements = [];
            this.animatedElements = [];
            this.clickElements = [];
            this.scrollbars = [];
            this.dragging = new ArrayList();
            this.renderer = renderer;

            this.bottom = {
                left: new this.manager.game.object(),
                right: new this.manager.game.object()
            }

            this.top = {
                left: new this.manager.game.object(),
                right: new this.manager.game.object()
            }

            this.center = new this.manager.game.object();

            this.visual.add(this.bottom.left);
            this.visual.add(this.bottom.right);
            this.visual.add(this.top.left);
            this.visual.add(this.top.right);

            this.visual.add(this.center);

            this.resize();
        }

        hideScreen() {
            this.enabled = false;

            this.bottom.left.enabled = false;
            this.bottom.right.enabled = false;
            this.top.left.enabled = false;
            this.top.right.enabled = false;

            this.center.enabled = false;
        }

        showScreen() {
            this.enabled = true;

            this.bottom.left.enabled = true;
            this.bottom.right.enabled = true;
            this.top.left.enabled = true;
            this.top.right.enabled = true;

            this.center.enabled = true;
        }

        resize() {
            this.top.left.position.x = this.bottom.left.position.x = this.renderer.leftOfScreen;
            this.top.right.position.x = this.bottom.right.position.x = this.renderer.rightOfScreen;
            this.top.left.position.y = this.top.right.position.y = this.renderer.topOfScreen;
            this.bottom.left.position.y = this.bottom.right.position.y = this.renderer.bottomOfScreen;
        }

        addElement(obj) {
            obj.scene = this;
            if (this.hoverElements.indexOf(obj) === -1) {
                this.hoverElements.push(obj);
            }
            if (obj.animation) {
                this.animatedElements.push(obj);
            }
        }

        removeElement(obj) {
            let hoverIndex = this.hoverElements.indexOf(obj);
            if (hoverIndex !== -1) {
                this.hoverElements.splice(hoverIndex, 1);
            }
            if (obj.animation) {
                let animeIndex = this.animatedElements.indexOf(obj);
                this.animatedElements.splice(animeIndex, 1);
            }
        }

        addDynamic(dynamicElem, hover = false) {
            this.elements.push(dynamicElem);
            dynamicElem.scene = this;

            let vertical = dynamicElem.verticalAlign;
            let horizontal = dynamicElem.horizontalAlign;

            if (hover) {
                this.addElement(dynamicElem);
            }
            if ((vertical === "top" || vertical === "bottom") && (horizontal === "left" || horizontal === "right")) {
                this[vertical][horizontal].add(dynamicElem.visual);
            } else {
                this.center.add(dynamicElem.visual);
            }

        }

        removeDynamic(dynamicElem) {
            let elemIndex = this.elements.indexOf(dynamicElem);
            if (elemIndex !== -1) {
                this.hoverElements.splice(elemIndex, 1);
            }

            let vertical = dynamicElem.verticalAlign;
            let horizontal = dynamicElem.horizontalAlign;

            if ((vertical === "top" || vertical === "bottom") && (horizontal === "left" || horizontal === "right")) {
                this[vertical][horizontal].remove(dynamicElem.visual);
            } else {
                this.center.remove(dynamicElem.visual);
            }

            this.removeElement(dynamicElem);
        }
    }

    update(dt, mouse) {
        this.mouse = mouse;
        for (let i = 0; i < this.transitioningElements.length; i++) {
            let e = this.transitioningElements.array[i];
            e.time += dt / 1000;
            if (e.time > e.transitionTime) {
                e.time = e.transitionTime;
                this.transitioningElements.remove(i);
                i--;
            }
            let lerpval = e.time / e.transitionTime;
            for (let x = 0; x < e.transitionProps.length; x++) {
                let prop = e.transitionProps[x];
                if (prop == "x" || prop == "y") {
                    e.visual.position[prop] = lerp(e.oldState[prop], e.newState[prop], e.easeFunc(lerpval));
                } else {
                    e.visual[prop] = lerp(e.oldState[prop], e.newState[prop], e.easeFunc(lerpval));
                }
            }
        }

        let cursor = "initial";

        for (let x = 0; x < managerInstance.scenes.length; x++) {
            if (!managerInstance.scenes[x].enabled) {
                continue;
            }
            let scene = managerInstance.scenes[x];
            for (let i = 0; i < scene.animatedElements.length; i++) {
                let element = scene.animatedElements[i];
                element.animation(element, dt);
            }
            for (let i = 0; i < scene.hoverElements.length; i++) {
                let element = scene.hoverElements[i];
                if (element.updateHitbox || !element.visual.calculatedHitbox) {
                    if (element.casual && element.useCasualHitbox) {
                        let temp = element.visual.position;
                        element.visual.position = element.casual;
                        element.visual.calculateHitbox();
                        element.visual.position = temp;
                    } else {
                        element.visual.calculateHitbox();
                    }
                }
                let hovering = mouse.isCollidingWithRectangle(element.visual) || element.dragging;

                if (hovering && !element.hovering) {
                    if (element.hoverObj) {
                        element.transition(element.hoverObj, element.hoverProperties);
                        //console.log( "Transitioned" );
                    }
                    if (element.hoverEvent) {
                        element.hoverEvent(element);
                    }
                    for (let a = 0; a < element.hoverElements.length; a++) {
                        if (element.hoverElements[a].hasOwnTransitionTime) {
                            element.hoverElements[a].transitionTime = element.hoverElements[a].transitionTime;
                        } else {
                            element.hoverElements[a].transitionTime = element.transitionTime;
                        }
                        element.hoverElements[a].show();
                    }
                } else if (!hovering && element.hovering) {
                    if (element.hoverObj) {
                        element.transition(element.casual, element.hoverProperties);
                    }
                    for (let a = 0; a < element.hoverElements.length; a++) {
                        if (element.hoverElements[a].hasOwnTransitionTime) {
                            element.hoverElements[a].transitionTime = element.hoverElements[a].transitionTime;
                        } else {
                            element.hoverElements[a].transitionTime = element.transitionTime;
                        }
                        element.hoverElements[a].hide();
                    }
                }
                if (element.fixPos) {
                    element.reAlign();
                }
                if (hovering && element.changeCursor) {
                    cursor = "pointer";
                }
                element.hovering = hovering;
                if (!hovering) {
                    if (element.mousedown) {
                        element.mouseWasDown = true;
                    }
                    element.mousedown = false;
                }
            }
            for (let i = 0; i < scene.dragging.length; i++) {
                let element = scene.dragging.array[i];
                element.newreference.x = managerInstance.mouse.x - element.oldGlobalPosition.x;
                element.newreference.y = managerInstance.mouse.y - element.oldGlobalPosition.y;
                element.visual.position.x = (element.newreference.x - element.reference.x) + element.oldPosition.x;
                element.visual.position.y = (element.newreference.y - element.reference.y) + element.oldPosition.y;
                if (element.ondrag) {
                    element.ondrag(element);
                }
            }
        }

        if (document.body.style.cursor != cursor) {
            document.body.style.cursor = cursor;
        }
    }
};