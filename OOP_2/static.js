function Order() {
    this.items = [];
}

Order.prototype.getItems = function () {
    return this.items;
};

Order.doSomething = function () {
    return "Something was done";
};
