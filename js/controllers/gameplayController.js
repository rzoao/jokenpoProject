function GameplayController(model, view) {  
    this._model = model;
    this._view = view;

    var _this = this;

    this._view.p1ChooseRock.attach(function () {
        _this.updateSelected("rock");
    });
    

}

GameplayController.prototype = {

    constructor: GameplayController,

    compareResults: function() {
        if (!this._model.isChoicesSet())
    },

    updateP1Choice: function(weaponStr) {
        this._model.setP1Choice(weaponStr);
    },

    updateP2Choice: function(weaponStr) {
        this._model.setP2Choice(weaponStr);
    }

}