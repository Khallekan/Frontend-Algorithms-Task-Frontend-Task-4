// <---Question One--->

const convertFahrToCelsius = (arg) => {
  let argValue;
  const typeOfArg = Array.isArray(arg) ? 'array' : typeof arg;

  if (Array.isArray(arg)) {
    // <---If the parameter is an array--->
    argValue = `[${arg}]`;
    return `${argValue} is not a valid number but a/an ${typeOfArg}`;
  } else if (!Array.isArray(arg) && typeof arg === 'object') {
    // <---If the parameter is an objecT--->
    argValue = JSON.stringify(arg).split(`\"`).join(``);
    return `${argValue} is not a valid number but a/an ${typeOfArg}`;
  } else {
    // <---If the parameter is neither an object or an array--->
    const fahr = (((arg - 32) * 5) / 9).toFixed(4);
    if (isNaN(fahr)) {
      // <---If the result is not a number--->
      argValue = arg;
      return `${argValue} is not a valid number but a/an ${typeOfArg}`;
    }
    // <---If the result is a number--->
    return `${fahr}°C`;
  }
};

// <---Question Two--->

// <---Check if input is a numerical in some manner--->
const isNumeric = (str) => {
  if (typeof str != 'string') return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};
const checkYuGiOh = (n) => {
  // <---Check if input is numerical--->
  if (isNumeric(n) || typeof n === 'number') {
    // <---Initialize array and push values into array--->
    const array = [];
    for (i = 0; i < n; i++) {
      array.push(i + 1);
    }
    // <---Loop over array and check if value is a factor of 2, 3, 5--->
    array.map((num, index, array) => {
      // <--- Initialize variable to be swapped--->
      let newNum = ``;
      if (num % 2 === 0) {
        newNum = `yu`;
      }
      if (num % 3 === 0) {
        if (newNum.length > 0) {
          newNum = `${newNum}-gi`;
        } else {
          newNum = `gi`;
        }
      }
      if (num % 5 === 0) {
        if (newNum.length > 0) {
          newNum = `${newNum}-ho`;
        } else {
          newNum = `ho`;
        }
      }

      if (newNum.length > 0) {
        return (array[index] = newNum);
      }
      return num;
    });
    return array;
  } else {
    if (Array.isArray(n)) {
      return `invalid parameter: [${n}]`;
    } else if (!Array.isArray(n) && typeof n === 'object') {
      let nToString = JSON.stringify(n).split(`\"`).join('');
      return `invalid parameter: ${nToString}`;
    }
    let nToString = n.split(`\"`).join('');
    return `invalid parameter: '${nToString}'`;
  }
};
