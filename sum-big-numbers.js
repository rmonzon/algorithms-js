sumTwoBigIntegers = (number1, number2) => {
  let n = number1.length;
  let m = number2.length;
  let length = Math.max(n, m);
  let result = '', carryover = 0, digitSum = 0, digitObj = {};
  if (n === 1 && m === 1) {
    return `${Number(number1) + Number(number2)}`;
  }
  while (length > 0) {
    n--; m--; length--;
    if (number1[n] === undefined) {
      if (carryover > 0) {
        digitObj = sumTwoDigits(number2[m], 0, carryover, m === 0);
        carryover = digitObj.carry;
        result = `${digitObj.value}${result}`;
      }
      else {
        result = `${number2[m]}${result}`; 
      }
      continue;
    }
    if (number2[m] === undefined) {
      if (carryover > 0) {
        digitObj = sumTwoDigits(number1[n], 0, carryover, n === 0);
        carryover = digitObj.carry;
        result = `${digitObj.value}${result}`;
      }
      else {
        result = `${number1[n]}${result}`; 
      }
      continue;
    }
    // Assuming both positions are defined
    digitObj = sumTwoDigits(number1[n], number2[m], carryover, (n === 0 && m === 0));
    digitSum = digitObj.value;
    carryover = digitObj.carry;
    result = `${digitSum.toString()}${result}`;
  }
  return result;
};

sumTwoDigits = (d1, d2, carryover, last) => {
  let digitSum = 0;
  if (carryover > 0) {
    digitSum = Number(d1) + Number(d2) + carryover;
    carryover--;
  }
  else {
    digitSum = Number(d1) + Number(d2);  
  }
  // it means we need to carry-over 1 digit
  if (digitSum > 9) {
    carryover++;
  }
  if (carryover > 0 && !last) {
    digitSum -= 10;
  }
  return {value: digitSum, carry: carryover};
}
