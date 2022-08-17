console.log("hello world");
/* Stack */

//funtion : pop, push , peek , length

//using array
//palindrome
function palindrome(val) {
	var letters = [];
	var word = val;
	var rword = "";

	for (var i = 0; i < word.length; i++) {
		letters.push(word[i]);
	}
	for (var i = 0; i < word.length; i++) {
		rword += letters.pop();
	}
	if (rword == word) {
		console.log(word, "is a plindrome");
	} else {
		console.log("not apalindrome");
	}
	return null;
}

var Stack = function () {
	this.count = 0;
	this.storage = [];

	this.push = function (value) {
		this.storage[this.count] = value;
		this.count++;
	};
	this.pop = function () {
		if (this.count == 0) {
			return undefined;
		}

		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	};
	this.size = function () {
		return this.count;
	};
	this.peek = function () {
		return this.storage[this.count - 1];
	};
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

myStack.push("peeking");
console.log(myStack.peek());
console.log(myStack.size());
