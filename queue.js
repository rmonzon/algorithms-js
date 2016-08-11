function Queue () {
	this.data = [];
}
Queue.prototype.enqueue = function (val) {
	this.data.push(val);
};
Queue.prototype.dequeue = function () {
	return this.data.shift();
};
Queue.prototype.peek = function () {
	return this.data[0];
};
Queue.prototype.isEmpty = function () {
	return this.data.length === 0;
};
Queue.prototype.clear = function () {
	this.data = [];
};
