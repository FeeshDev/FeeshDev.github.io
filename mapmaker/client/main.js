//! CONSTANTS / RESOURCES
let fullWidth = 1920;
let fullHeight = 1080;
let semiHeight = 970;
const SVGS = {
	cross: 'M49,0h2v100h-2V0z M0,51v-2h100v2H0z',
	cursor: 'm44,44l120,40-60,21-20,59L44,44Z',
	move: 'm167.25,101.7l-28.2,17.42c-1.68,1.04-3.05.27-3.05-1.7v-9.42h-28.01v28.01h9.42c1.97,0,2.74,1.37,1.7,3.05l-17.42,28.2c-.94,1.51-2.47,1.51-3.4,0l-17.42-28.2c-1.04-1.68-.27-3.05,1.7-3.05h9.42v-28.01h-28.01v9.42c0,1.97-1.37,2.74-3.05,1.7l-28.2-17.42c-1.51-.94-1.51-2.47,0-3.4l28.2-17.42c1.68-1.04,3.05-.27,3.05,1.7v9.42h28.01v-28.01h-9.42c-1.97,0-2.74-1.37-1.7-3.05l17.42-28.2c.94-1.51,2.47-1.51,3.4,0l17.42,28.2c1.04,1.68.27,3.05-1.7,3.05h-9.42v28.01h28.01v-9.42c0-1.97,1.37-2.74,3.05-1.7l28.2,17.42c1.51.94,1.51,2.47,0,3.4Z',
	delete: 'm134,144h-68c-2.21,0-4-1.79-4-4v-62h76v62c0,2.21-1.79,4-4,4Zm-34-58c-1.66,0-3,1.57-3,3.5v43c0,1.93,1.34,3.5,3,3.5s3-1.57,3-3.5v-43c0-1.93-1.34-3.5-3-3.5Zm12,0c-1.66,0-3,1.57-3,3.5v43c0,1.93,1.34,3.5,3,3.5s3-1.57,3-3.5v-43c0-1.93-1.34-3.5-3-3.5Zm12,0c-1.66,0-3,1.57-3,3.5v43c0,1.93,1.34,3.5,3,3.5s3-1.57,3-3.5v-43c0-1.93-1.34-3.5-3-3.5Zm-48,0c-1.66,0-3,1.57-3,3.5v43c0,1.93,1.34,3.5,3,3.5s3-1.57,3-3.5v-43c0-1.93-1.34-3.5-3-3.5Zm12,0c-1.66,0-3,1.57-3,3.5v43c0,1.93,1.34,3.5,3,3.5s3-1.57,3-3.5v-43c0-1.93-1.34-3.5-3-3.5Zm56-27c0-2.21-1.79-4-4-4H60c-2.21,0-4,1.79-4,4v13h88v-13Z',
	makeWall: 'm34,81v-14c0-1.66,1.34-3,3-3h34c1.66,0,3,1.34,3,3v14c0,1.66-1.34,3-3,3h-34c-1.66,0-3-1.34-3-3Zm49,3h34c1.66,0,3-1.34,3-3v-14c0-1.66-1.34-3-3-3h-34c-1.66,0-3,1.34-3,3v14c0,1.66,1.34,3,3,3Zm80-20h-34c-1.66,0-3,1.34-3,3v14c0,1.66,1.34,3,3,3h34c1.66,0,3-1.34,3-3v-14c0-1.66-1.34-3-3-3Zm-112,43v-14c0-1.66-1.34-3-3-3h-14v20h14c1.66,0,3-1.34,3-3Zm9-17c-1.66,0-3,1.34-3,3v14c0,1.66,1.34,3,3,3h34c1.66,0,3-1.34,3-3v-14c0-1.66-1.34-3-3-3h-34Zm43,3v14c0,1.66,1.34,3,3,3h34c1.66,0,3-1.34,3-3v-14c0-1.66-1.34-3-3-3h-34c-1.66,0-3,1.34-3,3Zm46,0v14c0,1.66,1.34,3,3,3h14v-20h-14c-1.66,0-3,1.34-3,3Zm-78,23h-34c-1.66,0-3,1.34-3,3v14c0,1.66,1.34,3,3,3h34c1.66,0,3-1.34,3-3v-14c0-1.66-1.34-3-3-3Zm46,0h-34c-1.66,0-3,1.34-3,3v14c0,1.66,1.34,3,3,3h34c1.66,0,3-1.34,3-3v-14c0-1.66-1.34-3-3-3Zm46,0h-34c-1.66,0-3,1.34-3,3v14c0,1.66,1.34,3,3,3h34c1.66,0,3-1.34,3-3v-14c0-1.66-1.34-3-3-3Z',
	makeFloor: 'm165,67v66c0,2.76-2.24,5-5,5H40c-2.76,0-5-2.24-5-5v-66c0-2.76,2.24-5,5-5h120c2.76,0,5,2.24,5,5Z',
	makeWindow: 'm169,79.65v56.35l-26-15.65v-56.35l26,15.65Zm-99,39.85h60v-55h-60v55Zm-39,16.5l26-15.65v-56.35l-26,15.65v56.35Z',
	star: 'm14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z',
	exportJSON: 'M20.92 15.62a1.15 1.15 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H12a1 1 0 0 0 0 2h5.59l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l3-3a.93.93 0 0 0 .21-.33a1 1 0 0 0 0-.76ZM14 20H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h4a1 1 0 0 0 .92-.62a1 1 0 0 0-.21-1.09l-6-6a1.07 1.07 0 0 0-.28-.19h-.09l-.28-.1H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a1 1 0 0 0 0-2ZM13 5.41L15.59 8H14a1 1 0 0 1-1-1Z',
	importJSON: 'M11 20H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.32 1.32 0 0 0-.19-.29l-6-6a1.32 1.32 0 0 0-.29-.19a.32.32 0 0 0-.09 0l-.31-.1H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2Zm2-14.59L15.59 8H14a1 1 0 0 1-1-1ZM19 15h-5.59l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1.15 1.15 0 0 0-.21.33a1 1 0 0 0 0 .76a.93.93 0 0 0 .21.33l3 3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13.41 17H19a1 1 0 0 0 0-2Z',
	exportImage: 'M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h8q.425 0 .713.288T14 4q0 .425-.288.713T13 5H5v14h14v-8q0-.425.288-.713T20 10q.425 0 .713.288T21 11v8q0 .825-.588 1.413T19 21H5ZM17 7h-1q-.425 0-.713-.288T15 6q0-.425.288-.713T16 5h1V4q0-.425.288-.713T18 3q.425 0 .713.288T19 4v1h1q.425 0 .713.288T21 6q0 .425-.288.713T20 7h-1v1q0 .425-.288.713T18 9q-.425 0-.713-.288T17 8V7Zm-5.75 9L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16Zm.75-4Z',
}
const COLORS = {
	text: '#e4ecf7',
	background: '#08111b',
	primary: '#1a3556',
	secondary: '#0e1d2f',
	accent: '#447ec5',
	wall: '#2923CC', //2923CC
	window: '#FF0000',
	floor: '#DD1BC3',
}
const hexOpacity = (color, opacity) => {
	let hexOpacity = opacity.toString(16);
	return `${color}${hexOpacity.length == 1 ? 0 : ''}${hexOpacity}`;
}
const STYLES = {
	shadow: (e) => {
		e.shadowColor('#E00707');
		e.shadowBlur(10);
		e.shadowOffset({ x: 0, y: 5 });
		e.shadowOpacity(0.3);
	},
	debug: (e) => {
		e.stroke('red');
		e.strokeWidth(1);
	}
}

//! FUNCTIONS / MISC
window.inMapEditor = false;
window.selectedTool = 'move';
// this saves the tool you were on when you middle moused, so you can go back to it
let toolBeforeMiddleMouse;
window.toolList = ['cursor', 'move', 'delete', 'makeWall', 'makeWindow', 'makeFloor'];
const TOOLS = {
	cursor: {
		select: () => {
			let boxes = mapLayer.find(`.selectable`);
			boxes.forEach(box => {
				box.draggable(true);
			});
		},
		deselect: () => {
			transformer.nodes([]);
			let boxes = mapLayer.find(`.selectable`);
			boxes.forEach(box => {
				box.draggable(false);
			});
		}
	},
	move: {
		select: () => {
			map.draggable(true);
		},
		deselect: () => {
			map.draggable(false);
		}
	},
	delete: {
		select: () => { },
		deselect: () => { }
	},
	makeWall: {
		select: () => { },
		deselect: () => { }
	},
	makeWindow: {
		select: () => { },
		deselect: () => { }
	},
	makeFloor: {
		select: () => { },
		deselect: () => { }
	}
}
const rotatePoint = ({ x, y }, rad) => {
	const rcos = Math.cos(rad);
	const rsin = Math.sin(rad);
	return { x: x * rcos - y * rsin, y: y * rcos + x * rsin };
};

function dataUrlToBlobUrl(dataurl) {
	const base64ImageData = dataurl;
	const contentType = "image/png";

	const byteCharacters = atob(
		base64ImageData.substr(`data:${contentType};base64,`.length)
	);
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
};

function downloadURI(uri, name) {
	var link = document.createElement('a');
	//link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
}

// will work for shapes with top-left origin, like rectangle
function rotateAroundCenter(node, rotation) {
	//current rotation origin (0, 0) relative to desired origin - center (node.width()/2, node.height()/2)
	const topLeft = { x: -node.width() / 2, y: -node.height() / 2 };
	const current = rotatePoint(topLeft, Konva.getAngle(node.rotation()));
	const rotated = rotatePoint(topLeft, Konva.getAngle(rotation));
	const dx = rotated.x - current.x,
		dy = rotated.y - current.y;

	node.rotation(rotation);
	node.x(node.x() + dx);
	node.y(node.y() + dy);
}

function setLoadedImage(imageObject, source) {
	let img = new Image();
	img.src = source;
	img.onload = () => {
		imageObject.image(img);
	}
}

window.pressedBinds = [];
const isKeyPressed = (key) => {
	let isIn = pressedBinds.indexOf(key) > -1;
	return isIn;
};
const basicKeybind = (key, callback, repeat = false) => {
	window.addEventListener('keydown', (e) => {
		if (document.getElementById('propSearch') === document.activeElement) return;
		if (e.key !== key) return;
		if (!isKeyPressed(key)) {
			pressedBinds.push(key);
			callback(true, e);
		} else if (repeat) {
			callback(true, e);
		}
	});
	window.addEventListener('keyup', (e) => {
		if (document.getElementById('propSearch') === document.activeElement) return;
		if (e.key !== key) return;
		let i = pressedBinds.indexOf(key);
		pressedBinds.splice(i, 1);
		callback(false, e);
	});
};
basicKeybind('q', (state, e) => {
	if (!state) return;
	groupButtons[toolList.indexOf('cursor')].select();
});
basicKeybind('w', (state, e) => {
	if (!state) return;
	groupButtons[toolList.indexOf('move')].select();
});
basicKeybind('e', (state, e) => {
	if (!state) return;
	groupButtons[toolList.indexOf('delete')].select();
});
basicKeybind('a', (state, e) => {
	if (!state) return;
	groupButtons[toolList.indexOf('makeWall')].select();
});
basicKeybind('s', (state, e) => {
	if (!state) return;
	groupButtons[toolList.indexOf('makeWindow')].select();
});
basicKeybind('d', (state, e) => {
	if (!state) return;
	groupButtons[toolList.indexOf('makeFloor')].select();
});
basicKeybind('c', (state, e) => {
	if (!state) return;
	if (e.ctrlKey === true) {
		let parent = transformer.nodes()[0].parent;
		transformer.nodes()[0].createClone(parent);
		// parent.add(clone)
	}
});
basicKeybind('Shift', (state, e) => {
	if (state) {
		GRID_SIZE = 25;
	} else {
		GRID_SIZE = 50;
	}
});
const selectTool = (tool) => {
	map.draggable(false);
	for (const tool in TOOLS) {
		const obj = TOOLS[tool];
		obj.deselect();
	}
	TOOLS[tool].select();
	window.selectedTool = tool;
}

const toolButton = (x, y, tool) => {
	let group = new Konva.Group({
		x,
		y,
		name: 'toolButton',
		id: `${tool}_button`
	});
	group.tool = tool;
	group.hoverTween = new Konva.Tween({
		node: group,
		scaleX: 1.1,
		scaleY: 1.1,
		easing: Konva.Easings.EaseIn,
		duration: 0.1,
	});
	group.on('mouseover touchstart', function (evt) {
		stage.container().style.cursor = 'pointer';
		group.hoverTween.play();
		group.brightenTween.play();
	});

	group.on('mouseout touchend', function (evt) {
		stage.container().style.cursor = 'default';
		group.hoverTween.reverse();
		group.brightenTween.reverse();
	});

	let buttonSize = 60;

	const testButton = new Konva.Rect({
		x: 0,
		y: 0,
		width: buttonSize,
		height: buttonSize,
		cornerRadius: 15,
		name: '',
		fill: COLORS.primary,
		offset: {
			x: buttonSize / 2,
			y: buttonSize / 2
		}
	});
	group.brightenTween = new Konva.Tween({
		node: testButton,
		brightness: 0.1,
		easing: Konva.Easings.EaseIn,
		duration: 0.1,
	});
	testButton.cache();
	testButton.filters([Konva.Filters.Brighten]);
	group.add(testButton);
	group.path = new Konva.Path()
	if (tool === 'cursor') {
		group.path.setAttrs({
			x: -35,
			y: -35,
			data: SVGS[tool],
			stroke: COLORS.text,
			lineCap: 'round',
			lineJoin: 'round',
			strokeWidth: 12,
			scaleX: 0.35,
			scaleY: 0.35,
		});
	} else {
		group.path.setAttrs({
			x: -35,
			y: -35,
			data: SVGS[tool],
			fill: COLORS.text,
			scaleX: 0.35,
			scaleY: 0.35,
		});
	}
	group.add(group.path);

	group.on('pointerdown', function () {
		group.select();
	});

	group.select = () => {
		uiLayer.find('.toolButton').forEach(button => button.deselect());

		testButton.fill(COLORS.accent);
		testButton.cache();
		if (tool === 'cursor') {
			group.path.stroke(COLORS.primary);
		} else {
			group.path.fill(COLORS.primary);
		}

		selectTool(tool);
	}

	group.deselect = () => {
		testButton.fill(COLORS.primary);
		testButton.cache();
		if (tool === 'cursor') {
			group.path.stroke(COLORS.text);
		} else {
			group.path.fill(COLORS.text);
		}
	}

	return group;
}

const iconButton = (x, y, path, onclick = () => { }) => {
	let group = new Konva.Group({
		x,
		y,
		name: 'iconButton',
	});
	group.hoverTween = new Konva.Tween({
		node: group,
		scaleX: 1.1,
		scaleY: 1.1,
		easing: Konva.Easings.EaseIn,
		duration: 0.1,
	});
	group.on('mouseover touchstart', function (evt) {
		stage.container().style.cursor = 'pointer';
		group.hoverTween.play();
		group.brightenTween.play();
	});

	group.on('mouseout touchend', function (evt) {
		stage.container().style.cursor = 'default';
		group.hoverTween.reverse();
		group.brightenTween.reverse();
	});

	let buttonSize = 60;

	const testButton = new Konva.Rect({
		x: 0,
		y: 0,
		width: buttonSize,
		height: buttonSize,
		cornerRadius: 15,
		name: '',
		fill: COLORS.primary,
		offset: {
			x: buttonSize / 2,
			y: buttonSize / 2
		}
	});
	group.brightenTween = new Konva.Tween({
		node: testButton,
		brightness: 0.1,
		easing: Konva.Easings.EaseIn,
		duration: 0.1,
	});
	testButton.cache();
	testButton.filters([Konva.Filters.Brighten]);
	group.add(testButton);
	group.path = path;
	group.add(group.path);

	group.on('pointerdown', function (evt) {
		onclick(evt)
	});

	return group;
}

const searchResult = (x, y, prop) => {
	let group = new Konva.Group({
		x,
		y,
		name: 'searchResult'
	});
	group.propType = prop.name;
	group.isFavorite = false;
	if (prop.favorite) group.isFavorite = true;

	group.on('mouseover touchstart', function (evt) {
		stage.container().style.cursor = 'pointer';
		group.brightenTween.play();
	});

	group.on('mouseout touchend', function (evt) {
		stage.container().style.cursor = 'default';
		group.brightenTween.reverse();
	});

	group.on('click', function (evt) {
		let preppedX = floorToGrid(-map.x() / mapLayer.scaleX() + map.width() / 2 / mapLayer.scaleX()) + 50;
		let preppedY = floorToGrid(-map.y() / mapLayer.scaleX() + map.height() / 2 / mapLayer.scaleX()) + 50;
		let x = -map.x() / mapLayer.scaleX() + map.width() / 2 / mapLayer.scaleX() + 50;
		let y = -map.y() / mapLayer.scaleX() + map.height() / 2 / mapLayer.scaleX() + 50;
		if (prop.type) {
			switch (prop.type) {
				case 'building':
					let build = createBuilding(prop.name, preppedX, preppedY, 0);
					buildingGroup.add(build)
					break;
				case 'car':
					createCar(carGroup, prop.name, x, y);
					break;
				case 'resource':
					createObject(resourceGroup, prop.name, x, y)
					break;
			}
		} else {
			createProp(propGroup, group.propType, x, y, 0);
		}
	});

	let propType = new Konva.Text({
		x: 40,
		y: 8,
		text: group.propType,
		fontSize: 26,
		fontFamily: 'Verdana',
		fill: COLORS.text,
		width: 360,
		align: 'left',
		fontStyle: 'bold',
		letterSpacing: 1
	});
	let favoriteStar = new Konva.Path({
		x: 360,
		data: SVGS['star'],
		stroke: COLORS.accent,
		lineCap: 'round',
		lineJoin: 'round',
		strokeWidth: 1.5,
		scaleX: 1.6,
		scaleY: 1.6,
	});
	if (group.isFavorite) {
		favoriteStar.fill(COLORS.accent);
	}
	favoriteStar.on('click', (evt) => {
		evt.cancelBubble = true;
		if (group.isFavorite) {
			favoriteStar.fill(COLORS.accent);
			let faves = JSON.parse(localStorage.getItem('favorites'));
			let i = faves.indexOf(group.propType);
			if (i > -1) {
				faves.splice(i, 1);
				localStorage.setItem('favorites', JSON.stringify(faves));
			}
		} else {
			favoriteStar.fill('');
			let faves = JSON.parse(localStorage.getItem('favorites'));
			faves.push(group.propType);
			localStorage.setItem('favorites', JSON.stringify(faves));
		}
		group.isFavorite = !group.isFavorite;
		propList.forEach(prop => {
			if (prop.name === group.propType) {
				prop.favorite = group.isFavorite;
			}
		});
		objectList.forEach(prop => {
			if (prop.name === group.propType) {
				prop.favorite = group.isFavorite;
			}
		});
		initiateSearch();
	});
	const result = new Konva.Rect({
		x: 0,
		y: 0,
		width: 400,
		height: 40,
		cornerRadius: 10,
		fill: COLORS.primary
	});
	group.brightenTween = new Konva.Tween({
		node: result,
		brightness: 0.1,
		easing: Konva.Easings.EaseIn,
		duration: 0.1,
	});
	result.cache();
	result.filters([Konva.Filters.Brighten]);
	group.add(result);
	group.add(propType);
	group.add(favoriteStar);

	Konva.Image.fromURL(prop.url, function (preview) {
		preview.setAttrs({
			x: 4,
			y: 4,
			width: 32,
			height: 32,
		});
		group.add(preview);
	});

	return group;
}

const textButton = (x, y, width, height, fontSize, text, onclick = () => { }) => {
	let group = new Konva.Group({
		x,
		y,
		name: 'textButton',
		offset: {
			x: width / 2,
			y: height / 2
		}
	});

	group.hoverTween = new Konva.Tween({
		node: group,
		scaleX: 1.1,
		scaleY: 1.1,
		easing: Konva.Easings.EaseIn,
		duration: 0.1,
	});

	group.on('mouseover touchstart', function (evt) {
		stage.container().style.cursor = 'pointer';
		group.hoverTween.play();
		group.brightenTween.play();
	});

	group.on('mouseout touchend', function (evt) {
		stage.container().style.cursor = 'default';
		group.hoverTween.reverse();
		group.brightenTween.reverse();
	});

	group.on('click', function (evt) {
		onclick(evt);
	});

	let innerText = new Konva.Text({
		x: 0,
		y: 0,
		text,
		fontSize,
		fontFamily: 'Verdana',
		fill: COLORS.text,
		height: height + 4,
		width,
		align: 'center',
		verticalAlign: 'middle',
		fontStyle: 'bold',
		letterSpacing: 1
	});
	const background = new Konva.Rect({
		x: 0,
		y: 0,
		width,
		height,
		cornerRadius: 10,
		fill: COLORS.primary
	});
	group.brightenTween = new Konva.Tween({
		node: background,
		brightness: 0.1,
		easing: Konva.Easings.EaseIn,
		duration: 0.1,
	});
	background.cache();
	background.filters([Konva.Filters.Brighten]);
	group.add(background);
	group.add(innerText);

	return group;
}

//! UI
const stage = new Konva.Stage({
	container: 'container',   // id of container <div>
	width: fullWidth,
	height: fullHeight
});
const uiLayer = new Konva.Layer();

const leftBar = new Konva.Rect({
	x: 0,
	y: 100,
	width: 525,
	height: 970,
	//fill: hexOpacity(COLORS.text, 10),
	name: '',
});
let leftGroup = new Konva.Group({
	x: 25,
	y: 125
});
let rightGroup = new Konva.Group({
	x: 1420,
	y: 125
});
const extraContainer = new Konva.Rect({
	x: 0,
	y: 0,
	width: 475,
	height: 140,
	cornerRadius: 15,
	fill: COLORS.secondary,
	name: ''
});
const toolContainer = new Konva.Rect({
	x: 0,
	y: 0,
	width: 475,
	height: 140,
	cornerRadius: 15,
	fill: COLORS.secondary,
	name: ''
});
const settingsContainer = new Konva.Rect({
	x: 0,
	y: 165,
	width: 475,
	height: 460,
	cornerRadius: 15,
	fill: COLORS.secondary,
	name: ''
});
const finalContainer = new Konva.Rect({
	x: 0,
	y: 650,
	width: 475,
	height: 170,
	cornerRadius: 15,
	fill: COLORS.secondary,
	name: ''
});
const searchContainer = new Konva.Rect({
	x: 0,
	y: 165,
	width: 475,
	height: 490,
	cornerRadius: 15,
	fill: COLORS.secondary,
	name: ''
});
const searchBar = new Konva.Rect({
	x: 10,
	y: 175,
	width: 455,
	height: 50,
});
const backgroundUrlBar = new Konva.Rect({
	x: 37.5,
	y: 470,
	width: 400,
	height: 35,
	name: 'hideOnMapEditor'
});
const roofUrlBar = new Konva.Rect({
	x: 37.5,
	y: 345,
	width: 400,
	height: 35,
	name: 'hideOnMapEditor'
});
const backgroundOpacityBar = new Konva.Rect({
	x: 37.5,
	y: 520,
	width: 400,
	height: 15,
	name: 'hideOnMapEditor'
});
const roofopacityBar = new Konva.Rect({
	x: 37.5,
	y: 395,
	width: 400,
	height: 15,
	name: 'hideOnMapEditor'
});
const updateButton = textButton(475 / 2, 580, 200, 50, 24, 'UPDATE', () => {
	setLoadedImage(roofImage, document.getElementById('roofUrl').value);
	setLoadedImage(backgroundImage, document.getElementById('backgroundUrl').value);
});
updateButton.name('hideOnMapEditor');
document.getElementById('roofOpacity').oninput = () => {
	roofImage.opacity(parseFloat(document.getElementById('roofOpacity').value));
}
document.getElementById('backgroundOpacity').oninput = () => {
	backgroundImage.opacity(parseFloat(document.getElementById('backgroundOpacity').value));
}

const editMapButon = textButton(475 / 2, 735, 300, 80, 30, 'EDIT MAP', async () => {
	openMapEditor();
});

var houseCreationDetails = {}
async function openMapEditor() {
	if (window.inMapEditor) return;
	window.inMapEditor = true;
	roofImage.opacity(0);
	backgroundImage.opacity(0);
	mapBorderGroup.show();
	riverGroup.show();
	fullResizeMap(320, 320);
	let uiToHide = uiLayer.find(`.hideOnMapEditor`);
	uiToHide.forEach(el => el.hide());
	let uiToShow = uiLayer.find(`.showOnMapEditor`);
	uiToShow.forEach(el => el.show());
	imageExportButton.x(475 / 2 + 50);
	clearAll();
	let whichOne = confirm('Would you like to use the secured files?');
	let mainMap, cars, resources;
	if (whichOne) {
		mainMap = await fetchJson('./client/secure_map/map.json');
		cars = await fetchJson('./client/secure_map/cars.json');
		resources = await fetchJson('./client/secure_map/resources.json');
	} else {
		let full = await fetchJson('./client/map/full.json');
		mainMap = full.map;
		cars = full.cars;
		resources = full.resources;
	}

	houseCreationDetails = mainMap.houseCreation;

	objectList.push({ name: 'tree0', type: 'resource', favorite: false, url: `./client/objects/tree0.png` });
	objectList.push({ name: 'tree1', type: 'resource', favorite: false, url: `./client/objects/tree1.png` });
	objectList.push({ name: 'rock', type: 'resource', favorite: false, url: `./client/objects/rock.png` });
	objectList.push({ name: 'jungletree', type: 'resource', favorite: false, url: `./client/objects/jungletree.png` });
	objectList.push({ name: 'corn', type: 'resource', favorite: false, url: `./client/objects/corn.png` });

	for (let i = 0; i < 14; i++) {
		objectList.push({ name: `vehicle${i}`, type: 'car', favorite: false, url: `./client/vehicles/vehicle${i}.png` });
	}

	for (const key in houseCreationDetails) {
		objectList.push({ name: key, type: 'building', favorite: false, url: `./client/builds/${key}roof.png` });
	}

	//console.log(mainMap)

	mainMap.houses.forEach(house => {
		let width = houseCreationDetails[house.type].width * HARD_GRID_SIZE;
		let height = houseCreationDetails[house.type].height * HARD_GRID_SIZE;
		let x = house.position[0] * HARD_GRID_SIZE + MAP_WIDTH / 2;
		let y = house.position[1] * HARD_GRID_SIZE + MAP_HEIGHT / 2;
		let rot = house.rotation * 90 || 0;
		let build = createBuilding(house.type, x, y, rot, house.image, house.hasRoof);
		buildingGroup.add(build);
	});

	cars.forEach(car => {
		let x = car.x + MAP_WIDTH / 2;
		let y = car.y + MAP_HEIGHT / 2;
		let rot = car.angle || 0;
		createCar(carGroup, car.type, x, y, rot);
	});

	resources.forEach(res => {
		let x = res.x + MAP_WIDTH / 2;
		let y = res.y + MAP_HEIGHT / 2;
		let rot = res.angle || 0;
		createObject(resourceGroup, res.type, x, y, rot, res.radius);
	});

	initiateSearch();
	resize();
}

const exportImportContainer = new Konva.Rect({
	x: 0,
	y: 680,
	width: 475,
	height: 140,
	cornerRadius: 15,
	fill: COLORS.secondary,
	name: ''
});

rightGroup.add(extraContainer);
rightGroup.add(settingsContainer);
rightGroup.add(finalContainer);
rightGroup.add(backgroundUrlBar);
rightGroup.add(roofUrlBar);
rightGroup.add(backgroundOpacityBar);
rightGroup.add(roofopacityBar);
rightGroup.add(updateButton);
rightGroup.add(editMapButon);

leftGroup.add(toolContainer);
leftGroup.add(searchContainer);
leftGroup.add(searchBar);

let resultGroup = new Konva.Group({
	x: 10,
	y: 237
});
leftGroup.add(resultGroup);

let actualSearchBar = document.getElementById('propSearch');
actualSearchBar.oninput = () => {
	initiateSearch();
}

const initiateSearch = () => {
	resultGroup.removeChildren();
	resultGroup.destroyChildren();
	let searchTerm = actualSearchBar.value;
	if (inMapEditor) {
		let searchResults = searchObject(searchTerm, 8);
		searchResults.forEach((prop, i) => {
			resultGroup.add(searchResult(0, 52.5 * i, prop))
		});
	} else {
		let searchResults = searchProp(searchTerm, 8);
		searchResults.forEach((prop, i) => {
			resultGroup.add(searchResult(0, 52.5 * i, prop))
		});
	}
}

// for (let i = 0; i < 8; i++) {
// 	leftGroup.add(searchResult(10, 237 + 52.5 * i, {}))
// }

leftGroup.add(exportImportContainer);
let groupButtons = [];
for (let i = 0; i < toolList.length; i++) {
	const name = toolList[i];
	let button = toolButton(20 + 15 * i + 60 * i + 30, 30 + 60, name);
	groupButtons.push(button);
}
groupButtons.forEach(button => {
	leftGroup.add(button);
});

const exportButton = iconButton(475 / 2, 775, new Konva.Path({
	data: SVGS['exportJSON'],
	scale: { x: 1.8, y: 1.8 },
	x: -22,
	y: -22,
	fill: COLORS.text,
}), () => {
	alert('JSON copied to clipboard.');
	let exported = exportJSON();
	navigator.clipboard.writeText(exported);
});
exportButton.name('hideOnMapEditor');
const exportMapButton = iconButton(475 / 2 - 50, 775, new Konva.Path({
	data: SVGS['exportJSON'],
	scale: { x: 1.8, y: 1.8 },
	x: -22,
	y: -22,
	fill: COLORS.text,
}), () => {
	alert('JSON copied to clipboard.');
	let exported = exportMapJSON();
	navigator.clipboard.writeText(exported);
});
exportMapButton.hide();
exportMapButton.name('showOnMapEditor');
const importButton = iconButton(475 / 2 - 100, 775, new Konva.Path({
	data: SVGS['importJSON'],
	scale: { x: 1.8, y: 1.8 },
	x: -22,
	y: -22,
	fill: COLORS.text,
}), () => {
	let json = JSON.parse(prompt('Ayo bitch paste your json down here!!'));
	clearAll();
	importJSON(json);
});
importButton.name('hideOnMapEditor');
const imageExportButton = iconButton(475 / 2 + 100, 775, new Konva.Path({
	data: SVGS['exportImage'],
	scale: { x: 1.8, y: 1.8 },
	x: -22,
	y: -22,
	fill: COLORS.text,
}), () => {
	let oldWidth = map.width()
	let oldHeight = map.height();
	let oldX = map.x()
	let oldY = map.y();
	let oldScale = map.scaleX();
	let oldZoom = mapLayer.scaleX();
	changeZoom(1 / oldZoom); // has to go before the other transforms since it messes with them
	map.width(MAP_WIDTH);
	map.height(MAP_HEIGHT);
	map.x(0);
	map.y(0);
	map.scale({ x: 1, y: 1 });
	let uri = map.toDataURL();
	let url = dataUrlToBlobUrl(uri);
	changeZoom(oldZoom)
	map.width(oldWidth);
	map.height(oldHeight);
	map.x(oldX);
	map.y(oldY);
	map.scale({ x: oldScale, y: oldScale });
	window.open(url, '_blank');
});

leftGroup.add(exportMapButton);
leftGroup.add(exportButton);
leftGroup.add(importButton);
leftGroup.add(imageExportButton);

let toolsText = new Konva.Text({
	x: 0,
	y: -5,
	text: 'TOOLS',
	fontSize: 32,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475,
	padding: 20,
	align: 'center',
	fontStyle: 'bold',
	letterSpacing: 1
});
let mapText = new Konva.Text({
	x: 0,
	y: 160,
	text: 'SETTINGS',
	fontSize: 32,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475,
	padding: 20,
	align: 'center',
	fontStyle: 'bold',
	letterSpacing: 1,
});
let propsText = new Konva.Text({
	x: 0,
	y: -5,
	text: 'PROPERTIES',
	fontSize: 32,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475,
	padding: 20,
	align: 'center',
	fontStyle: 'bold',
	letterSpacing: 1
});
let tbdText = new Konva.Text({
	x: 0,
	y: 80,
	text: 'More soon...',
	fontSize: 26,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475,
	padding: 20,
	align: 'left',
});
let xPropText = new Konva.Text({
	x: 0,
	y: 45,
	text: 'X:',
	fontSize: 26,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475 / 2,
	padding: 20,
	align: 'left',
});
let yPropText = new Konva.Text({
	x: 475 / 2,
	y: 45,
	text: 'Y:',
	fontSize: 26,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475 / 2,
	padding: 20,
	align: 'left',
});
let xPropShadow = new Konva.Rect({
	x: -100 + 395 / 2,
	y: 61,
	fill: COLORS.primary,
	width: 124,
	height: 30,
	cornerRadius: 5
});
let yPropShadow = new Konva.Rect({
	x: -100 + 395 + 40,
	y: 61,
	fill: COLORS.primary,
	width: 124,
	height: 30,
	cornerRadius: 5
});
let actualXPropText = new Konva.Text({
	x: -100 + 395 / 2,
	y: 65,
	text: '20',
	fontSize: 26,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	visible: false,
	width: 120,
	height: 30,
	align: 'right',
});
let actualYPropText = new Konva.Text({
	x: - 60 + 395,
	y: 65,
	text: '20',
	fontSize: 26,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	visible: false,
	width: 120,
	height: 30,
	align: 'right',
});
makeTextEditable(actualXPropText, 'single',
	(value) => {
		if (parseInt(value) !== null && !isNaN(parseInt(value))) {
			if (transformer.nodes().length < 1) return;
			let box = transformer.nodes()[0];
			if (box.propType !== undefined) {
				let originalRotation = box.rotation();
				rotateAroundCenter(box, 0);
				let propX = value * HARD_GRID_SIZE;
				let finalX = propX + MAP_WIDTH / 2 - box.width() / 2;
				box.x(finalX);
				rotateAroundCenter(box, originalRotation);
			} else {
				let boxWidth = box.width();
				let boxX = value * HARD_GRID_SIZE;
				let finalX = boxX + MAP_WIDTH / 2 - boxWidth / 2;
				box.x(finalX);
			}
		}
	},
	() => { }
)
makeTextEditable(actualYPropText, 'single',
	(value) => {
		if (parseInt(value) !== null && !isNaN(parseInt(value))) {
			if (transformer.nodes().length < 1) return;
			let box = transformer.nodes()[0];
			if (box.propType !== undefined) {
				let originalRotation = box.rotation();
				rotateAroundCenter(box, 0);
				let propY = value * HARD_GRID_SIZE;
				let finalY = propY + MAP_WIDTH / 2 - box.height() / 2;
				box.y(finalY);
				rotateAroundCenter(box, originalRotation);
			} else {
				let boxHeight = box.height();
				let boxY = value * HARD_GRID_SIZE;
				let finalY = boxY + MAP_WIDTH / 2 - boxHeight / 2;
				box.y(finalY);
			}
		}
	},
	() => { }
)
let roofText = new Konva.Text({
	x: 0,
	y: 285,
	text: 'ROOF',
	fontSize: 32,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475,
	padding: 20,
	align: 'center',
	fontStyle: 'bold',
	letterSpacing: 1,
	name: 'hideOnMapEditor'
});
let buildingText = new Konva.Text({
	x: 0,
	y: 410,
	text: 'BACKGROUND',
	fontSize: 32,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475,
	padding: 20,
	align: 'center',
	fontStyle: 'bold',
	letterSpacing: 1,
	name: 'hideOnMapEditor'
});
let importExportText = new Konva.Text({
	x: 0,
	y: 675,
	text: 'IMPORT / EXPORT',
	fontSize: 32,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475,
	padding: 20,
	align: 'center',
	fontStyle: 'bold',
	letterSpacing: 1
});
let mapWidthText = new Konva.Text({
	x: 0,
	y: 205,
	text: 'MAP WIDTH:',
	fontSize: 26,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475,
	padding: 20,
	align: 'left',
	name: 'hideOnMapEditor'
});
let actualMapWidthText = new Konva.Text({
	x: - 20 + 395,
	y: 225,
	text: '20',
	fontSize: 26,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 80,
	align: 'right',
	name: 'hideOnMapEditor'
});
let mapHeightText = new Konva.Text({
	x: 0,
	y: 245,
	text: 'MAP HEIGHT:',
	fontSize: 26,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 475,
	padding: 20,
	align: 'left',
	name: 'hideOnMapEditor'
});
let actualMapHeightText = new Konva.Text({
	x: - 20 + 395,
	y: 265,
	text: '20',
	fontSize: 26,
	fontFamily: 'Verdana',
	fill: COLORS.text,
	width: 80,
	align: 'right',
	name: 'hideOnMapEditor'
});
let widthShadow = new Konva.Rect({
	x: -20 + 395,
	y: 221,
	fill: COLORS.primary,
	width: 84,
	height: 30,
	cornerRadius: 5,
	name: 'hideOnMapEditor'
});
let heightShadow = new Konva.Rect({
	x: -20 + 395,
	y: 261,
	fill: COLORS.primary,
	width: 84,
	height: 30,
	cornerRadius: 5,
	name: 'hideOnMapEditor'
});
makeTextEditable(actualMapHeightText, 'single',
	(value) => {
		if (parseInt(value) !== null && !isNaN(parseInt(value))) {
			resizeMap('height', parseInt(value))
		}
	},
	() => { }
)
makeTextEditable(actualMapWidthText, 'single',
	(value) => {
		if (parseInt(value) !== null && !isNaN(parseInt(value))) {
			resizeMap('width', parseInt(value))
		}
	},
	() => { }
)
rightGroup.add(mapWidthText);
rightGroup.add(mapHeightText);
rightGroup.add(mapText);
rightGroup.add(propsText);
rightGroup.add(tbdText);
rightGroup.add(xPropText);
rightGroup.add(yPropText);
rightGroup.add(xPropShadow);
rightGroup.add(yPropShadow);
rightGroup.add(actualXPropText);
rightGroup.add(actualYPropText);
rightGroup.add(roofText);
rightGroup.add(buildingText);
rightGroup.add(widthShadow);
rightGroup.add(heightShadow);
rightGroup.add(actualMapHeightText);
rightGroup.add(actualMapWidthText);

leftGroup.add(toolsText);
leftGroup.add(importExportText);
window.onload = () => {
	groupButtons[toolList.indexOf(selectedTool)].select();

	map.x(map.x() + (map.width() - MAP_WIDTH * stage.scaleX()) / 2);
	map.y(map.y() + (map.width() - MAP_HEIGHT * stage.scaleX()) / 2);
	map.trueProps.x = map.x();
	map.trueProps.y = map.y();
	map.trueProps.scale = stage.scaleX();

	console.log('Credits: Alez, Gark, StackOverflow, icones, BuildRoyale');
	console.log('Ignore the errors :)');

	// fetchLocal().then(e => {
	// 	importJSON(e);
	// 	exportJSON();
	// });

	setTimeout(() => {
		let favs = localStorage.getItem('favorites');
		if (favs !== '' && favs !== null) {
			let favorites = JSON.parse(favs);
			favorites.forEach(fave => {
				propList.forEach(prop => {
					if (prop.name === fave) {
						prop.favorite = true;
					}
				});
				objectList.forEach(prop => {
					if (prop.name === fave) {
						prop.favorite = true;
					}
				});
			});
		} else {
			localStorage.setItem('favorites', '[]');
		}
		initiateSearch();
	}, 50);
}

//! IMPORTING
const fetchJson = async (path) => {
	let response = await fetch(path);
	let json = await response.json();
	return json;
}
const fetchLocal = async () => {
	let response = await fetch('./client/import.json');
	let json = await response.json();
	return json;
}
const clearAll = () => {
	let allObjects = [...wallGroup.children, ...windowGroup.children, ...floorGroup.children, ...propGroup.children];
	allObjects.forEach(object => {
		object.destroy()
	});
}
const createImportedBox = (type, wall) => {
	let boxWidth = wall.width * HARD_GRID_SIZE;
	let boxHeight = wall.height * HARD_GRID_SIZE;
	let boxX = wall.x * HARD_GRID_SIZE;
	let boxY = wall.y * HARD_GRID_SIZE;
	let finalX = boxX + MAP_WIDTH / 2 - boxWidth / 2;
	let finalY = boxY + MAP_HEIGHT / 2 - boxHeight / 2;
	let box = createBox(type, finalX, finalY);
	box.width(boxWidth);
	box.height(boxHeight);
	//box.rotation(wall.rotation * 90);
	return box;
}
const createImportedProp = (prop) => {
	let propX = prop.extra.x * HARD_GRID_SIZE;
	let propY = prop.extra.y * HARD_GRID_SIZE;
	let finalX = propX + MAP_WIDTH / 2;
	let finalY = propY + MAP_HEIGHT / 2;
	let rotation = prop.extra.rotation * 90 || 0;
	createProp(propGroup, prop.type, finalX, finalY, rotation);
}
const getExportedBox = (wall) => {
	let boxWidth = wall.width() / HARD_GRID_SIZE;
	let boxHeight = wall.height() / HARD_GRID_SIZE;
	let boxX = wall.x() - MAP_WIDTH / 2 + wall.width() / 2;
	let boxY = wall.y() - MAP_HEIGHT / 2 + wall.height() / 2;
	let finalX = boxX / HARD_GRID_SIZE;
	let finalY = boxY / HARD_GRID_SIZE;
	//let rotation = wall.rotation() / 90;

	return { x: finalX, y: finalY, width: boxWidth, height: boxHeight };
}
const getExportedProp = (prop) => {
	let oldRotation = prop.rotation();
	let rotation = oldRotation / 90;

	rotateAroundCenter(prop, 0);
	let boxX = prop.x() - MAP_WIDTH / 2 + prop.width() / 2;
	let boxY = prop.y() - MAP_HEIGHT / 2 + prop.height() / 2;
	let finalX = boxX / HARD_GRID_SIZE;
	let finalY = boxY / HARD_GRID_SIZE;
	rotateAroundCenter(prop, oldRotation);

	return { type: prop.propType, extra: { x: finalX, y: finalY, rotation } };
}
const getExportedBuilding = (build) => {
	let oldRotation = build.rotation();
	let rotation = oldRotation / 90;

	rotateAroundCenter(build, 0);
	let boxX = build.x() - MAP_WIDTH / 2 + build.width() / 2;
	let boxY = build.y() - MAP_HEIGHT / 2 + build.height() / 2;
	let finalX = boxX / HARD_GRID_SIZE;
	let finalY = boxY / HARD_GRID_SIZE;
	rotateAroundCenter(build, oldRotation);

	return { type: build.buildingType, rotation, hasRoof: build.hasRoof, image: build.replaceImage, position: [finalX, finalY] };
}
const getExportedObject = (obj) => {
	let oldRotation = obj.rotation();
	let angle = oldRotation * (Math.PI / 180);

	rotateAroundCenter(obj, 0);
	let boxX = obj.x() - MAP_WIDTH / 2 + obj.width() / 2;
	let boxY = obj.y() - MAP_HEIGHT / 2 + obj.height() / 2;
	rotateAroundCenter(obj, oldRotation);

	return { type: obj.objectType, angle, radius: obj.radius, x: boxX, y: boxY };
}
const getExportedCar = (obj) => {
	let oldRotation = obj.rotation();
	let angle = oldRotation * (Math.PI / 180);

	rotateAroundCenter(obj, 0);
	let boxX = obj.x() - MAP_WIDTH / 2 + obj.width() / 2;
	let boxY = obj.y() - MAP_HEIGHT / 2 + obj.height() / 2;
	rotateAroundCenter(obj, oldRotation);

	return { type: obj.objectType, angle, x: boxX, y: boxY };
}
const importJSON = async (json) => {
	actualMapHeightText.text(json.height);
	actualMapWidthText.text(json.width);

	document.getElementById('backgroundUrl').value = json.others.background.url;
	document.getElementById('backgroundOpacity').value = json.others.background.opacity;
	document.getElementById('roofUrl').value = json.others.roof.url;
	document.getElementById('roofOpacity').value = json.others.roof.opacity;

	backgroundImage.opacity(parseFloat(json.others.background.opacity));
	roofImage.opacity(parseFloat(json.others.roof.opacity));
	setLoadedImage(backgroundImage, json.others.background.url);
	setLoadedImage(roofImage, json.others.roof.url);

	resizeMap('width', parseInt(json.width));
	resizeMap('height', parseInt(json.height));
	json.ground.forEach((wall) => {
		let type = 'floor';
		let buildWall = createImportedBox(type, wall);
		floorGroup.add(buildWall);
	});
	json.walls.forEach((wall) => {
		if (wall.bullet === false) {
			let type = 'window';
			let buildWall = createImportedBox(type, wall);
			windowGroup.add(buildWall);
		} else {
			let type = 'wall';
			let buildWall = createImportedBox(type, wall);
			wallGroup.add(buildWall);
		}
	});
	json.objects.forEach(obj => {
		createImportedProp(obj);
	});
}
const exportJSON = () => {
	let build = {
		width: MAP_WIDTH / HARD_GRID_SIZE,
		height: MAP_HEIGHT / HARD_GRID_SIZE,
		others: {
			roof: {
				url: document.getElementById('roofUrl').value,
				opacity: document.getElementById('roofOpacity').value
			},
			background: {
				url: document.getElementById('backgroundUrl').value,
				opacity: document.getElementById('backgroundOpacity').value
			}
		},
		walls: [],
		ground: [],
		objects: []
	}
	floorGroup.children.forEach(floor => {
		let finalWall = getExportedBox(floor);
		build.ground.push(finalWall);
	});
	wallGroup.children.forEach(wall => {
		let finalWall = getExportedBox(wall);
		build.walls.push(finalWall);
	});
	windowGroup.children.forEach(window => {
		let finalWall = getExportedBox(window);
		finalWall.bullet = false;
		build.walls.push(finalWall);
	});
	propGroup.children.forEach(prop => {
		let finalProp = getExportedProp(prop);
		build.objects.push(finalProp);
	});
	console.log(JSON.stringify(build));
	return JSON.stringify(build);
}

const exportMapJSON = () => {
	let final = {
		resources: [],
		cars: [],
		map: {
			houses: [],
			houseCreation: houseCreationDetails
		}
	}
	buildingGroup.children.forEach(build => {
		let finalBuilding = getExportedBuilding(build);
		final.map.houses.push(finalBuilding);
	});
	carGroup.children.forEach(car => {
		let finalCar = getExportedCar(car);
		final.cars.push(finalCar);
	});
	resourceGroup.children.forEach(obj => {
		let finalObject = getExportedObject(obj);
		final.resources.push(finalObject);
	});
	console.log(JSON.stringify(final));
	return JSON.stringify(final);
}

const header = new Konva.Rect({
	x: 0,
	y: 0,
	width: 1920,
	height: 100,
	fill: COLORS.secondary,
	name: ''
});
uiLayer.add(leftBar);
uiLayer.add(rightGroup);
uiLayer.add(leftGroup);

let logo = new Konva.Image({
	x: 10,
	y: 10,
	scale: { x: 0.7, y: 0.7 }
});
setLoadedImage(logo, './client/images/logo.png');

let titleText = new Konva.Text({
	x: 150,
	y: 5,
	text: 'Official Map Maker',
	fontSize: 40,
	fontFamily: 'Chewy',
	fill: COLORS.text,
	width: 400,
	height: 100,
	align: 'left',
	verticalAlign: 'middle',
	stroke: '#000000',
	strokeWidth: 10,
	fillAfterStrokeEnabled: true
});

uiLayer.add(header);
uiLayer.add(logo);
uiLayer.add(titleText);

stage.add(uiLayer);

for (const key in STYLES) {
	let elementsOf = stage.find(`.${key}`);
	elementsOf.forEach(element => {
		STYLES[key](element);
	});
}

//! MAP
const HARD_GRID_SIZE = 50;
var GRID_SIZE = 50;
var MAP_WIDTH = 10 * GRID_SIZE;
var MAP_HEIGHT = 10 * GRID_SIZE;
const map = new Konva.Stage({
	container: 'map',   // id of container <div>
	width: MAP_WIDTH,
	height: MAP_HEIGHT,
	x: 0,
	y: 0,
	draggable: true
});

const zoomPower = 1.1;
map.on('wheel', e => {
	e.evt.preventDefault();

	let zoomOut = e.evt.deltaY < 0;
	if (e.evt.ctrlKey) zoomOut = !zoomOut;
	const zoomMult = zoomOut ? zoomPower : 1 / zoomPower;

	// zoom in on centre instead of on pointer on shift
	const pointer = e.evt.shiftKey ? undefined : map.getPointerPosition();
	changeZoom(zoomMult, pointer);
});
const roundToGrid = number => Math.round(number / GRID_SIZE) * GRID_SIZE;
const floorToGrid = number => Math.floor(number / GRID_SIZE) * GRID_SIZE;
const ceilToGrid = number => Math.ceil(number / GRID_SIZE) * GRID_SIZE;
map.on('dragmove', function (evt) {
	map.trueProps.x = map.x();
	map.trueProps.y = map.y();
	map.trueProps.scale = stage.scaleX();
});
map.trueProps = {
	x: map.x(),
	y: map.y(),
	scale: stage.scaleX(),
	ratio: 1
};
const gridLayer = new Konva.Layer();
const backgroundLayer = new Konva.Layer();
const mapLayer = new Konva.Layer();
const roofLayer = new Konva.Layer();
const changeZoom = (zoomMult, pointer) => {
	// if changeZoom is only called with one argument, it will zoom in on the middle of the screen
	// if that still fails (like if mapLayer isn't set up yet), it will zoom in on (0, 0)
	pointer ||= {
		x: mapLayer.width() / 2 || 0,
		y: mapLayer.height() / 2 || 0
	};

	const oldScale = gridLayer.scaleX();
	const newScale = oldScale * zoomMult;
	const zoom = { x: newScale, y: newScale };
	gridLayer.scale(zoom);
	backgroundLayer.scale(zoom);
	mapLayer.scale(zoom);
	roofLayer.scale(zoom);

	const centreAroundPointerWithAxis = axis => {
		const mousePointTo = (map[axis]() - pointer[axis]) / oldScale / map.trueProps.ratio;
		const oldLeft = map[axis]() / oldScale / map.trueProps.ratio;
		const diffToLeft = mousePointTo - oldLeft;
		const scalledDiffToLeft = diffToLeft / zoomMult;
		const newLeft = mousePointTo - scalledDiffToLeft;
		map[axis](newLeft * newScale * map.trueProps.ratio);
		map.trueProps[axis] = map[axis]();
	}

	centreAroundPointerWithAxis("x");
	centreAroundPointerWithAxis("y");
	map.trueProps.scale = stage.scaleX();
}

let backgroundImage = new Konva.Image({
	hitFunc: () => { }
});
//setLoadedImage(backgroundImage, './client/builds/gym.png');

let roofImage = new Konva.Image({
	hitFunc: () => { }
});
//setLoadedImage(roofImage, './client/builds/gymroof.png');

backgroundLayer.add(backgroundImage);
roofLayer.add(roofImage);

let mapGroup = new Konva.Group();
let floorGroup = new Konva.Group();
let wallGroup = new Konva.Group();
let windowGroup = new Konva.Group();
let propGroup = new Konva.Group();
let buildingGroup = new Konva.Group();
let resourceGroup = new Konva.Group();
let carGroup = new Konva.Group();
mapGroup.add(floorGroup, wallGroup, buildingGroup, resourceGroup, carGroup, windowGroup, propGroup);
window.transformer = new Konva.Transformer({
	keepRatio: false,
	rotationSnapTolerance: 45,
	rotationSnaps: [0, 90, 180, 270]
});
let crossProps = {
	thickness: 2,
	length: 20,
	fill: '#000000',
	opacity: 0.3
}

const gridCross = new Konva.Group({
	opacity: crossProps.opacity
});
const crossPartWide = new Konva.Rect({
	x: 0,
	y: 0,
	offsetY: crossProps.thickness / 2,
	offsetX: crossProps.length / 2,
	height: crossProps.thickness,
	width: crossProps.length,
	fill: crossProps.fill,
});
const crossPartTall = new Konva.Rect({
	x: 0,
	y: 0,
	offsetX: crossProps.thickness / 2,
	offsetY: crossProps.length / 2,
	width: crossProps.thickness,
	height: crossProps.length,
	fill: crossProps.fill,
});
gridCross.add(crossPartWide, crossPartTall);
gridCross.cache();

const preGenGridSize = 10 * HARD_GRID_SIZE;
let bigGrid = new Konva.Group();
for (let i = 0; i < preGenGridSize; i += HARD_GRID_SIZE) {
	for (let j = 0; j < preGenGridSize; j += HARD_GRID_SIZE) {
		let gridClone = gridCross.clone({ x: i, y: j });
		bigGrid.add(gridClone);
	}
}
bigGrid.cache();

let wallThickness = 10 * HARD_GRID_SIZE;
let wallLength = 320 * HARD_GRID_SIZE + wallThickness * 2;
let riverWidth = 10 * HARD_GRID_SIZE;
let riverGroup = new Konva.Group({
	visible: false
});
let river = new Konva.Rect({
	x: 320 * HARD_GRID_SIZE / 2 - 54 * HARD_GRID_SIZE - riverWidth / 2,
	y: -wallThickness,
	opacity: 0.4,
	fill: 'blue',
	width: riverWidth,
	height: wallLength
});
let shoreRight = new Konva.Rect({
	x: 320 * HARD_GRID_SIZE / 2 - 54 * HARD_GRID_SIZE + riverWidth / 2,
	y: -wallThickness,
	opacity: 0.3,
	fill: '#d2c290',
	width: 1.5 * HARD_GRID_SIZE,
	height: wallLength
});
let shoreLeft = new Konva.Rect({
	x: 320 * HARD_GRID_SIZE / 2 - 54 * HARD_GRID_SIZE - riverWidth / 2 - 1.5 * HARD_GRID_SIZE,
	y: -wallThickness,
	opacity: 0.3,
	fill: '#d2c290',
	width: 1.5 * HARD_GRID_SIZE,
	height: wallLength
});
riverGroup.add(shoreLeft);
riverGroup.add(shoreRight);
riverGroup.add(river);
let mapBorderGroup = new Konva.Group({
	x: -wallThickness,
	y: -wallThickness,
	opacity: 0.3,
	visible: false
});
let topWall = new Konva.Rect({
	x: 0,
	y: 0,
	height: wallThickness,
	width: wallLength,
	fill: '#000000'
});
topWall.cache();
let bottomWall = new Konva.Rect({
	x: wallThickness,
	y: wallLength - wallThickness,
	height: wallThickness,
	width: wallLength - wallThickness,
	fill: '#000000'
});
bottomWall.cache();
let leftWall = new Konva.Rect({
	x: 0,
	y: wallThickness,
	height: wallLength - wallThickness,
	width: wallThickness,
	fill: '#000000'
});
leftWall.cache();
let rightWall = new Konva.Rect({
	x: wallLength - wallThickness,
	y: wallThickness,
	height: wallLength - wallThickness * 2,
	width: wallThickness,
	fill: '#000000'
});
rightWall.cache();
mapBorderGroup.add(topWall, leftWall, rightWall, bottomWall);

const generateGrid = () => {
	let gridGroup = new Konva.Group();
	if (inMapEditor) {
		for (let i = 0; i < MAP_WIDTH; i += (preGenGridSize)) {
			for (let j = 0; j < MAP_HEIGHT; j += (preGenGridSize)) {
				let clone = bigGrid.clone({ x: i, y: j });
				gridGroup.add(clone);
			}
		}
		for (let i = 0; i < MAP_HEIGHT; i += (HARD_GRID_SIZE)) {
			let gridClone = gridCross.clone({ x: MAP_WIDTH, y: i });
			gridGroup.add(gridClone);
		}
		for (let i = 0; i <= MAP_WIDTH; i += (HARD_GRID_SIZE)) {
			let gridClone = gridCross.clone({ x: i, y: MAP_HEIGHT });
			gridGroup.add(gridClone);
		}
	} else {
		for (let i = 0; i <= MAP_WIDTH; i += HARD_GRID_SIZE) {
			for (let j = 0; j <= MAP_HEIGHT; j += HARD_GRID_SIZE) {
				let clone = gridCross.clone({ x: i, y: j });
				gridGroup.add(clone);
			}
		}
	}
	return gridGroup;
}
gridLayer.add(generateGrid());
gridLayer.cache();
mapLayer.add(riverGroup);
mapLayer.add(mapGroup);
mapLayer.add(mapBorderGroup);
mapLayer.add(transformer);
const absToLocalX = (x) => {
	return - x / stage.scaleX() + map.x() / stage.scaleX();
}
const localToAbsX = (x) => {
	return -(x * stage.scaleX()) + map.x();
}
const absToLocalY = (y) => {
	return - y / stage.scaleX() + map.y() / stage.scaleX();
}
const localToAbsY = (y) => {
	return -(y * stage.scaleX()) + map.y();
}
transformer.anchorDragBoundFunc(function (oldPos, newPos, event) {
	if (transformer.getActiveAnchor() === 'rotater') {
		return newPos;
	}
	// todo actually fix when scale is !== 1

	let localRoundedX = roundToGrid(absToLocalX(newPos.x));
	let newX = localToAbsX(localRoundedX);
	let localRoundedY = roundToGrid(absToLocalY(newPos.y));
	let newY = localToAbsY(localRoundedY);

	return {
		x: newX,
		y: newY
	};
})
window.currentBox = null;
map.on('mousedown', function (evt) {
	// middle mouse to move around
	if (evt.evt.button === 1) {
		toolBeforeMiddleMouse = window.selectedTool;
		groupButtons[toolList.indexOf('move')].select();
	}

	if (evt.evt.button !== 0) return;
	//check if clicking outside of rect or transform
	//transform selection
	if (evt.target?.parent?.grouped) {
		if (transformer.nodes().length > 0 && evt.target.parent !== transformer.nodes()[0] && transformer.children.indexOf(evt.target.parent) == -1) {
			transformer.nodes([]);
		}
	} else {
		if (transformer.nodes().length > 0 && evt.target !== transformer.nodes()[0] && transformer.children.indexOf(evt.target) == -1) {
			transformer.nodes([]);
		}
	}
	//console.log(transformer.nodes()[0])

	if (transformer.nodes().length > 0) {
		actualXPropText.show();
		actualYPropText.show();
		let box = transformer.nodes()[0];
		let finalX = 0;
		let finalY = 0;
		if (box.exportibleType === 'object' || box.exportibleType === 'car') {
			transformer.rotationSnapTolerance(5);
		} else {
			transformer.rotationSnapTolerance(45);
		}
		switch (box.exportibleType) {
			case 'box':
				let boxDetails = getExportedBox(box);
				finalX = boxDetails.x;
				finalY = boxDetails.y;
				break;
			case 'prop':
				let propDetails = getExportedProp(box);
				finalX = propDetails.extra.x;
				finalY = propDetails.extra.y;
				break;
			case 'building':
				let buildDetails = getExportedBuilding(box);
				finalX = buildDetails.position[0];
				finalY = buildDetails.position[1];
				break;
			case 'car':
				let carDetails = getExportedCar(box);
				finalX = carDetails.x;
				finalY = carDetails.y;
				break;
			case 'object':
				let objectDetails = getExportedObject(box);
				finalX = objectDetails.x;
				finalY = objectDetails.y;
				break;
		}
		actualXPropText.text(finalX);
		actualYPropText.text(finalY);
	} else {
		actualXPropText.hide();
		actualYPropText.hide();
	}

	const clickX = (evt.evt.layerX - map.x()) / gridLayer.scaleX() / map.trueProps.ratio;
	const clickY = (evt.evt.layerY - map.y()) / gridLayer.scaleX() / map.trueProps.ratio;
	const finalCursorX = floorToGrid(clickX);
	const finalCursorY = floorToGrid(clickY);
	if (currentBox !== null && (roundToGrid(currentBox.width()) == 0 || roundToGrid(currentBox.height()) == 0)) {
		currentBox.destroy();
	}
	currentBox = null;
	switch (window.selectedTool) {
		case 'makeWall':
			let wallBox = createBox('wall', finalCursorX, finalCursorY);
			wallGroup.add(wallBox);
			currentBox = wallBox;
			break;
		case 'makeWindow':
			let windowBox = createBox('window', finalCursorX, finalCursorY);
			windowGroup.add(windowBox);
			currentBox = windowBox;
			break;
		case 'makeFloor':
			let floorBox = createBox('floor', finalCursorX, finalCursorY);
			floorGroup.add(floorBox);
			currentBox = floorBox;
			break;

		default:
			break;
	}
});
const resizeMap = (prop, dim) => {
	let size = dim * HARD_GRID_SIZE;
	if (prop === 'width') {
		MAP_WIDTH = size;
		//map.width(size);
	} else if (prop === 'height') {
		MAP_HEIGHT = size;
		//map.height(size);
	}
	//gridLayer.children[0].destroyChildren();
	//gridLayer.children[0].removeChildren();
	gridLayer.destroyChildren();
	gridLayer.removeChildren();
	gridLayer.add(generateGrid());
	gridLayer.cache();
}
const fullResizeMap = (width, height) => {
	let actualWidth = width * HARD_GRID_SIZE;
	let actualHeight = height * HARD_GRID_SIZE;
	MAP_WIDTH = actualWidth;
	MAP_HEIGHT = actualHeight;
	//gridLayer.children[0].destroyChildren();
	//gridLayer.children[0].removeChildren();
	gridLayer.destroyChildren();
	gridLayer.removeChildren();
	gridLayer.add(generateGrid());
	gridLayer.cache();
}
const fixBoxTopCorner = (box, isLeft, isAbove) => {
	/*
	initially, the top left corner of the box (a) will be the top left of the square the cursor (c) is in

	+--a--+
	|  |c |
	+--+--+
	fig 1

	if the cursor goes to the left of this square, the top left corner would stay where it is

	+--a--+
	|c |  |
	+--+--+
	fig 2

	this means that the box will no longer contain the original square you started clicking in
	to fix this, we need to move the top left here:

	+--+--a
	|c |  |
	+--+--+
	fig 3

	this function does this moving if needed
	the property `leftCorner` is true if the top corner is the left corner of the box (like figs 1 and 2),
	and false if the top corner is the right corner of the box (like fig 3)

	all the same logic also applies on the y axis, but with the property `topCorner`
	*/
	if (isLeft && box.leftCorner) {
		box.x(box.x() + GRID_SIZE);
		box.leftCorner = false;
	}
	if (!isLeft && !box.leftCorner) {
		box.x(box.x() - GRID_SIZE);
		box.leftCorner = true;
	}
	if (isAbove && box.topCorner) {
		box.y(box.y() + GRID_SIZE);
		box.topCorner = false;
	}
	if (!isAbove && !box.topCorner) {
		box.y(box.y() - GRID_SIZE);
		box.topCorner = true;
	}
}
map.on('mousemove', function (evt) {
	const clickX = (evt.evt.layerX - map.x()) / gridLayer.scaleX() / map.trueProps.ratio;
	const clickY = (evt.evt.layerY - map.y()) / gridLayer.scaleX() / map.trueProps.ratio;
	const boxX = currentBox?.attrs?.x || 0;
	const boxY = currentBox?.attrs?.y || 0;
	const isLeft = clickX < boxX;
	const isAbove = clickY < boxY;

	if (currentBox) fixBoxTopCorner(currentBox, isLeft, isAbove);

	const finalCursorX = (isLeft ? floorToGrid : ceilToGrid)(clickX);
	const finalCursorY = (isAbove ? floorToGrid : ceilToGrid)(clickY);
	switch (window.selectedTool) {
		case 'makeWall':
		case 'makeWindow':
		case 'makeFloor':
			if (currentBox == null) break;
			currentBox.width(finalCursorX - currentBox.x());
			currentBox.height(finalCursorY - currentBox.y());
			break;

		default:
			break;
	}
});

function makeTextEditable(textElement, mode = 'double', onFinish = () => { }, onInput = () => { }) {
	let singleEvents = 'click tap';
	let doubleEvents = 'dblclick dbltap';
	let events = '';
	if (mode === 'double') {
		events = doubleEvents;
	} else if (mode === 'single') {
		events = singleEvents;
	}
	textElement.on(events, () => {
		let scaleX = textElement.getAbsoluteScale().x;
		let scaleY = textElement.getAbsoluteScale().y;
		// hide text node and transformer:
		textElement.hide();

		// create textarea over canvas with absolute position
		// first we need to find position for textarea
		// how to find it?

		// at first lets find position of text node relative to the stage:
		var textPosition = textElement.absolutePosition();

		// so position of textarea will be the sum of positions above:
		var areaPosition = {
			x: stage.container().offsetLeft + textPosition.x,
			y: stage.container().offsetTop + textPosition.y,
		};

		// create textarea and style it
		var inputElement = document.createElement('div');
		document.body.appendChild(inputElement);

		inputElement.addEventListener('focus', () => {
			const range = document.createRange();
			const selection = window.getSelection();

			range.selectNodeContents(inputElement);
			range.collapse(false);

			selection.removeAllRanges();
			selection.addRange(range);
		});

		inputElement.addEventListener('input', () => {
			onInput(inputElement.innerText)
		});

		// apply many styles to match text on canvas as close as possible
		// remember that text rendering on canvas and on the inputElement can be different
		// and sometimes it is hard to make it 100% the same. But we will try...
		inputElement.contentEditable = 'plaintext-only';
		inputElement.classList.add('innerText');
		inputElement.innerText = textElement.text();
		inputElement.style.top = areaPosition.y + 'px';
		inputElement.style.left = areaPosition.x + 'px';
		inputElement.style.width = textElement.width() - textElement.padding() * 2 + 'px';
		inputElement.style.height =
			textElement.height() - textElement.padding() * 2 + 5 + 'px';
		inputElement.style.fontSize = textElement.fontSize() * scaleY + 'px';
		inputElement.style.letterSpacing = textElement.letterSpacing() + 'px';
		inputElement.style.fontWeight = textElement.fontStyle();
		inputElement.style.lineHeight = textElement.lineHeight();
		inputElement.style.fontFamily = textElement.fontFamily();
		inputElement.style.textAlign = textElement.align();
		inputElement.style.color = textElement.fill();
		var transform = '';

		var px = 0;
		// also we need to slightly move inputElement on firefox
		// because it jumps a bit
		var isFirefox =
			navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		if (isFirefox) {
			px += 2 + Math.round(textElement.fontSize() / 20);
		}
		transform += 'translateY(-' + px + 'px)';

		inputElement.style.transform = transform;

		// reset height
		inputElement.style.height = 'auto';
		// after browsers resized it we can set actual value
		inputElement.style.height = inputElement.scrollHeight + 3 + 'px';

		inputElement.focus();

		function removeInputElement() {
			inputElement.parentNode.removeChild(inputElement);
			window.removeEventListener('click', handleOutsideClick);
			textElement.show();
		}

		function setInputElementWidth(newWidth) {
			if (!newWidth) {
				// set width for placeholder
				newWidth = textElement.placeholder.length * textElement.fontSize();
			}
			// some extra fixes on different browsers
			var isSafari = /^((?!chrome|android).)*safari/i.test(
				navigator.userAgent
			);
			var isFirefox =
				navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
			if (isSafari || isFirefox) {
				newWidth = Math.ceil(newWidth);
			}

			var isEdge =
				document.documentMode || /Edge/.test(navigator.userAgent);
			if (isEdge) {
				newWidth += 1;
			}
			//newWidth -= textElement.padding() * scaleX;
			inputElement.style.width = newWidth + 'px';
		}

		inputElement.addEventListener('keydown', function (e) {
			// hide on enter
			// but don't hide on shift + enter
			if (e.keyCode === 13 && !e.shiftKey) {
				textElement.text(inputElement.innerText);
				onFinish(inputElement.innerText);
				removeInputElement();
			}
			// on esc do not set value back to node
			if (e.keyCode === 27) {
				removeInputElement();
			}
		});

		inputElement.addEventListener('keydown', function (e) {
			scaleX = textElement.getAbsoluteScale().x;
			scaleY = textElement.getAbsoluteScale().y;
			setInputElementWidth(textElement.width() * scaleX);
			inputElement.style.height = 'auto';
			inputElement.style.height =
				(textElement.height()) * scaleY + 'px';
		});
		setInputElementWidth(textElement.width() * scaleX);
		inputElement.style.height = 'auto';
		inputElement.style.height =
			(textElement.height()) * scaleY + 'px';

		function handleOutsideClick(e) {
			if (e.target !== inputElement) {
				textElement.text(inputElement.innerText);
				removeInputElement();
			}
		}
		setTimeout(() => {
			window.addEventListener('click', handleOutsideClick);
		});
	});
}

// makeTextEditable(mapText,
// 	(t) => {
// 		console.log('Finished');
// 		console.log(t);
// 	}, (t) => {
// 		console.log('Changed');
// 		console.log(t);
// 	})

map.on('mouseup', function (evt) {
	if (evt.evt.button === 1) {
		// ending middle mouse moving; go back to previous tool
		window.selectedTool = toolBeforeMiddleMouse;
		groupButtons[toolList.indexOf(window.selectedTool)].select();
		return;
	}

	const clickX = (evt.evt.layerX - map.x()) / gridLayer.scaleX() / map.trueProps.ratio;
	const clickY = (evt.evt.layerY - map.y()) / gridLayer.scaleX() / map.trueProps.ratio;
	switch (window.selectedTool) {
		case 'makeWall':
			// currentBox.width = currentBox.x + clickX;
			// currentBox.height = currentBox.y + clickY;
			break;

		default:
			break;
	}
	if (currentBox !== null) {
		// currentBox.x(currentBox.x() + currentBox.offsetX());
		// currentBox.y(currentBox.y() + currentBox.offsetY());
		if (roundToGrid(currentBox.width()) == 0 || roundToGrid(currentBox.height()) == 0) {
			currentBox.destroy();
		}
	}
	currentBox = null;
});
map.on('mouseleave', function (evt) {
	// if (currentBox !== null && ((currentBox.width() < GRID_SIZE / 2) || (currentBox.width() < GRID_SIZE / 2))) {
	// 	currentBox.destroy();
	// }
	// currentBox = null;
});
map.add(gridLayer, backgroundLayer, mapLayer, roofLayer);
const createBox = (type, x, y) => {
	let types = ['wall', 'window', 'floor'];
	if (types.indexOf(type) == -1) return;
	let boxColor = COLORS[type];
	const box = new Konva.Rect({
		x,
		y,
		width: 1,
		height: 1,
		fill: hexOpacity(boxColor, 80),
		stroke: boxColor,
		strokeWidth: 2,
		name: 'selectable'
	});
	box.exportibleType = 'box';
	box.leftCorner = true; // see note in fixBoxTopCorner
	box.topCorner = true; // ditto
	box.on('dragmove', () => {
		box.x(roundToGrid(box.x()));
		box.y(roundToGrid(box.y()));

		if (transformer.nodes()[0] === box) {
			actualXPropText.show();
			actualYPropText.show();
			let box = transformer.nodes()[0];
			let details = getExportedBox(box);
			actualXPropText.text(details.x);
			actualYPropText.text(details.y);
		} else {
			actualXPropText.hide();
			actualYPropText.hide();
		}
	});
	box.on('mousedown', () => {
		switch (selectedTool) {
			case 'cursor':
				transformer.resizeEnabled(true);
				transformer.nodes([box]);
				break;
			case 'delete':
				box.destroy();
				transformer.nodes([]);
				break;
			default:
				break;
		}
	});
	box.on('transform', function () {
		const newWidth = box.width() * box.scaleX();
		const newHeight = box.height() * box.scaleY();
		box.width(newWidth);
		box.height(newHeight);
		box.scaleX(1);
		box.scaleY(1);
	});
	box.on('transformend', function () {
		box.width(roundToGrid(box.width()));
		box.height(roundToGrid(box.height()));
		box.x(roundToGrid(box.x()));
		box.y(roundToGrid(box.y()));
	});

	if (selectedTool === 'cursor') {
		box.draggable(true);
	}

	box.createClone = (group) => {
		let clone = createBox(type, box.x(), box.y());
		clone.width(box.width());
		clone.height(box.height());
		group.add(clone);
	}
	return box;
}
const propTypes = {};
const propList = [];
const objectList = [];

const searchProp = (term, limit = 5) => {
	let results = [];
	propList.forEach(prop => {
		if (prop.name.indexOf(term) > -1) {
			if (results.length >= limit) return;
			results.push(prop);
		}
	});
	results.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
	results.sort((a, b) => {
		return b.favorite - a.favorite;
	});
	return results;
}

const searchObject = (term, limit = 5) => {
	let results = [];
	let type = '';
	switch (term.charAt(0)) {
		case '@':
			type = 'building';
			break;
		case '#':
			type = 'car';
			break;
		case '$':
			type = 'resource';
			break;
	}
	term = term.replace(/[@#$]/g, '');
	objectList.forEach(prop => {
		if (type !== '') {
			if (prop.name.indexOf(term) > -1 && prop.type == type) {
				if (results.length >= limit) return;
				results.push(prop);
			}
		} else {
			if (prop.name.indexOf(term) > -1) {
				if (results.length >= limit) return;
				results.push(prop);
			}
		}
	});
	results.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
	results.sort((a, b) => {
		return b.favorite - a.favorite;
	});
	return results;
}

const addPropType = (type, url, isLocal, properties) => {
	propList.push({ name: type, favorite: false, url });
	propTypes[type] = {
		url, isLocal, properties
	}
}
const addLocalProp = (type, scale) => {
	addPropType(type, `./client/props/${type}.png`, true, { scale });
};

addLocalProp('chest', 0.8);
addLocalProp('bench');
addLocalProp('barrier');
addLocalProp('ropebarrier');
addLocalProp('basketballnet');
addLocalProp('trash', 1.34);
addLocalProp('chair');
addLocalProp('table');
addLocalProp('couch', 1.3);
addLocalProp('junglecouch', 1.3);
addLocalProp('desk', 1.2);
addLocalProp('hay', 0.85);
addLocalProp('silo');
addLocalProp('corn', 1.9);
addLocalProp('counter');
addLocalProp('metalbench');

addLocalProp('planks', 1);
addLocalProp('brickpile');
addLocalProp('steel');
addLocalProp('container');
addLocalProp('dumpster');
addLocalProp('specialdumpster');
addLocalProp('crate');
addLocalProp('redcontainer');
addLocalProp('bluecontainer');
addLocalProp('marble');
addLocalProp('museumcase');
addLocalProp('largeamber');
addLocalProp('museumcounter');
addLocalProp('rack');
addLocalProp('trikeskull');
// todo add rotation
const createProp = (group, type, x, y, rotation = 0) => {
	let propInfo = propTypes[type];
	Konva.Image.fromURL(propInfo.url, function (image) {
		let finalProp = new Konva.Group({
			x: x,
			y: y,
			name: 'selectable'
		});
		box.exportibleType = 'prop';
		finalProp.propType = type;
		finalProp.grouped = true;
		image.setAttrs({
			scaleX: propInfo.properties.scale,
			scaleY: propInfo.properties.scale
		})
		let boxWidth = ceilToGrid(image.width() * image.scaleX());
		let boxHeight = ceilToGrid(image.height() * image.scaleX());
		image.setAttrs({
			offsetX: (image.width()) / 2,
			offsetY: (image.height()) / 2,
			x: boxWidth / 2,
			y: boxHeight / 2
		});
		const box = new Konva.Rect({
			width: boxWidth,
			height: boxHeight,
			fill: hexOpacity('#DFD91D', 80),
			stroke: '#DFD91D',
			strokeWidth: 2,
		});
		finalProp.setAttrs({
			x: finalProp.x() - boxWidth / 2,
			y: finalProp.y() - boxHeight / 2,
			width: boxWidth,
			height: boxHeight
		});
		finalProp.add(box);
		finalProp.add(image);
		finalProp.on('dragmove', () => {
			finalProp.x(roundToGrid(finalProp.x()));
			finalProp.y(roundToGrid(finalProp.y()));

			if (transformer.nodes()[0] === finalProp) {
				actualXPropText.show();
				actualYPropText.show();
				let box = transformer.nodes()[0];
				let details = getExportedProp(box);
				actualXPropText.text(details.extra.x);
				actualYPropText.text(details.extra.y);
			} else {
				actualXPropText.hide();
				actualYPropText.hide();
			}
		});
		rotateAroundCenter(finalProp, rotation);
		finalProp.leftCorner = true; // see note in fixBoxTopCorner
		finalProp.topCorner = true; // ditto
		finalProp.on('mousedown', () => {
			switch (selectedTool) {
				case 'cursor':
					transformer.resizeEnabled(false);
					transformer.nodes([finalProp]);
					break;
				case 'delete':
					finalProp.destroy();
					transformer.nodes([]);
					break;
				default:
					break;
			}
		});
		finalProp.on('transformend', function () {
			finalProp.x(roundToGrid(finalProp.x()));
			finalProp.y(roundToGrid(finalProp.y()));
		});
		finalProp.cache();

		if (selectedTool === 'cursor') {
			finalProp.draggable(true);
		}

		finalProp.createClone = (newGroup) => {
			createProp(newGroup, type, x, y, rotation);
		}
		group.add(finalProp);
	});
}

const createBuilding = (type, x, y, rotation = 0, actualImage = '', hasRoof = true) => {
	let width = houseCreationDetails[type].width * HARD_GRID_SIZE;
	let height = houseCreationDetails[type].height * HARD_GRID_SIZE;
	let finalProp = new Konva.Group({
		x: x,
		y: y,
		name: 'selectable'
	});
	finalProp.replaceImage = actualImage === '' ? undefined : actualImage;
	if (actualImage === '') {
		actualImage = type;
	}
	finalProp.exportibleType = 'building';
	finalProp.grouped = true;
	finalProp.hasRoof = hasRoof;
	finalProp.buildingType = type;
	let base = new Konva.Image({});
	if (type !== 'cherryblossoms' && type !== 'soccergoal') {
		setLoadedImage(base, `./client/builds/${type}.png`);
	}
	let roof = new Konva.Image({});
	if (hasRoof) {
		setLoadedImage(roof, `./client/builds/${actualImage}roof.png`);
	}
	const box = new Konva.Rect({
		width: width,
		height: height,
		fill: hexOpacity('#DFD91D', 80),
		stroke: '#DFD91D',
		strokeWidth: 2,
	});
	finalProp.setAttrs({
		x: finalProp.x() - width / 2,
		y: finalProp.y() - height / 2,
		width,
		height
	});
	finalProp.add(box);
	if (type !== 'cherryblossoms' && type !== 'soccergoal') {
		finalProp.add(base);
	}
	if (hasRoof) {
		finalProp.add(roof);
	}

	finalProp.on('dragmove', () => {
		finalProp.x(roundToGrid(finalProp.x()));
		finalProp.y(roundToGrid(finalProp.y()));

		if (transformer.nodes()[0] === finalProp) {
			actualXPropText.show();
			actualYPropText.show();
			let box = transformer.nodes()[0];
			let details = getExportedBuilding(box);
			actualXPropText.text(details.position[0]);
			actualYPropText.text(details.position[1]);
		} else {
			actualXPropText.hide();
			actualYPropText.hide();
		}
	});
	rotateAroundCenter(finalProp, rotation);
	finalProp.leftCorner = true; // see note in fixBoxTopCorner
	finalProp.topCorner = true; // ditto
	finalProp.on('mousedown', () => {
		switch (selectedTool) {
			case 'cursor':
				transformer.resizeEnabled(false);
				transformer.nodes([finalProp]);
				break;
			case 'delete':
				finalProp.destroy();
				transformer.nodes([]);
				break;
			default:
				break;
		}
	});
	finalProp.on('transformend', function () {
		finalProp.x(roundToGrid(finalProp.x()));
		finalProp.y(roundToGrid(finalProp.y()));
	});
	finalProp.cache();

	if (selectedTool === 'cursor') {
		finalProp.draggable(true);
	}

	finalProp.createClone = (newGroup) => {
		let clone = createBuilding(type, x, y, rotation, actualImage, hasRoof);
		newGroup.add(clone);
	}

	return finalProp;
}

const createCar = (group, type, x, y, angle = 0) => {
	Konva.Image.fromURL(`./client/vehicles/${type}.png`, function (image) {
		let finalProp = new Konva.Group({
			x: x,
			y: y,
			name: 'selectable',
		});
		finalProp.exportibleType = 'car';
		finalProp.carType = type;
		finalProp.rawCoords = true;
		finalProp.grouped = true;
		let boxWidth = ceilToGrid(image.width() * image.scaleX());
		let boxHeight = ceilToGrid(image.height() * image.scaleX());
		image.setAttrs({
			offsetX: (image.width()) / 2,
			offsetY: (image.height()) / 2,
			x: boxWidth / 2,
			y: boxHeight / 2,
			scale: { x: 0.5, y: 0.5 }
		});
		const box = new Konva.Rect({
			width: boxWidth,
			height: boxHeight,
			x: boxWidth / 2 * 0.5,
			y: boxHeight / 2 * 0.5,
			fill: hexOpacity('#DFD91D', 80),
			stroke: '#DFD91D',
			strokeWidth: 2,
			scale: { x: 0.5, y: 0.5 }
		});
		finalProp.setAttrs({
			x: finalProp.x() - boxWidth / 2,
			y: finalProp.y() - boxHeight / 2,
			width: boxWidth,
			height: boxHeight
		});
		finalProp.add(image);
		finalProp.on('dragmove', () => {
			if (transformer.nodes()[0] === finalProp) {
				actualXPropText.show();
				actualYPropText.show();
				let box = transformer.nodes()[0];
				let details = getExportedCar(box);
				actualXPropText.text(details.x)
				actualYPropText.text(details.y)
			} else {
				actualXPropText.hide();
				actualYPropText.hide();
			}
		});
		rotateAroundCenter(finalProp, angle * 180 / Math.PI);
		finalProp.leftCorner = true; // see note in fixBoxTopCorner
		finalProp.topCorner = true; // ditto
		finalProp.on('mousedown', () => {
			switch (selectedTool) {
				case 'cursor':
					transformer.resizeEnabled(false);
					transformer.nodes([finalProp]);
					break;
				case 'delete':
					finalProp.destroy();
					transformer.nodes([]);
					break;
				default:
					break;
			}
		});
		finalProp.cache();

		if (selectedTool === 'cursor') {
			finalProp.draggable(true);
		}

		finalProp.createClone = (newGroup) => {
			createCar(newGroup, type, x, y, angle);
		}
		group.add(finalProp);
	});
}

const createObject = (group, type, x, y, angle = 0, radius = 100) => {
	Konva.Image.fromURL(`./client/objects/${type}.png`, function (image) {
		let finalProp = new Konva.Group({
			x: x,
			y: y,
			name: 'selectable',
		});
		finalProp.exportibleType = 'object';
		finalProp.objectType = type;
		finalProp.radius = radius;
		finalProp.rawCoords = true;
		finalProp.grouped = true;
		let boxWidth = ceilToGrid(image.width() * image.scaleX());
		let boxHeight = ceilToGrid(image.height() * image.scaleX());

		let magicScale = 0.0065;
		let inGameScale = (radius - 15) * 2;
		let fullScale = magicScale * inGameScale;

		image.setAttrs({
			offsetX: (image.width()) / 2,
			offsetY: (image.height()) / 2,
			x: boxWidth / 2,
			y: boxHeight / 2,
			scale: { x: fullScale, y: fullScale }
		});
		const box = new Konva.Rect({
			width: boxWidth,
			height: boxHeight,
			//x: boxWidth / 2 * fullScale,
			//y: boxHeight / 2 * fullScale,
			fill: hexOpacity('#DFD91D', 80),
			stroke: '#DFD91D',
			strokeWidth: 2,
			scale: { x: fullScale, y: fullScale }
		});
		finalProp.setAttrs({
			x: finalProp.x() - boxWidth / 2,
			y: finalProp.y() - boxHeight / 2,
			width: boxWidth,
			height: boxHeight
		});
		finalProp.add(image);
		finalProp.on('dragmove', () => {
			if (transformer.nodes()[0] === finalProp) {
				actualXPropText.show();
				actualYPropText.show();
				let box = transformer.nodes()[0];
				let details = getExportedObject(box);
				actualXPropText.text(details.x);
				actualYPropText.text(details.y);
			} else {
				actualXPropText.hide();
				actualYPropText.hide();
			}
		});
		rotateAroundCenter(finalProp, angle * 180 / Math.PI);
		finalProp.leftCorner = true; // see note in fixBoxTopCorner
		finalProp.topCorner = true; // ditto
		finalProp.on('mousedown', () => {
			switch (selectedTool) {
				case 'cursor':
					transformer.resizeEnabled(false);
					transformer.nodes([finalProp]);
					break;
				case 'delete':
					finalProp.destroy();
					transformer.nodes([]);
					break;
				default:
					break;
			}
		});
		finalProp.cache();

		if (selectedTool === 'cursor') {
			finalProp.draggable(true);
		}

		finalProp.createClone = (newGroup) => {
			createObject(newGroup, type, x, y, angle, radius);
		}
		group.add(finalProp);
	});
}
// mapGroup.add(chest);

const updateLinked = (obj, id, ratio) => {
	let textPosition = obj.absolutePosition();
	let areaPosition = {
		x: stage.container().offsetLeft + textPosition.x,
		y: stage.container().offsetTop + textPosition.y,
	};

	let inputElement = document.getElementById(id);

	inputElement.style.visibility = obj.visible() ? 'visible' : 'hidden';
	inputElement.style.top = areaPosition.y + 'px';
	inputElement.style.left = areaPosition.x + 'px';
	inputElement.style.width = obj.width() * ratio + 'px';
	inputElement.style.height = obj.height() * ratio + 'px';
	inputElement.style.fontSize = 26 * ratio + 'px';
}

//! OTHER
function resize() {
	let fullscreen = window.innerHeight === screen.height;

	let containerWidth = window.innerWidth;
	let ratio = containerWidth / fullWidth;

	let containerHeight = window.innerHeight;
	let scaleY = containerHeight / fullHeight;
	if (!fullscreen) scaleY = containerHeight / semiHeight;
	ratio = scaleY = Math.min(ratio, scaleY);

	stage.width(containerWidth);
	stage.height(containerHeight);
	stage.scale({ x: ratio, y: ratio });

	header.width(containerWidth / ratio);
	leftBar.height(containerHeight / ratio - 100);

	let mapSize = semiHeight - 100;
	//if (fullscreen) mapSize = fullHeight - 100;
	map.container().style.top = `${100 * ratio}px`;
	map.container().style.left = `${525 * ratio}px`;
	map.width(mapSize * ratio);
	map.height(mapSize * ratio);
	map.scaleX(ratio);
	map.scaleY(ratio);

	//console.log(map.trueProps.x * (ratio / map.trueProps.ratio), mapLayer.scaleX())
	map.x(map.trueProps.x * (ratio / map.trueProps.ratio));
	map.y(map.trueProps.y * (ratio / map.trueProps.ratio));

	map.trueProps.x = map.x();
	map.trueProps.y = map.y();
	map.trueProps.scale = map.scaleX();
	map.trueProps.ratio = ratio;

	updateLinked(searchBar, 'propSearch', ratio);
	updateLinked(backgroundUrlBar, 'backgroundUrl', ratio);
	updateLinked(backgroundOpacityBar, 'backgroundOpacity', ratio);
	updateLinked(roofUrlBar, 'roofUrl', ratio);
	updateLinked(roofopacityBar, 'roofOpacity', ratio);

	// map.getLayers().forEach(layer => {
	// 	layer.canvas.setWidth(mapSize * scaleX);
	// 	layer.canvas.setHeight(mapSize * scaleX);
	// });
}
/*
450    5
180    x
x = (180 * 5) / 450
0.5    200
1       x
x = 200 * 2 / 0.5
! lifesaver
*/
resize();
window.addEventListener('resize', resize);
