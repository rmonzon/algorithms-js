//Function added to native's Array prototype, returns the index of the element we're looking for
function binarySearch(searchElement) {
    var minIndex = 0, maxIndex = this.length - 1, currentIndex;
    while (minIndex <= maxIndex) {
    	//num | 0 is the same as Math.floor(num) but a bit faster
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        if (this[currentIndex] < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (this[currentIndex] > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

var sorted = [1, 3, 5, 6, 7, 23, 33, 34, 55, 69];
binarySearch.call(sorted, 69);

// Recursive implementation of the Binary Search algorithm
function binarySearch(sortedArray, elem, start, end) {
	var half = (start + end) / 2 | 0;
	if (start > end) {
		return -1;
	}
	// search on the right half
	if (sortedArray[half] < elem) {
		return binarySearch(sortedArray, elem, half + 1, end);
	}
	// search on the left half
	if (sortedArray[half] > elem) {
		return binarySearch(sortedArray, elem, 0, half - 1);
	}
	return half;
}

binarySearch(sorted, 69, 0, sorted.length-1);
