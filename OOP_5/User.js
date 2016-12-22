var Mixin = require('./Mixin');

function User(name) {
    this.name = name;
}
Object.assign(User, Mixin);
// User.fromJson = Mixin.fromJson;

User.prototype.getName = function () {
    return this.name;
};

module.exports = User;