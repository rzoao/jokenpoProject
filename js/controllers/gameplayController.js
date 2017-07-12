function GameplayController(model, view) {  
    this._model = model;
    this._view = view;

    this.winnerResult = new Event(this);

    var _this = this;

    this._view.p1Choice.attach(function (sender, args) {
        _this.updateP1Choice(args.weapon);

        if (args.gameMode == 'hvsm' || args.gameMode == 'mvsm') {
            _this.updateP2Choice(_this._model.getRandomWeapon()._name);
        }
    });
    
    this._model.choicesSet.attach(function() {
        _this.compareResults();
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
    }

}