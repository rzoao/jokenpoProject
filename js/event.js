//Observer pattern used to support MVC

function Event(sender) {  
    this._sender = sender;
    this._listeners = [];
}

Event.prototype = {  
    attach : function (listener) {
        this._listeners.push(listener);
    },
    notify : function (args) {
        for (var index = 0; index < this._listeners.length; index++) {
            this._listeners[index](this._sender, args);
        }
    }
};