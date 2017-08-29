function findAllPermutations(str) {
  permutationsRecursive(str, "");
}

function permutationsRecursive(str, prefix) {
  if (str.length === 0) {
    console.log(prefix);
  }
  else {
    for (let i = 0; i < str.length; i++) {
      const rem = str.substring(0, i) + str.substring(i + 1);
      permutationsRecursive(rem, prefix + str[i]);
    }
  }
}

findAllPermutations('abcd');
