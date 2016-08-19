function longestPrefix(str) {
  var table = new Array(str.length);
  var maxPrefix = 0;
  table[0] = 0;
  for (var i = 1; i < str.length; i++) {
    while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
      maxPrefix = table[maxPrefix - 1];
    }
    if (str.charAt(maxPrefix) === str.charAt(i)) {
      maxPrefix++;
    }
    table[i] = maxPrefix;
  }
  return table;
}

// Find all the patterns that matches in a given string `str`
// this algorithm is based on the Knuth–Morris–Pratt algorithm. Its beauty consists in that it performs the matching in O(n)
function kmpMatching(str, pattern) {
  var prefixes = longestPrefix(pattern);
  var matches = [];
  var j = 0;
  var i = 0;
  while (i < str.length) {
    if (str.charAt(i) === pattern.charAt(j)) {
      i++;
      j++;
    }
    if (j === pattern.length) {
      matches.push(i-j);
      j = prefixes[j-1];
    }
    else if (str.charAt(i) !== pattern.charAt(j)) {
        if (j !== 0) {
            j = prefixes[j-1];
        } else {
            i++;
        }
    }
  }
  return matches;
}
