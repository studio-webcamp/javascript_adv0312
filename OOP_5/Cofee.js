function Coffee(flavor) {
    this.flavor = flavor;
}

function CoffeeWithMilk(coffee) {
    coffee.milk = true;
    return coffee;
}
function CoffeeWithSugar(coffee) {
    coffee.sugar = true;
    return coffee;
}

var coffee = new Coffee('arabica');
coffee = CoffeeWithMilk(coffee);
coffee = CoffeeWithSugar(coffee);
