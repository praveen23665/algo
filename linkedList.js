const LinkedList = function () {
	var head = null;
	var length = 0;

	var Node = function (data) {
		this.data = data;
		this.next = null;
	};
	this.size = () => {
		return length;
	};
	this.head = () => {
		return head;
	};

	this.add = (data) => {
		let current = head;
		if (head === null) {
			head = new Node(data);
		} else {
			while (current.next) {
				current = current.next;
			}
			current.next = new Node(data);
		}
		length++;
	};
	this.remove = (data) => {
		var current = head;
		var previous;
		if (current.data == data) {
			head = head.next;
		} else {
			while (current.data !== data) {
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		length--;
	};
	this.isEmpty = () => {
		return length == 0;
	};

	this.indexOf = (data) => {
		var current = head;
		var index = 0;
		while (current) {
			if (current.data === data) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	};

	this.addAt = (index, data) => {
		var node = new Node(data);
		var current = head;

		var currentIndex = 0;
		if (index > length) {
			return false;
		}
		if (index == 0) {
			node.next = current;
			head = node;
		} else {
			while (currentIndex < index) {
				current = current.next;
				currentIndex++;
			}
			nextNode = current.next;
			current.next = node;
			node.next = nextNode;
		}
		length++;
		return true;
	};
	this.removeAt = (index) => {
		var current = head;

		var currentIndex = 0;
		if (index < 0 || index > length) {
			return null;
		}
		if (index > length) {
			return false;
		}
		if (index == 0) {
			head = current.next;
		} else {
			while (currentIndex < index) {
				current = current.next;
				currentIndex++;
			}
			nextNode = current.next.next;
			current.next = nextNode;
		}
		length--;
		return true;
	};
};

var conga = new LinkedList();
conga.add("Kitten");
conga.add("Puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");
console.log(conga.size());
console.log(conga.removeAt(3));
// console.log(conga.elementAt(3));
console.log(conga.indexOf("Puppy"));
console.log(conga.size());
console.log(conga.head());
