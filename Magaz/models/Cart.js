var Order = require('./Order');
var Consumer = require('./Consumer');

function Cart(magaz) {
    this.order = new Order();
    this.magaz = magaz;
}

Cart.prototype.addItem = function (item) {
    this.order.addItem(item);
    this.magaz.orderItem(item);
};

Cart.prototype.ship = function (name, address) {
    this.order.consumer = new Consumer(name, address);
    return this.order;
};

module.exports = Cart;

