function mySet() {
	var collection = [];

	this.has = function (element) {
		return collection.indexOf(element) != -1;
	};

	this.values = function () {
		return collection;
	};
	this.add = function (element) {
		if (!this.has(element)) {
			collection.push(element);
			return true;
		}
		return false;
	};
	this.remove = function (element) {
		if (this.has(element)) {
			let index = this.collection.indexOf(element);
			collection.splice(index, 1);
			return true;
		}
		return false;
	};
	this.size = function () {
		return collection.length;
	};

	this.union = function (otherSet) {
		var unionSet = new mySet();
		var firstSet = this.values;
		var secondSet = otherSet.values();
		firstSet.forEach((element) => {
			unionSet.add(element);
		});
		secondSet.forEach((element) => {
			unionSet.add(element);
		});
		return unionSet;
	};

	this.intersection = function (otherSet) {
		var intersectionSet = new mySet();
		var firstSet = this.values();
		firstSet.forEach((element) => {
			if (otherSet.has(element)) {
				intersectionSet.add(element);
			}
		});
		return intersectionSet;
	};
	this.difference = function (otherSet) {
		var differenceSet = new mySet();
		var firstSet = this.values();
		firstSet.forEach((element) => {
			if (!otherSet.has(element)) {
				differenceSet.add(element);
			}
		});
		return differenceSet;
	};
	// this.every = function (callback) {
	// 	this.values().forEach((element) => {
	// 		console.log(callback(element));
	// 		if (!callback(element)) {
	// 			console.log(element, "if");
	// 			return false;
	// 		}
	// 	});
	// 	return true;
	// };
	this.subset = function (otherSet) {
		return this.values().every(function (value) {
			console.log(value);
			return otherSet.has(value);
		});
	};
}
var setA = new mySet();
var setB = new mySet();

setA.add("a");
setA.add("b");
setA.add("c");
setA.add("d");
setB.add("a");
setB.add("x");
console.log(setA.values(), setB.values()); //values
console.log(setA.subset(setB)); //false
console.log(setA.intersection(setB).values()); //['a']
console.log(setA.difference(setB).values()); //['b','c','d']
