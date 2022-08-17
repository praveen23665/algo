/* Binary Search Tree */

class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	add = function (data) {
		const node = this.root;

		if (node == null) {
			this.root = new Node(data);
			return;
		} else {
			const SearchTree = (node) => {
				if (data < node.data) {
					if (node.left === null) {
						node.left = new Node(data);
						return;
					} else if (node.left !== null) {
						return SearchTree(node.left);
					}
				} else if (data > node.data) {
					if (node.right === null) {
						node.right = new Node(data);
						return;
					} else if (node.right !== null) {
						return SearchTree(node.right);
					}
				} else {
					return null;
				}
			};

			return SearchTree(node);
		}
	};

	findMin = () => {
		let current = this.root;
		while (current.left != null) {
			current = current.left;
		}

		return current.data;
	};
	findMax = () => {
		let current = this.root;
		while (current.right != null) {
			current = current.right;
		}

		return current.data;
	};
	find = (data) => {
		let current = this.root;
		while (current.data !== data) {
			if (data > current.data) {
				current = current.right;
			} else {
				current = current.left;
			}
			if (current == null) {
				return null;
			}
		}
		return current;
	};
	isPresent = (data) => {
		let current = this.root;

		while (current.data !== data) {
			if (data > current.data) {
				current = current.right;
			} else {
				current = current.left;
			}
			if (current === null) {
				return false;
			}
		}
		return true;
	};

	findMinHeight = () => {
		var height = 0;
		const node = this.root;
		if (node == null) {
			return 0;
		}
		const minHeight = (node) => {
			if (node == null) {
				return -1;
			}
			let leftheight = minHeight(node.left);
			let rightheight = minHeight(node.right);
			if (leftheight > rightheight) {
				return rightheight + 1;
			} else {
				return leftheight + 1;
			}
		};
		return minHeight(node);
	};
	findMaxHeight = () => {
		const node = this.root;
		if (node == null) {
			return 0;
		}
		const maxHeight = (node) => {
			if (node == null) {
				return -1;
			}
			let leftheight = maxHeight(node.left);
			let rightheight = maxHeight(node.right);
			if (leftheight < rightheight) {
				return rightheight + 1;
			} else {
				return leftheight + 1;
			}
		};
		return maxHeight(node);
	};

	inOrder = () => {
		const root = this.root;
		if (root == null) {
			return null;
		} else {
			const arr = new Array();

			const traverseInorder = (node) => {
				node.left && traverseInorder(node.left);
				arr.push(node.data);
				node.right && traverseInorder(node.right);
			};
			traverseInorder(root);
			return arr;
		}
	};
	preOrder = () => {
		const root = this.root;
		if (root == null) {
			return null;
		} else {
			const arr = new Array();

			const traversePreorder = (node) => {
				arr.push(node.data);
				node.left && traversePreorder(node.left);
				node.right && traversePreorder(node.right);
			};
			traversePreorder(root);
			return arr;
		}
	};
	postOrder = () => {
		const root = this.root;
		if (root == null) {
			return null;
		} else {
			const arr = new Array();

			const postOrder = (node) => {
				node.left && postOrder(node.left);
				node.right && postOrder(node.right);
				arr.push(node.data);
			};
			postOrder(root);
			return arr;
		}
	};
	levelOrder = () => {
		let arr = [];
		let Q = [];
		if (this.root == null) {
			return null;
		} else {
			Q.push(this.root);
			while (Q.length > 0) {
				let node = Q.shift();
				arr.push(node.data);
				if (node.left != null) {
					Q.push(node.left);
				}
				if (node.right != null) {
					Q.push(node.right);
				}
			}
			return arr;
		}
	};
	deleteData = (data) => {
		if (this.root == null) {
			return -1;
		}
		let current = this.root;
		const searchAndDelete = (node, data) => {
			console.log(node.data);
			if (node.data === data) {
				if (node.left == null && node.right === null) {
					return null;
				} else if (node.left == null) {
					return node.right;
				} else if (node.right == null) {
					return node.left;
				}

				let tempnode = node.right;
				while (tempnode.left != null) {
					tempnode = tempnode.left;
				}
				node.data = tempnode.data;
				node.right = searchAndDelete(tempnode.right, tempnode.data);
				return node;
			} else {
				if (node.data > data) {
					node = node.left;
					return searchAndDelete(node, data);
				} else {
					node = node.right;
					return searchAndDelete(node, data);
				}
			}
		};
		this.roote = searchAndDelete(this.root, data);
	};
}

var b = new BST();

b.add(20);
b.add(15);
b.add(18);
b.add(9);
b.add(3);
b.add(50);
b.add(30);
b.add(100);
console.log(b.findMax());
console.log(b.findMin());
console.log(b.find(20));
console.log(b.isPresent(200));
console.log(b.findMaxHeight());
console.log(b.findMinHeight());
console.log("indorder:" + b.inOrder());
console.log("preorder:" + b.preOrder());
console.log("postorder:" + b.postOrder());
console.log("levelOrder:" + b.levelOrder());
b.deleteData(30);
console.log("indorder:" + b.inOrder());
