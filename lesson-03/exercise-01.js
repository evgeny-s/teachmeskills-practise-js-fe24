// Exercise 01: Filter unique array members

const unique = (members) => {
  let set = new Set();
  members.forEach(item => {
    set.add(item);
  });

  let result = [];
  for (let item of set) {
    result.push(item);
  }

  return result;
};
