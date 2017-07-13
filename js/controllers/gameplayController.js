function GameplayController(model, view) {  
    this._model = model;
    this._view = view;

    this.winnerResult = new Event(this);

    var _self = this;

    this._view.p1Choice.attach(function (sender, args) {
        _self.tryToUpdateChoices(args.weapon, args.gameMode);
    });

    this._view.p2Choice.attach(function (sender, args) {
        _self.updateP2Choice(args.weapon);
    });
    
    this._model.choicesSet.attach(function() {
        _self.compareResults();
    })

    this._view.gameModeChoice.attach(function(sender, args) {
        _self.startGame(args.gameMode);
    })

}

GameplayController.prototype = {

    constructor: GameplayController,

    clearWeaponChoices: function() {
        this._model._p1Choice = null;
        this._model._p2Choice = null;
    },

    compareResults: function() {

        var result = this._model._p1Choice.isWeaponStronger(this._model._p2Choice);
        this._view.showResult(result);

        this.clearWeaponChoices();

    },

    updateP1Choice: function(weaponStr) {
        this._model.setP1Choice(weaponStr);
    },

    updateP2Choice: function(weaponStr) {
        this._model.setP2Choice(weaponStr);
    },

    setGameMode: function(gameMode) {
        this._model.setGameMode(gameMode); 
    },

    startGame: function(gameMode) {
        this.setGameMode(gameMode);

        switch(gameMode) {
            case 'hvsh':
                //code block
                break;
            case 'hvsm':
                //code block
                break;
            case 'mvsm':
            var _self = this;
                setTimeout(function() {
                    _self.updateP1Choice(_self._model.getRandomWeapon()._name);
                    _self.updateP2Choice(_self._model.getRandomWeapon()._name);
                }
                , 3000);
                break;
        }
    },

    tryToUpdateChoices: function(weapon, gameMode) {
        if (gameMode != 'hvsm' && gameMode != 'hvsh')
            return
            
        this.updateP1Choice(weapon);

        if (gameMode == 'hvsm') {
            this.updateP2Choice(this._model.getRandomWeapon()._name);
        }
    }

}