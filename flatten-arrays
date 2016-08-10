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
