// Exercise 02: Return the most frequent item in the array

const mostFrequent = (array) => {
  if (array.length === 0) {
    return null;
  }

  let map = new Map();

  array.forEach(item => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  });

  let max = 0;
  let maxItem;
  for (let item of map.entries()) {
    if (item[1] > max) {
      max = item[1];
      maxItem = item[0];
    }
  }

  return maxItem;
};
