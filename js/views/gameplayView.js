function GameplayView(model, elements) {
    this._model = model;
    this._elements = elements;

    this.p1ChooseRock = new Event(this);
    this.p1ChoosePaper = new Event(this);
    this.p1ChooseScissors = new Event(this);

    var _this = this;

    this._elements.rock.click(function () {
        _this.p1ChooseRock.notify();
    });

    this._elements.paper.click(function () {
        _this.p1ChoosePaper.notify();
    });

    this._elements.scissors.click(function () {
        _this.p1ChooseScissors.notify();
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
};