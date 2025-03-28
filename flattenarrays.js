// Using Array.prototype.reduce and recursion
function flattenArray(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

// Using recursion and regular loops
function flattenArray(array, res) {
  for (var i = 0, len = array.length; i < len; ++i) {
	  if (Array.isArray(array[i])) {
		  flattenArray(array[i], res);
	  } else {
		  res.push(array[i]);
	  }
  }
  return res;
}

// Using Array.prototype.some without recursion
function flattenArray(array) {
	while (array.some(Array.isArray)) {
   		array = [].concat(...array);
  	}
  	return array;
}

flattenArray([1, 2, [3, 4, [5]], 6], []); // [1, 2, 3, 4, 5, 6]

First recursive call - flattenArray([3, 4, [5]], [1, 2]);

Second recursive call - flattenArray([5], [1, 2, 3, 4]); // [1, 2, 3, 4, 5]
