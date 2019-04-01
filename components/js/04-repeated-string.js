let fs = require('fs');

let str = 'gfcaaaecbg';
let num = 547602;
// let str = 'aba';
// let num = 10;
let timerInit = 0;

function repeatedString(s, n) {
	let strLength = s.length;
	let matchRegex = new RegExp(s.charAt(0), 'g');
	let matchExp = str => str.match(matchRegex).length;

	let matchLength = matchExp(s);
	let remainderVal = n % strLength;
	let remainderMatch = 0;

	console.log('n = ', n);
	console.log('strLength = ', strLength);
	console.log('matchLength = ', matchLength);
	console.log('remainderVal = ', remainderVal);

	if (remainderVal > 0) {
		remainderMatch = matchExp(s.substring(-1, remainderVal));
	}

	console.log('match in remainder = ', s.substring(-1, remainderMatch))
	console.log(`formula = (((${n} - ${remainderVal}) / ${strLength}) * ${matchLength}) + ${remainderMatch}`)

	let repeatNum = (((n - remainderVal) / strLength) * matchLength) + remainderMatch;

	console.log('\n');

	return repeatNum;

}

let fullStr = new Promise(resolve => {
	let newStr = '';

	let strLength = str.length;
	let matchRegex = new RegExp(str.charAt(0), 'g');
	let matchExp = strMatch => strMatch.match(matchRegex).length;

	let matchLength = matchExp(str);
	let remainderVal = num % strLength;

	let newStrCount = ((num - remainderVal) / strLength);
	let remainderStr = str.substring(-1, remainderVal);

	function count(timer) {
		timerInit++;

		console.log(timerInit)

		if (timerInit > newStrCount) {
			newStr += remainderStr;
			resolve(newStr);
			return;
		} else {
			newStr += `${str}`;
			setTimeout(count, 5)
		}
	}

	count(0);
})



fullStr.then((resolve) => {
	let matchRegex = new RegExp(resolve.charAt(0), 'g');
	let matchExp = matchStr => matchStr.match(matchRegex).length;

	fs.writeFile(__dirname + `/../../repeated_test/${str}-${num}.txt`, resolve, error => {
		if (error){
			return console.log(error)
		}

		console.log('- - - - - - - - - - - ');
		console.log("repeatedString(str, num) = ", repeatedString(str, num));
		console.log('matchExp(resolve) = ', matchExp(resolve));
		console.log('- - - - - - - - - - - ');
	})
})

