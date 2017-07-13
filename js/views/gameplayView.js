function GameplayView(model, elements) {
    this._model = model;
    this._elements = elements;

    this.p1Choice = new Event(this);
    this.p2Choice = new Event(this);
    this.gameModeChoice = new Event(this);
    this.gameOverFlowEnded = new Event(this);

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
        _self.blockButton(_self._elements.mvsm);
        _self.gameModeChoice.notify({
            gameMode: 'mvsm'
        });
    });

    addEventListener("keydown", function (e) {
        if (_self._model._isGameOver)
            return;

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
    }, false);



}

GameplayView.prototype = {

    updateMatchValues: function(result) {
        var inputValue = this._elements.counter.find('input[name=' + result.toLowerCase() +']').val();
        this._elements.counter.find('input[name=' + result.toLowerCase() +']').val(+inputValue + 1);
    },

    blockButton: function(button) {
        button.prop('disabled', true);
    },

    unblockButton: function(button) {
        button.prop('disabled', false);
    },

    closePopUp: function(){
        this._elements.choose.css("display", "none");
        this._elements.win.css("display", "none");
        this._elements.lose.css("display", "none");
        this._elements.draw.css("display", "none");
        this.unblockButton(this._elements.mvsm);
        this._elements.p1.imgReady = false;
        this._elements.p2.imgReady = false;
        
        this.gameOverFlowEnded.notify({
            isGameOver: false
        });
    },

    delay: function(){
        var _self = this;
        setTimeout(function(){
            _self.closePopUp()
        },650);
    },

    showP1Win: function(){
        this._elements.choose.css("display","block");
        this._elements.win.css("display","block");
        this.delay();
    },

    showDraw: function(){
        this._elements.choose.css("display","block");
        this._elements.draw.css("display","block");
        this.delay();
    },

    showP2Win: function(){
        this._elements.choose.css("display","block");
        this._elements.lose.css("display","block");
        this.delay();
    },

    showResultPopUp: function (result) {
        if (result == "Won") {
            this.showP1Win();
        } else if (result == "Lost") {
            this.showP2Win();
        } else if (result == "Draw") {
            this.showDraw();
        }
    },

    showResult: function(result, p1WeaponStr, p2WeaponStr) {
        var _self = this;
        setTimeout(function() {
            _self.updateMatchValues(result);
            _self.showResultPopUp(result);
        }, 1500);
        
    },

    setPlayerImg: function(playerStr, weaponStr) {
        this._elements[playerStr].setImage('images/' + weaponStr + '_' + playerStr + '.png');
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
    }

};