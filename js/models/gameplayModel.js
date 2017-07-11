function GameplayModel (availableWeapons) {
    this._availableWeapons = availableWeapons;
    this._p1Choice = null;
    this._p2Choice = null;
    this._gameMode = "";

    this.choicesSet = new Event(this);

}

GameplayModel.prototype = {

    constructor: GameplayModel,

    isChoicesSet: function() {
        if (this._p1Choice && this._p2Choice)
            this.choicesSet.notify();
    },

    getRandomWeapon: function() {
        return this._availableWeapons[Math.floor(Math.random()*this._availableWeapons.length)];
    },

    getGameMode: function() {
        return this._gameMode;
    },

    setP1Choice: function(weaponStr) {
        this._p1Choice =  this._availableWeapons.find(getWeaponByName, weaponStr);
    },

    setP2Choice: function(weaponStr) {
        this._p2Choice =  this._availableWeapons.find(getWeaponByName, weaponStr);
    },

    clearChoices: function() {
        this._p1Choice = null;
        this._p2Choice = null;
    }

    

}

var getWeaponByName = function(weapon) {
    return weapon._name == this
}
