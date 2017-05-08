//Remove duplicates from an array, this is the fastest way possible, 
//time complexity O(n), space complexity O(n - d) where d is number of duplicate elements
function removeDuplicates(arr) {
	let seen = {}, res = [], len = arr.length, j = 0, i = 0;
	if (Array.isArray(arr)) {
	  for (; i < len; ++i) {
		  if(!seen[arr[i]]) {
	 		  seen[arr[i]] = true;
			  res[j++] = arr[i];
		  }
    }  
	}
  return res;
}

// Using ES6 Set object which creates a new object with unique values of any type and then converting that to an array with 
// Array.from()
function removeDuplicates(a) {
	return Array.from(new Set(a));
}
