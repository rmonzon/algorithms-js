//Remove duplicates from an array, this is the fastest way possible, 
//time complexity O(n), space complexity O(n - d) where d is number of duplicate elements
function removeDuplicates(arr) {
	var seen = {}, res = [], len = arr.length, j = 0, i = 0;
    for (; i < len; ++i) {
		if(!seen[arr[i]]) {
	 		seen[arr[i]] = true;
			res[j++] = arr[i];
		}
    }
    return res;
}
