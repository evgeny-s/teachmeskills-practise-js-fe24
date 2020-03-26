// Exercise 02: Write a JavaScript program to get removed elements of an given array until the passed function returns true.

const removeIfCondition = (arr, func) => {
  let newArr = [];
  arr.forEach((item, index) => {
    if (!func(item) === true) {
      newArr.push(item)
    }
  })
  return newArr
};
