function Weapon(name) {
    this.name = name;
    this.weakerWeapons = new Array();
    this.strongerWeapons = new Array();
}

Weapon.prototype = {

    constructor: Weapon,

    hasWeaponInList: function(list, weapon) {
        var length = list.length;

        for(var i = 0; i < length; i++) {
            if(list[i].name == weapon.name) {
                return true;
            }
        }

        return false;
    },

    hasWeakerWeapon: function(weapon) {
        return this.hasWeaponInList(this.weakerWeapons, weapon);
    },

    hasStrongerWeapon: function(weapon) {
        return this.hasWeaponInList(this.strongerWeapons, weapon);
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
        if (!this.hasWeaponInList(this.weakerWeapons, weapon)) {
            this.weakerWeapons.push(weapon);
        }
    },

    addStrongerWeapon: function(weapon) {
        if (!this.hasWeaponInList(this.strongerWeapons, weapon)) {
            this.strongerWeapons.push(weapon);
        }
    }
}