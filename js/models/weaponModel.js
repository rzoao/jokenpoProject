function WeaponModel(name, weakerWeapons, strongerWeapons) {
    this._name = name;
    this._weakerWeapons = [].concat(weakerWeapons);
    this._strongerWeapons = [].concat(strongerWeapons);
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

    isWeaponStronger: function(weapon) {
        var isStronger = this.hasWeakerWeapon(weapon);

        if (!isStronger) {
            var isWeaker = this.hasStrongerWeapon(weapon);

            if (isWeaker) {
                return 'Lost';
            } else {
                return 'Draw';
            }
                
        } else if (isStronger) {
            return 'Won';
        }
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
}