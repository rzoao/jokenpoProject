function Player(x, y) {
    this.x = x;
    this.y = y;
    this.imgReady = false;
    this.weaponImg = new Image();
}

Player.prototype = {

    constructor: Player,

    setImage: function(imgPath) {
        var _self = this;
        _self.weaponImg.onload = function() {
            _self.imgReady = true;            
        }
        _self.weaponImg.src = imgPath;
    }


}