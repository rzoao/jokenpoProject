function GameplayView(model, elements) {
    this._model = model;
    this._elements = elements;

    this.p1Choice = new Event(this);
    this.p1ChoosePaper = new Event(this);
    this.p1ChooseScissors = new Event(this);

    var _this = this;

    this._elements.rock.click(function () {
        _this.p1Choice.notify({
            weapon: 'rock',
            gameMode: _this._model._gameMode
        });
    });

    this._elements.paper.click(function () {
        _this.p1Choice.notify({
            weapon: 'paper',
            gameMode: _this._model._gameMode
        });
    });

    this._elements.scissors.click(function () {
        _this.p1Choice.notify({
            weapon: 'scissors',
            gameMode: _this._model._gameMode
        });
    });

    // attach model listeners 
    /*
    this._model.itemAdded.attach(function () {
        _this.rebuildList();
    });
    this._model.itemRemoved.attach(function () {
        _this.rebuildList();
    });*/

    // attach listeners to HTML controls
    /*
    this._elements.list.change(function (e) {
        _this.listModified.notify({
            index: e.target.selectedIndex
        });
    });
    this._elements.addButton.click(function () {
        _this.addButtonClicked.notify();
    });
    this._elements.delButton.click(function () {
        _this.delButtonClicked.notify();
    });*/
}

GameplayView.prototype = {

    /*show: function () {
        this.rebuildList();
    },

    rebuildList: function () {
        var list, items, key;

        list = this._elements.list;
        list.html('');

        items = this._model.getItems();
        for (key in items) {
            if (items.hasOwnProperty(key)) {
                list.append($('<option>' + items[key] + '</option>'));
            }
        }
        this._model.setSelectedIndex(-1);
    }*/

    setP2Choice: function() {
        this._elements.formPc.find('input[name=pc]').val(this._model._p2Choice.name);
    },

    updateMatchValues: function(result) {
        var inputValue = this._elements.counter.find('input[name=' + result.toLowerCase() +']').val();
        this._elements.counter.find('input[name=' + result.toLowerCase() +']').val(+inputValue + 1);
    },

    winDisappear: function(){
        this._elements.choose.css("display", "none");
        this._elements.win.css("display", "none");
        this._elements.lose.css("display", "none");
        this._elements.draw.css("display", "none");
    },

    delay: function(){
        var _this = this;
        setTimeout(function(){
            _this.winDisappear()
        },650);
    },

    showWin: function(){
        this._elements.choose.css("display","block");
        this._elements.win.css("display","block");
        this.delay();
    },

    showDraw: function(){
        this._elements.choose.css("display","block");
        this._elements.draw.css("display","block");
        this.delay();
    },

    showLose: function(){
        this._elements.choose.css("display","block");
        this._elements.lose.css("display","block");
        this.delay();
    },

    showResultPopUp: function (result) {
        if (result == "Won") {
            this.showWin();
        } else if (result == "Lost") {
            this.showLose();
        } else if (result == "Draw") {
            this.showDraw();
        }
    },

    showResult: function(result) {
        this.setP2Choice();
        this.updateMatchValues(result);
        this.showResultPopUp(result);
    }

};