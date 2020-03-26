// Exercise 01: Write a JavaScript program to convert a given string into an array of words.

const stringToArray = (str) => {
  if (str === '') {
    return []
  } else {
    let str1 = str.split('');
    str1.forEach((item, index) => {
      if (item === ',') {

        str1.splice(index, 1)
      }
      if (item === '!') {

        str1.splice(index)
      }

    })
    let str2 = str1.join('')
    let result = str2.split(' ');
    return result

  }

};