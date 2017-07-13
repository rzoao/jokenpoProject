$(function() {
    var counter   = $("#contar"),
    formPc     = $("#pchoose"),
    rock       = $("#rock"),
    paper      = $("#paper"),
    scissors   = $("#scissors"),
    choose     = $("#choose"),
    win        = $("#win"),
    lose       = $("#lose"),
    empate     = $("#draw"),
    back       = $("#jogar"),
    hvsh       = $("#human-vs-human"),
    hvsm       = $("#human-vs-machine"),
    mvsm       = $("#machine-vs-machine"),
    vitoria    = 0,
    derrota    = 0;
    elements = {
        counter: counter, 
        formPc: formPc, 
        rock: rock,
        paper: paper, 
        scissors: scissors, 
        choose: choose, 
        win: win, 
        lose: lose, 
        draw: empate,   
        back: back,
        hvsh : hvsh,
        hvsm : hvsm,
        mvsm : mvsm,
    };
 

    var rockObj = new WeaponModel('rock', [], []),
        paperObj = new WeaponModel('paper', [rockObj], []),
        scissorsObj = new WeaponModel('scissors', [paperObj], [rockObj]),
        weaponsObj = [rockObj, paperObj, scissorsObj];

    rockObj.addWeakerWeapon(scissorsObj);
    rockObj.addStrongerWeapon(paperObj);

    paperObj.addStrongerWeapon(scissorsObj);

    var gameplayModel = new GameplayModel(weaponsObj);
    var gameplayView = new GameplayView(gameplayModel, elements);   
    var gameplayController = new GameplayController(gameplayModel, gameplayView);




    // Create the canvas
    var canvas = $("#canvas-game")[0];
    var ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 470;

    // Background image
    var bgReady = false;
    var bgImage = new Image();
    bgImage.onload = function () {
        bgReady = true;
    };
    bgImage.src = "images/background.gif";

    // Game objects
    var p1 = {  
        x: 0,
        y: 0
    };
    var p2 = {
        x: 0,
        y: 0
    };

    
    var render = function () {
        if (bgReady) {
            ctx.drawImage(bgImage, 0, 0);
        }



    };

    // Update game objects
    var update = function (modifier) {
       
    };

    // The main game loop
    var main = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000);
        render();

        then = now;

        // Request to do this again ASAP
        requestAnimationFrame(main);
    };

    // Let's play this game!
    var then = Date.now();
    main();

})

