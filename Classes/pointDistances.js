class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    static distance(p1, p2) {
        const disA = Math.abs(p1.x - p2.x);
        const disB = Math.abs(p1.y - p2.y);
        const result = Math.sqrt(disA ** 2 + disB ** 2);
        return result
    }
}


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));