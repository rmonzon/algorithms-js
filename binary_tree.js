class Node {
  value = null;
  left;
  right;

  constructor(value) {
    this.value = value;
  }
}

// BinaryTree
class Tree {
  root;
  path = [];
  
  constructor(root) {
    this.root = root;
  }
  
  get getRoot() {
    return this.root;
  }
  
  get printPath() {
    return this.path.join(' -> ');
  }
  
  clearPath() {
    this.path = [];
  }
  // root, left, right
  preOrderTraversal(node) {
    if (node === null) {
      return;
    }
    this.path.push(node.value);
    if (node.left) {
      this.preOrderTraversal(node.left);  
    }
    if (node.right) {
      this.preOrderTraversal(node.right);  
    }
  }
  // left, root, right
  inOrderTraversal(node) {
    if (node === null) {
      return;
    }
    if (node.left) {
      this.inOrderTraversal(node.left);
    }
    this.path.push(node.value);
    if (node.right) {
      this.inOrderTraversal(node.right);
    }
  }
  // left, right, root
  postOrderTraversal(node) {
    if (node === null) {
      return;
    }
    if (node.left) {
      this.postOrderTraversal(node.left);
    }
    if (node.right) {
      this.postOrderTraversal(node.right);
    }
    this.path.push(node.value);
  }
  // classic BFS traversal by level, returns nodes at each level
  bfsTraversal(root) {
    const results = [];
    if (!root) {
      return results;
    }
    const queue = [root];
    while (queue.length > 0) {
      const levelSize = queue.length;
      const levelNodes = [];
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        levelNodes.push(node.value);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      results.push(levelNodes);
    }
    return results;
  }
  // Returns the sum all of nodes on the tree
  sumAllValues(node) {
    if (!node) {
      return 0;
    }
    const left = this.sumAllValues(node.left);
    const right = this.sumAllValues(node.right);
    return left + right + node.value;
  }
  // Returns the "height" of the tree, the sum of all levels
  getTreeHeight(node) {
    if (!node) {
      return 0;
    }
    // leaf node
    if (!node.left && !node.right) {
      return 1;
    }
    return Math.max(this.getTreeHeight(node.left), this.getTreeHeight(node.right)) + 1;
  }
  // Returns the maximum value in the tree
  getMaxValue(node) {
    if (!node) {
      return 0;
    }
    // leaf node
    if (!node.left && !node.right) {
      return node.value;
    }
    return Math.max(this.getMaxValue(node.left), this.getMaxValue(node.right), node.value);
  }
  // Returns the minimum value in the tree
  getMinValue(node) {
    if (!node) {
      return 0;
    }
    // leaf node
    if (!node.left && !node.right) {
      return node.value;
    }
    return Math.min(this.getMinValue(node.left), this.getMinValue(node.right), node.value);
  }
  // Returns the number of nodes
  getNumberOfNodes(node) {
    if (!node) {
      return 0;
    }
    return this.getNumberOfNodes(node.left) + this.getNumberOfNodes(node.right) + 1;
  }
  // Returns true if a node 'target' exists within the tree
  searchByNodeValue(node, target) {
    if (!node) {
      return false;
    }
    if (node.value === target) {
      return true;
    }
    return this.searchByNodeValue(node.left, target) || this.searchByNodeValue(node.right, target);
  }
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
const tree = new Tree(root);
tree.bfsTraversal(tree.getRoot);
