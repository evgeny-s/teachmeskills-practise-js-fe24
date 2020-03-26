// Exercise 02: Return the most frequent item in the array

const mostFrequent = (array) => {
  let map = new Map;

  array.forEach(item => {
    let counter = 1;
    if(map.has(item)) {
      counter = map.get(item) + 1;
    }
   map.set(item, counter)
    
  })
let max = 0; 
let result = null;
  for(let [item, counter] of map) {
    if(counter > max) {
					max = counter;
          result = item;
    }
 
  }
return result
};