$(function() {
    var counter   = $("#contar"),//document.getElementById("contar"),
    formPc     = $("#pchoose"),//document.getElementById("pchoose"),
    rock       = $("#rock"),//document.getElementById("pedra"),
    paper      = $("#paper"),//document.getElementById("papel"),
    scissors   = $("#scissors"),//document.getElementById("tesoura"),
    choose     = $("#choose"),//document.getElementById("choose"),
    win        = $("#win"),//document.getElementById("win"),
    lose       = $("#lose"),//document.getElementById("lose"),
    empate     = $("#draw"),//document.getElementById("draw"),
    resetar    = $("#reset"),//document.getElementById("reset"),
    back       = $("#jogar"),//document.getElementById("jogar"),
    vitoria    = 0,
    derrota    = 0;
    

var rockObj = new Weapon('rock'),
    paperObj = new Weapon('paper'),
    scissorsObj = new Weapon('scissors'),
    gameplayObj = new Gameplay([rockObj, paperObj, scissorsObj]);

rockObj.addWeakerWeapon(scissorsObj);
rockObj.addStrongerWeapon(paperObj);

scissorsObj.addWeakerWeapon(paperObj);
scissorsObj.addStrongerWeapon(rockObj);

paperObj.addWeakerWeapon(rockObj);
paperObj.addStrongerWeapon(scissorsObj);

var weaponsObj = [rockObj, paperObj, scissorsObj];


resetar.click(function(){
  formPc.reset();
  counter.reset();

});

function winDisappear(){
    choose.css("display", "none");
    win.css("display", "none");
    lose.css("display", "none");
    empate.css("display", "none");
  }

function delay(){
  setTimeout(function(){
    winDisappear()
  },650);
}

function showWin(){
  choose.css("display","block");
  win.css("display","block");
  delay();
}

function showDraw(){
  choose.css("display","block");
  empate.css("display","block");
  delay();
}

function showLose(){
  choose.css("display","block");
  lose.css("display","block");
  delay();
}

var getWeaponByName = function(weapon) {
    return weapon.name == this
}


var compare = function(weapon) {

    weapon = gameplayObj.availableWeapons.find(getWeaponByName, weapon);
    
    var computerWeapon = gameplayObj.getRandomWeapon();

    var result = weapon.isWeaponStronger(computerWeapon);


    formPc.find('input[name=pc]').val(computerWeapon.name);
    var inputValue = counter.find('input[name=' + result.toLowerCase() +']').val();
    counter.find('input[name=' + result.toLowerCase() +']').val(+inputValue + 1);

    showResultPopUp(result);
 
}

var showResultPopUp = function (result) {
    if (result == "Won") {
        showWin();
    } else if (result == "Lost") {
        showLose();
    } else if (result == "Draw") {
        showDraw();
    }
}

rock.click(function(){
    compare("rock");
});
paper.click(function(){
  compare("paper");
});

scissors.click(function(){
  compare("scissors");
});

                                       

})

