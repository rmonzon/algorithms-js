// Recursive approach in O(n^2 * n!) time
function findAllPermutations(str) {
  permutationsRecursive(str, "");
}

function permutationsRecursive(str, prefix) {
  const n = str.length;
  if (n === 0) {
    console.log(prefix);
  }
  else {
    for (let i = 0; i < n; i++) {
      const rem = str.substring(0, i) + str.substring(i + 1);
      permutationsRecursive(rem, prefix + str[i]);
    }
  }
}

findAllPermutations('abcd');
