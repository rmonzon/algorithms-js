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
		array = array.flat();
   		// array = [].concat(...array); works as well
  	}
  	return array;
}

// Flatten array by level, first non-nested elements, then one level nested and so on
function flattenArrayByLevel(array) {
  const levels = [];
  function flatten(arr, depth) {
    if (!levels[depth]) {
      levels[depth] = [];
    }
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i], depth + 1);
      } else {
        levels[depth].push(arr[i]);
      }
    }
  }
  flatten(array, 0);
  // flat the levels array before returning
  return levels.flat();
}

flattenArray([1, 2, [3, 4, [5]], 6], []); // [1, 2, 3, 4, 5, 6]

flattenArrayByLevel([1, 2, [3, 4, [5, 6]], 7, [8, [9, [10]]]]); // [1, 2, 7, 3, 4, 8, 5, 6, 9, 10]
