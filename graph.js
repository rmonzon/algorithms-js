function Graph() {
	this.nodes = [];
	this.adjacencyList = {};
}

Graph.prototype.insertNode = function(value) {
	this.nodes.push(value);
	this.adjacencyList[value] = [];
}

Graph.prototype.insertEdge = function (start, end) {
	this.adjacencyList[start].push(end);
}

Graph.prototype.DFS = function (root, visited) {
	if (root === null || root === undefined) {
		return;
	}
	console.log(root);
	visited[root] = true;
	for (var i = 0; i < this.adjacencyList[root].length; ++i) {
		if (!visited[this.adjacencyList[root][i]]) {
			this.DFS(this.adjacencyList[root][i], visited);
		}
	}
}
