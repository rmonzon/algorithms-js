function longestPrefix(str) {
  let table = new Array(str.length);
  let maxPrefix = 0;
  table[0] = 0;
  for (let i = 1; i < str.length; i++) {
    while (maxPrefix > 0 && str[i] !== str[maxPrefix]) {
      maxPrefix = table[maxPrefix - 1];
    }
    if (str[maxPrefix] === str[i]) {
      maxPrefix++;
    }
    table[i] = maxPrefix;
  }
  return table;
}

// Find all the matches for a 'pattern' that match in a given string `str`
// this algorithm is based on the Knuth–Morris–Pratt algorithm. Time complexity: O(n)
function kmpMatching(str, pattern) {
  let prefixes = longestPrefix(pattern);
  let matches = [], j = 0, i = 0;
  while (i < str.length) {
    if (str[i] === pattern[j]) {
      i++;
      j++;
    }
    if (j === pattern.length) {
      matches.push(i - j);
      j = prefixes[j - 1];
    }
    else {
      if (str[i] !== pattern[j]) {
        if (j !== 0) {
            j = prefixes[j - 1];
        } else {
            i++;
        }
      }
    }
  }
  return matches;
}
