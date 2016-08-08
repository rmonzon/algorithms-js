//Function added to native's Array prototype, returns the index of the element we're looking for
Array.prototype.binarySearch = function (searchElement) {
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
};
