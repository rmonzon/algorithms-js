function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BSTree() {
	this.root = null;	
}

BSTree.prototype.insert = function(val) {
	var root = this.root;
	if (!root) {
		this.root = new Node(val);
		return;
	}
	var currentNode = root;
	var newNode = new Node(val);
	
	while(currentNode) {
		if(val < currentNode.value) {
		  	if(!currentNode.left) {
		     	currentNode.left = newNode;
		     	break;
		  	}
		  	else {
		     	currentNode = currentNode.left;
		  	}
		 }
		 else {
		     if(!currentNode.right) {
		        currentNode.right = newNode;
		        break;
		     }
		     else {
		        currentNode = currentNode.right;
		     }
		 }
	}
};

//This function uses the Queue data structure available in the file called 'queue.js' on this repo
BSTree.prototype.BFS = function () {
	if (!this.root) {
		return;
	}
	var queue = new Queue(), res = [];
    queue.clear();
    queue.enqueue(this.root);
    while(!queue.isEmpty()) {
        var node = queue.dequeue();
        res.push(node.value);
        if(node.left) {
        	queue.enqueue(node.left);	
        }
        if(node.right) {
        	queue.enqueue(node.right);
        }
    }
    console.log(res.join(', '));
};

BSTree.prototype.minValue = function () {
	if (!this.root) {
		return;
	}
	var left = this.root.left, v = 0;
	while (left) {
		v = left.value;
		left = left.left;
	}
	return v;
};

BSTree.prototype.maxValue = function () {
	if (!this.root) {
		return;
	}
	var right = this.root.right, v = 0;
	while (right) {
		v = right.value;
		right = right.right;
	}
	return v;
};

BSTree.prototype.getHeight = function (node) {
	if (!node) {
		return 0;
	}
	var leftHeight = this.getHeight(node.left), rightHeight = this.getHeight(node.right);
	return Math.max(leftHeight, rightHeight) + 1;
};

function isBST (node, min, max) {
	/* an empty tree is BST */
    if (!node)
        return true;

    /* false if this node violates the min/max constraints */
    if (node.value < min || node.value > max)
        return false;

    /* otherwise check the subtrees recursively tightening the min/max constraints */
    // Allow only distinct values
    return (isBST(node.left, min, node.value - 1) && isBST(node.right, node.value + 1, max));
}
