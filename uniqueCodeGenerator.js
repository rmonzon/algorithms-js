function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateUniqueCode(size) {
  const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE_LETTERS = UPPERCASE_LETTERS.toLowerCase();
  const NUMBERS = '0123456789';
  const CHARS = `${UPPERCASE_LETTERS}${LOWERCASE_LETTERS}${NUMBERS}`;
  let indicesLookupTable = [];
  let index = -1;
  let code = '';

  while (size > 0) {
    while (!indicesLookupTable[index]) {
      index = getRandomInt(0, CHARS.length);
      indicesLookupTable[index] = true;
    }
    code += CHARS[index];
    index = -1;
    size--;
  }
  return code;
}

// Example
generateUniqueCode(10);
