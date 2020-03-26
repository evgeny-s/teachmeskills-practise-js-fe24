// Exercise 01: Filter unique array members

const unique = (members) => {

  let set = new Set;
  let newArr = [];
    
    members.forEach(item => {
      set.add(item);  
    })
    
    for(let item of set) {
    newArr.push(item);
    }
    return newArr
  };
