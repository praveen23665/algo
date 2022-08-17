//Complexity of Hash table
// ALog   Best   Worst
// Space  O(n)^1 O(n)
// Search O(1)   O(n)
// Insert O(1)   O(n)
// Delete O(1)   O(n)

const hash = function (value, bucket) {
	var hash = 0;

	for (var i = 0; i < value.length; i++) {
		hash += value.charCodeAt(i);
	}
	console.log(value, bucket, hash);
	return hash % bucket;
};

const HashTable = function (bucket) {
	this.bucket = bucket;
	var container = [];

	this.add = (key, value) => {
		let index = hash(key, this.bucket);

		if (container[index] == undefined) {
			container[index] = [[key, value]];
		} else {
			let inserted = false;
			for (var i = 0; i < container[index].length; i++) {
				if (container[i][0] === key) {
					container[i][1] = value;
					inserted = true;
					break;
				}
			}
			if (inserted == false) {
				container[index].push([key, value]);
			}
		}
	};
	this.remove = (key) => {
		let index = hash(key, this.bucket);
		if (container[index].length == 1 && container[index][0][0] == key) {
			delete container[index];
		} else {
			for (var i = 0; i < container[index].length; i++) {
				if (container[index][i][0] == key) {
					delete container[index][i];
				}
			}
		}
	};

	this.lookUp = (key) => {
		let index = hash(key, this.bucket);
		console.log(index);
		console.log(container);
		if (container[index] == undefined) {
			return undefined;
		} else {
			for (var i = 0; i < container[index].length; i++) {
				if (container[index][i][0] == key) {
					return container[index][i];
				}
			}
		}
	};
};

let hashEx = new HashTable(10);

hashEx.add("name", "Praveen");
hashEx.add("lastName", "Kumar");
hashEx.add("mob", "909090");
hashEx.remove("name");
console.log(hashEx.lookUp("name"));
