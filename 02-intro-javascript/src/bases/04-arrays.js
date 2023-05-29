// Arrays

// const array = new Array(10);

const array = [1, 2, 3, 4];
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

const array2 = [...array, 5];
// array2.push(5);

const array3 = array2.map(function (number) {
  return number * 2;
});
array.push(20) // It's a new memory space

console.log(array);
console.log(array2);
console.log(array3)