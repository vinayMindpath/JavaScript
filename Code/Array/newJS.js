let array = [1, 2, 3, 34, 4453, 3];
console.log("array : ", array);
let newArray = array.map((ele) => {
  return ele / 2;
});
console.log("using  : ");

console.log("Using find method of array : ");

let find = array.find((ele, ind) => ind == 3);
console.log("find the value of index 3 : ", find);

console.log("Using foreach loop");
array.forEach((ele, ind) => console.log(ind + " : " + ele));

console.log("Using forin loop");
console.log("forin loop iterate through index.");
for (i in array) {
  console.log(i);
}

console.log("Using forof loop");
console.log("forof loop iterate through value of array.");
for (i of array) {
  console.log(i);
}

console.log("using map method of array : ");
let map = array.map((ele) => ele * ele);
for (i of map) {
  console.log(i);
}

console.log("using reduce method : ");
let reduce = array.reduce((result, ele) => {
  console.log(result);
  result += ele;
  return result;
}, 0);

console.log(reduce);

// arrow function
console.log("using arrow function.")
let  materials = [
    'hydrogen',
    'helium',
    'Lithium',
    'Beryllium'
]
// array
console.log("Array of materials : ",materials)
// using arrow function in map to show the length of each element of array
console.log("Length of each element of Array : ",materials.map(material => material.length))
