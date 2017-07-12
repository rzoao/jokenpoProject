function WeaponModel(name) {  
    this._name = name;
    this._weakerWeapons = new Array();
    this._strongerWeapons = new Array();

}

WeaponModel.prototype = {  
   
    constructor: WeaponModel,

    hasWeaponInList: function(list, weapon) {
        var length = list.length;

        for(var i = 0; i < length; i++) {
            if(list[i]._name == weapon._name) {
                return true;
            }
        }

        return false;
    },

    hasWeakerWeapon: function(weapon) {
        return this.hasWeaponInList(this._weakerWeapons, weapon);
    },

    hasStrongerWeapon: function(weapon) {
        return this.hasWeaponInList(this._strongerWeapons, weapon);
    },
    
    hasWeapon: function(weapon) {
        return this.hasWeakerWeapon(weapon) || this.hasStrongerWeapon(weapon);
    },

    addWeakerWeapon: function(weapon) {
        if (!this.hasWeaponInList(this._weakerWeapons, weapon)) {
            this._weakerWeapons.push(weapon);
        }
    },

    addStrongerWeapon: function(weapon) {
        if (!this.hasWeaponInList(this._strongerWeapons, weapon)) {
            this._strongerWeapons.push(weapon);
        }
    }
};