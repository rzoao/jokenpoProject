$(function() {

    //getting html elements
    var canvas = $("#canvas-game")[0];
    var ctx = canvas.getContext("2d");

    var counter   = $("#count"),
    hvsh       = $("#human-vs-human"),
    hvsm       = $("#human-vs-machine"),
    mvsm       = $("#machine-vs-machine"),
    formPc     = $("#pchoose"),
    rock       = $("#rock"),
    paper      = $("#paper"),
    scissors   = $("#scissors"),
    choose     = $("#choose"),
    win        = $("#win"),
    lose       = $("#lose"),
    draw     = $("#draw"),
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
        draw: draw,   
        hvsh : hvsh,
        hvsm : hvsm,
        mvsm : mvsm,
        p1: new Player(0, 0),
        p2: new Player(490, 0),
        canvas: canvas,
        context: ctx
    };
 
    //setting existing weapons
    var rockObj = new WeaponModel('rock', [], []),
        paperObj = new WeaponModel('paper', [rockObj], []),
        scissorsObj = new WeaponModel('scissors', [paperObj], [rockObj]),
        weaponsObj = [rockObj, paperObj, scissorsObj];

    rockObj.addWeakerWeapon(scissorsObj);
    rockObj.addStrongerWeapon(paperObj);

    paperObj.addStrongerWeapon(scissorsObj);


    //creating mvc structure
    var gameplayModel = new GameplayModel(weaponsObj);
    var gameplayView = new GameplayView(gameplayModel, elements);   
    var gameplayController = new GameplayController(gameplayModel, gameplayView);
    
    //set canvas background image
    var bgReady = false;
    var bgImage = new Image();
    bgImage.onload = function () {
        bgReady = true;
    };
    bgImage.src = "images/background.png";
    
    //render loop
    var render = function () {
        if (bgReady) {
           ctx.drawImage(bgImage, 0, 0, 590, 100);
        }

        if (gameplayModel._canDrawImages) {
            if (gameplayView._elements.p1.imgReady) {
                ctx.drawImage(gameplayView._elements.p1.weaponImg, gameplayView._elements.p1.x, gameplayView._elements.p1.y, 100, 100);
            }

            if (gameplayView._elements.p2.imgReady) {
                ctx.drawImage(gameplayView._elements.p2.weaponImg, gameplayView._elements.p2.x, gameplayView._elements.p2.y, 100, 100);
            }
        }
        

    };

    //main function
    var main = function () {
        render();
        requestAnimationFrame(main);
    };

    main();

})

