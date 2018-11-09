/**
 * Generates a random integer between the specified values. The value is no lower * than 'min', 
 * and is less than (but not equal to) 'max'.
 * 
 * @param {Number} min - Number representing the lower bound of the interval
 * @param {Number} max - Number representing the upper bound of the interval
 * @returns {Number}
 */
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Generates a unique alphanumeric string of length 'size'.
 * 
 * @param {Number} size - Desired length of the alphanumeric string
 * @returns {string}
 */
function generateUniqueCode(size) {
  const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE_LETTERS = UPPERCASE_LETTERS.toLowerCase();
  const NUMBERS = '0123456789';
  const CHARACTERS = `${UPPERCASE_LETTERS}${NUMBERS}${LOWERCASE_LETTERS}`;
  let indicesLookupTable = [];
  let index = -1;
  let code = '';

  while (size > 0) {
    do {
      index = getRandomNumber(0, CHARACTERS.length);
      indicesLookupTable[index] = true;
    }
    while (!indicesLookupTable[index]);
    code = `${code}${CHARACTERS[index]}`;
    index = -1;
    size--;
  }
  return code;
}

// Example
generateUniqueCode(10);
