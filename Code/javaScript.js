// creating own object 
let triangle = new Object()
// this is  a triagle
// value of triagle
triangle.sideA = 3;
triangle.sideB = 4;
triangle.sideC = 5;

// method to calculate area of triangle using object
triangle.getArea = function(a,b,c){
    let semiperimeter = (a+b+c)/2;
    let calculate = semiperimeter*(semiperimeter-a)*(semiperimeter-b)*(semiperimeter-c);

    return Math.sqrt(calculate);
};

// alert(triangle.getArea(triangle.sideA, triangle.sideB, triangle.sideC))
console.log(triangle.getArea(triangle.sideA, triangle.sideB, triangle.sideC))