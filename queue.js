function Queue() {
	collection = [];

	this.print = function () {
		console.log(collection);
	};
	this.enqueue = function (element) {
		collection.push(element);
	};
	this.dequeue = function (element) {
		return collection.shift();
	};
	this.front = function () {
		return collection[0];
	};
	this.size = function () {
		return collection.length;
	};
	this.isEmpty = function () {
		return collection.length === 0;
	};
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print(); //['a','b','c']
q.dequeue();
console.log(q.size()); //2
q.print(); //['b','c']
console.log(q.front()); //b
console.log(q.isEmpty()); //false

//Priority  Queue
function priorityQueue() {
	var collection = [];
	this.printCollection = () => {
		console.log(collection);
	};
	this.enqueue = (element) => {
		if (this.isEmpty()) {
			collection.push(element);
		} else {
			var added = false;
			for (var i = 0; i < collection.length; i++) {
				if (element[1] < collection[i][1]) {
					collection.splice(i, 0, element);
					added = true;
					break;
				}
			}
			if (!added) {
				collection.push(element);
			}
		}
	};
	this.dequeue = function (element) {
		var value = collection.shift();
		return value[0];
	};
	this.front = function () {
		return collection[0][0];
	};
	this.size = function () {
		return collection.length;
	};
	this.isEmpty = function () {
		return collection.length === 0;
	};
}

var pq = new priorityQueue();

pq.enqueue(["a", 1]);
pq.enqueue(["v", 2]);
pq.enqueue(["x", 3]);
pq.enqueue(["k", 2]);
pq.printCollection();
console.log(pq.front());
