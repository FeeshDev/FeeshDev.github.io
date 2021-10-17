window.onload = () => {
    const game = new GameIO();

    let scene = new game.scene();
    game.mainScene = scene;
    let renderer = new game.renderer();

    renderer.clearScreen = false;
    renderer.c.style.backgroundColor = "#3FBA54";

    let mouse = new game.mouse(renderer);
    let keyboard = new game.keyboard();

    let manager = new uiManager(game);
    let screen = new manager.scene(renderer);
    window.onresize = () => {
        screen.resize();
    }

    let _detailsBox = new game.roundRectangle(20, 20, 400, 200, 20, "#000", 0.2);
    let detailsBox = new manager.dynamicElement(_detailsBox, "bottom", "left");
    screen.addDynamic(detailsBox);

    window.main = manager.popDialog("vertical", "test");

    const loopFunction = () => { }

    function main() {
        loopFunction();

        game.update();
        manager.update(1000 / 60, mouse);
        renderer.clear();
        renderer.render(scene);
        renderer.render(screen.visual);
        requestFrame(main);
    }
    main();
}