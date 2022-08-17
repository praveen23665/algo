// Bubble sort

function bubbleSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let t = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = t;
			}
		}
	}
	return arr;
}

console.log(bubbleSort([4, 5, 3, 1, 2, 11, -3])); //[1,2,3,4,5]

//remove dublicate numbers from array

var numbers = [1, 3, 3, 5, 5, 7, 7];

function removeDublicates(arr) {
	let obj = {};
	let result = [];
	for (var i = 0; i < arr.length; i++) {
		if (!obj[arr[i]]) {
			result.push(arr[i]);
		}
		obj[arr[i]] = true;
	}
	return result;
}

console.log(removeDublicates(numbers));
//sorting an array of 0s and 1s

// 0,1,0,0,0,1,1,0,1
function sortArray(arr) {
	let numofzeros = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			numofzeros++;
		}
	}
	let finalarray = [];
	for (let i = 0; i < numofzeros; i++) {
		finalarray[i] = 0;
	}
	for (let i = numofzeros - 1; i < arr.length; i++) {
		finalarray[i] = 1;
	}
	return finalarray;
}

console.log("0s and 1s:", sortArray([0, 1, 0, 0, 0, 1, 1, 0, 1]));

const products = [
	{
		id: 1,
		category: "Electronics",
		type: "Mobile",
		name: "Iphone",
		price: 500,
	},
	{
		id: 2,
		category: "Electronics",
		type: "TV",
		name: "Samsung",
		price: 500,
	},
	{
		id: 3,
		category: "Electronics",
		type: "Laptop",
		name: "HP",
		price: 500,
	},
	{
		id: 4,
		category: "Electronics",
		type: "Mobile",
		name: "Iphone",
		price: 500,
	},
];

const doublePrice = products.map((item) => {
	if (item.type == "Mobile") {
		return { ...item, price: item.price * 2 };
	}
	return item;
});

const totalPrice = products
	.filter((item) => item.type == "Mobile")
	.reduce((total, item) => {
		total = total + item.price;
		return total;
	}, 0);

console.log(doublePrice, totalPrice);

// sum of digits

function sumOfDigits(num) {
	let digits = num.toString().split("").map(Number);
	return digits.reduce((total, current) => {
		let sum = total + current;
		if (sum > 9) {
			return sumOfDigits(sum);
		} else {
			return sum;
		}
	});
}
console.log(sumOfDigits(921));

// exponent of number
//power(2,4) = 16 , 2*2*2*2

function power(base, exp) {
	if (exp === 0) {
		return 1;
	}
	return base * power(base, exp - 1);
}

console.log(power(11, 2));

// mind mininum number in sorted and rotated array;
// [3,4,5,6,1,2] output:1

function binaryFind(arr) {
	let start = 0;
	let mid = Math.ceil((arr.length - 1) / 2);
	let end = arr.length - 1;
	console.log(start, mid, end, arr);
	while (mid > 0 && mid < end) {
		console.log(mid);
		if (arr[mid] < arr[mid - 1]) {
			return arr[mid];
		} else if (arr[mid] > arr[end]) {
			start = mid;
			mid = Math.ceil((start + end) / 2);
		} else {
			end = mid;
			mid = Math.ceil((start + end) / 2);
		}
	}
}

console.log(binaryFind([3, 4, 5, 6, 7, 8, 22, -1, 0, 2]));
