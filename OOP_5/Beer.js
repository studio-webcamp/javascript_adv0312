var Mixin = require('./Mixin');

function Beer(brand) {
    this.brand = brand;
}
Object.assign(Beer, Mixin);

Beer.prototype.getBrand = function () {
    return this.brand;
};

module.exports = Beer;
