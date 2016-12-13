var Mixin = require('./mixin');
function Customer(name) {
    Object.assign(this, Mixin);
    this.name = name;
}

module.exports = Customer;


