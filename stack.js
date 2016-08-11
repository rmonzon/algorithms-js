function Stack () {
	this.data = [];
}
Stack.prototype.push = function (val) {
	this.data.push(val);
};
Stack.prototype.pop = function () {
	return this.data.pop();
};
Stack.prototype.top = function () {
	return this.data[0];
};
