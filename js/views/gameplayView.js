function GameplayView(model, elements) {
    this._model = model;
    this._elements = elements;

    this.p1Choice = new Event(this);
    this.p2Choice = new Event(this);
    this.gameModeChoice = new Event(this);

    var _self = this;

    /*this._elements.rock.click(function () {
        _self.p1Choice.notify({
            weapon: 'rock',
            gameMode: _self._model._gameMode
        });
    });

    this._elements.paper.click(function () {
        _self.p1Choice.notify({
            weapon: 'paper',
            gameMode: _self._model._gameMode
        });
    });

    this._elements.scissors.click(function () {
        _self.p1Choice.notify({
            weapon: 'scissors',
            gameMode: _self._model._gameMode
        });
    });*/

    this._elements.hvsh.click(function () {
        _self.gameModeChoice.notify({
            gameMode: 'hvsh'
        });
    });

    this._elements.hvsm.click(function () {
        _self.gameModeChoice.notify({
            gameMode: 'hvsm'
        });
    });

    this._elements.mvsm.click(function () {
        _self.gameModeChoice.notify({
            gameMode: 'mvsm'
        });
    });

    addEventListener("keydown", function (e) {
        var weaponStr = '';
        switch(e.keyCode) {
            case 65:
                weaponStr = 'rock'
                _self.p1ChoiceNotify(weaponStr);
                break;
            case 83:
                weaponStr = 'paper'
                _self.p1ChoiceNotify(weaponStr);
                break;
            case 68:
                weaponStr = 'scissors'
                _self.p1ChoiceNotify(weaponStr);
                break; 
            case 74:
                weaponStr = 'rock'
                _self.p2ChoiceNotify(weaponStr);
                break;        
            case 75:
                weaponStr = 'paper'
                _self.p2ChoiceNotify(weaponStr);
                break;    
            case 76:
                weaponStr = 'scissors'
                _self.p2ChoiceNotify(weaponStr);
                break;    

        }
        _self.p1Choice.notify({
            weapon: weaponStr,
            gameMode: _self._model._gameMode
        });

    }, false);


    

}

GameplayView.prototype = {

    setP2Choice: function() {
        this._elements.formPc.find('input[name=pc]').val(this._model._p2Choice.name);
    },

    updateMatchValues: function(result) {
        var inputValue = this._elements.counter.find('input[name=' + result.toLowerCase() +']').val();
        this._elements.counter.find('input[name=' + result.toLowerCase() +']').val(+inputValue + 1);
    },

    winDisappear: function(){
        this._elements.choose.css("display", "none");
        this._elements.win.css("display", "none");
        this._elements.lose.css("display", "none");
        this._elements.draw.css("display", "none");
    },

    delay: function(){
        var _self = this;
        setTimeout(function(){
            _self.winDisappear()
        },650);
    },

    showWin: function(){
        this._elements.choose.css("display","block");
        this._elements.win.css("display","block");
        this.delay();
    },

    showDraw: function(){
        this._elements.choose.css("display","block");
        this._elements.draw.css("display","block");
        this.delay();
    },

    showLose: function(){
        this._elements.choose.css("display","block");
        this._elements.lose.css("display","block");
        this.delay();
    },

    showResultPopUp: function (result) {
        if (result == "Won") {
            this.showWin();
        } else if (result == "Lost") {
            this.showLose();
        } else if (result == "Draw") {
            this.showDraw();
        }
    },

    showResult: function(result) {
        this.setP2Choice();
        this.updateMatchValues(result);
        this.showResultPopUp(result);
    },

    p1ChoiceNotify: function(weaponStr) {
        this.p1Choice.notify({
            weapon: weaponStr,
            gameMode: this._model._gameMode
        });
    },

    p2ChoiceNotify: function(weaponStr) {
        this.p2Choice.notify({
            weapon: weaponStr,
            gameMode: this._model._gameMode
        });
    },

};