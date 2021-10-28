//Using the Array.prototype.reduce function of javascript 
function flattenArray(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

//Using just recursion and regular loops
function flattenArray(array, res) {
	for (var i = 0, len = array.length; i < len; ++i) {
		if (Array.isArray(array[i])) {
			flattenArray(array[i], res);
		}
		else {
			res.push(array[i]);
		}
	}
	return res;
}

flattenArray([1, 2, [3, 4, [5]], 6], []); // [1, 2, 3, 4, 5, 6]

First recursive call - flattenArray([3, 4, [5]], [1, 2]);

Second recursive call - flattenArray([5], [1, 2, 3, 4]); // [1, 2, 3, 4, 5]
