var Cart = require('./Cart');
var Mouse = require('./Mouse');
var Printer = require('./Printer');

function Magaz() {
    this.items = [];
    this.cart = new Cart(this);
}

Magaz.prototype.getItems = function () {
    this.items = [new Mouse(150, 'wire'), new Printer(1500, true)];
    return this.items;
};
Magaz.prototype.orderItem = function (item) {
    var i = this.items.indexOf(item);
    if (i != -1) {
        this.items.splice(i, 1);
    }
};
module.exports = Magaz;