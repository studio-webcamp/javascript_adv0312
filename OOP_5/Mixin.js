function Mixin() {

}
Mixin.fromJson = function (json) {
    var u = new this();
    Object.assign(u, json);
    return u;
};

module.exports = Mixin;
