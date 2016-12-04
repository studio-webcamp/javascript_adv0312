//Shape -> Circle
//      -> Rectangle ->  Square

function Shape(x, y, side){
    this.x = x;
    this.y = y;
    this.side = side;
}

Shape.prototype.getArea = function () {
    throw new Error('Shape does not have an implementation');
};

function Circle(x, y, side) {
    Shape.apply(this, arguments);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
  return Math.pow(this.side, 2) * 2 * Math.PI;
};