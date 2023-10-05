const transformToLowerCase = (mixedArray) => {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject(new Error('Input is not an array'));
        return;
      }
  
      const filteredAndLowercased = mixedArray
        .filter(item => typeof item === 'string')
        .map(word => word.toLowerCase());
  
      if (filteredAndLowercased.length === 0) {
        reject(new Error('No strings found in the array'));
      } else {
        resolve(filteredAndLowercased);
      }
    });
  };
  
  const inputArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  transformToLowerCase(inputArray)
    .then(result => {
      console.log('Transformed and lowercased words:', result);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  