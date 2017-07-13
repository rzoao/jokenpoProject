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

})

