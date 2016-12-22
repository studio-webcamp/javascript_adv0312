var assert = require('assert');
var Magaz = require('./Magaz');

describe('test magaz', function () {
    var magaz;
    var cart;
    var mouse;
    var order;
    beforeEach(function () {
        magaz = new Magaz();
        magaz.getItems();
        cart = magaz.cart;
        mouse = magaz.items[0];
        order = cart.order;
        cart.addItem(mouse);
    });
    it('should add item to cart order', function testOrder() {
        assert.equal(magaz.items.length, 1);
    });
    it('should get total order price', function testOrder() {
        assert.equal(order.getTotalPrice(), mouse.price);
    });
    it('sould ship the order', function testShipment() {
        cart.ship('Vasia', 'kiev');
        assert.equal(order.consumer.name, 'Vasia');
    })
});
