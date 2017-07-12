function Gameplay(availableWeapons) {
    this.availableWeapons = availableWeapons;
    this.gameMode = "hvsh";
}

Gameplay.prototype = {

    constructor: Gameplay,

    getRandomWeapon: function() {
        return this.availableWeapons[Math.floor(Math.random()*this.availableWeapons.length)];
    },

    compareResults: function(weapon) {
        
    }
    
}

