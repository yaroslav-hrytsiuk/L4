//Task 1
// function allArguments () {
//   console.log('Arguments - ', arguments);
// };
// allArguments();
// allArguments(1);
// allArguments(5, 10, 15, 3);
// allArguments('string', 3);
// allArguments(2);
// allArguments(1, 5, 10);

//Task 2
// const list = [2, 4, 6, 7, 9, 0, 10];

// function cutArray (arr, from, to) {
//   if ((isNaN(from) && isNaN(to)) || to < from || to > arr.length) {
//     return 'Error!';
//   } else if (arguments.length >=3) {
//     let newArray = [];
//     let counter = 0;
//     for (let i = from; i <= to; i++) {
//       newArray[counter] = arr[i];
//       counter++;  
//     }
//     return newArray;
//   } else {
//     return arr[from];
//   }
// }
// console.log(cutArray(list));
// console.log(cutArray(list, 2, 5));
// console.log(cutArray(list, 2));
// console.log(cutArray(list, 2, 7));
// console.log(cutArray(list, 6, 5));

//Task 3
const sum = function(from, to) {
  if (from === to) {
    return to;
  } else { 
    return from + sum(from + 1, to);
  }
};

console.log(sum(2, 5));

const sumTwo = function(from, to) {
  if (from === to) {
    return from;
  } else { 
    return to + sumTwo(from, to-1);
  }
};

console.log(sumTwo(2, 5));