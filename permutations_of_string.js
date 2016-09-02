// Recursive approach in O(n!) time
var generatePermutation = (str, prefix) => {
    let n = str.length;
    if (n === 0) {
    	console.log(prefix);
    }
    else {
        for (let i = 0; i < n; i++) {
            generatePermutation(str.substring(0, i) + str.substring(i+1, n), prefix + str[i]);
        }
    }
}

generatePermutation("1234", "");
