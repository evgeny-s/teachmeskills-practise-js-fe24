function job(state) {
  return new Promise(function(resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise = job(true);

promise

  .then(function(data) {
    console.log(data);

    return job(true);
  })

  .then(function(data) {
    if (data !== 'victory') {
      throw 'Defeat';
    }

    return job(true);
  })

  .then(function(data) {
    console.log(data);
  })

  .catch(function(error) {
    console.log(error);

    return job(false);
  })

  .then(function(data) {
    console.log(data);

    return job(true);
  })

  .catch(function(error) {
    console.log(error);

    return 'Error caught';
  })

  .then(function(data) {
    console.log(data);

    return new Error('test');
  })

  .then(function(data) {
    console.log('Success:', data.message);
  })

  .catch(function(data) {
    console.log('Error:', data.message);
  });

// What is the output of the code above?

// error, error, Error caught, Error: test
// success, success, Error caught, Success: Test
// error, Error caught, Success: test
// success, Defeat, error, Error caught, Error: test
// success, Defeat, error, Error caught, Success: test
