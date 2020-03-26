// Exercise 05: Write a JavaScript program that will return 1 if the array is sorted in ascending order, -1 if it is sorted in descending order or 0 if it is not sorted.

const isSorted = (arr) => {
  let arr1 = arr.slice();
  let arr2 = arr.slice();
  let ascSort = arr1.sort((a, b) => a - b);
  console.log(ascSort)

  let dessSort = arr2.sort((a, b) => b - a );

  if(ascSort.join('') === arr.join('')) {

 return 1;
  } else  if(
    dessSort.join('') === arr.join('')) {
    return -1;
  } else {
  return 0;
  }
};