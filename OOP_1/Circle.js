class Circle extends Shape{
    constructor(x, y, side){
        super(x, y, side);
    }
    getArea() {
        return Math.pow(this.side, 2) * 2 * Math.PI;
    };
}