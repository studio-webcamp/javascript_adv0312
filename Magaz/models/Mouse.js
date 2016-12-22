var Item = require('./Item');
function Mouse(price, type) {
    Item.call(this, price);
    this.type = type;
}

Mouse.prototype = Object.create(Item.prototype);

Mouse.prototype.constructor = Mouse;

module.exports = Mouse;