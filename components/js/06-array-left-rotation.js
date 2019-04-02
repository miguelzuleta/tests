let arr = [1, 2, 3, 4, 5];

function left(a, d) {
	for (let i = 0; i < d; i++) {
		let first = a[0];
		a.shift();
		a.push(first);
	}

	return a.join(' ');
}

console.log(left(arr, 4));
