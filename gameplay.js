function Gameplay(availableWeapons) {
    this.availableWeapons = availableWeapons;
    this.numberOfMatches = 0;
    this.numberOfWins = 0;
    this.numberOfLoses = 0;
    this.numberOfDraws = 0;
}

Gameplay.prototype = {

    constructor: Gameplay,

    getRandomWeapon: function() {
        return this.availableWeapons[Math.floor(Math.random()*this.availableWeapons.length)];
    }

}