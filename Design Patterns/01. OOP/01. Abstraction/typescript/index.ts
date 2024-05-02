//////////////////////
//ABSTRACTION THEORY//
//////////////////////

//Shapes
//Area, Perimeter
//Simple - single function calculateTotalArea

//Interface a Shape
interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

//Client Code //Everyfing above is hidden from them
let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(4, 6);
console.log("Area of Circle:", calculateTotalArea(circle));
console.log("Area of Rectangle:", calculateTotalArea(rectangle));

//////////////////////////////
//ABSTRACTION IMPLEMENTATION//
//////////////////////////////

//Date Class
// Get Currnet Year
// Get Currnet Month
// Get Currnet Date

const now = new Date();

const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDate = now.getDate();

console.log(currentYear);
console.log(currentMonth);
console.log(currentDate);

