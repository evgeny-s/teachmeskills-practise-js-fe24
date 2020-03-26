// Exercise 04: Write a JavaScript program to calculate how many numbers in the given array are less or equal to the given value in percents.

const calcNumbers = (arr, val) => {
  let newArr = [];
  arr.forEach((item, index) => {
    if (item <= val) {
      newArr.push(item)
    }
  })
  let result = (newArr.length / arr.length) * 100;
  return result;
};