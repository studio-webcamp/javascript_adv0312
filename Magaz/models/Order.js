function Order() {
    this.items = [];
    this.consumer = null;
}

Order.prototype.getTotalPrice = function () {
    return this.items.reduce(function(price, item2){
        return price + item2.price;
    }, 0);
};

Order.prototype.addItem = function (item) {
  this.items.push(item);
};
module.exports = Order;