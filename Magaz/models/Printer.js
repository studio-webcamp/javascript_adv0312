var Item = require('./Item');
function Printer(price, color) {
    Item.call(this, price);
    this.color = color;
}

Printer.prototype = Object.create(Item.prototype);

Printer.prototype.constructor = Printer;

module.exports = Printer;