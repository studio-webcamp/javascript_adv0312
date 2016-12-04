class Shape{
    constructor(x, y, side){
        this.x = x;
        this.y = y;
        this.side = side;
    }
    getArea() {
        throw new Error('Shape does not have an implementation');
    };
}