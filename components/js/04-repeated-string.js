let fs = require('fs');

// function repeatedString(s, n) {

// 	if (n >= Math.pow(10, 12) || s.length >= 100) {
// 		return 0;
// 	}

// 	let strLength = s.length;
// 	let matchRegex = new RegExp(s.charAt(0), 'g');
// 	let matchExp = str => str.match(matchRegex).length;

// 	let matchLength = matchExp(s);
// 	let remainderVal = n % strLength;

// 	console.log('strLength', strLength);
// 	console.log('matchLength', matchLength);
// 	console.log('remainderVal', remainderVal);

// 	if (remainderVal > 0) {
// 		remainderVal = matchExp(s.substring(-1, remainderVal));
// 	}

// 	console.log(`${n} / ${strLength} * (${matchLength} + ${remainderVal})`)

// 	let repeatNum = Math.floor(n / strLength) * (matchLength + remainderVal);

// 	// return repeatNum;

// // 
// 	console.log(repeatNum + '\n\n')

// }

function repeatedString(s, n) {

	// if (n >= Math.pow(10, 12) || s.length >= 100) {
	// 	console.log(0 + '\n\n')
	// 	return 0;
	// }

	let strLength = s.length;
	let matchRegex = new RegExp(s.charAt(0), 'g');
	let matchExp = str => str.match(matchRegex).length;

	let matchLength = matchExp(s);
	let remainderVal = n % strLength;
	let remainderMatch = 0;

	console.log('n', n);
	console.log('strLength', strLength);
	console.log('matchLength', matchLength);
	console.log('remainderVal', remainderVal);

	if (remainderVal > 0) {
		remainderMatch = matchExp(s.substring(-1, remainderVal));
	}

	console.log('s.substring(-1, remainderVal)', s.substring(-1, remainderMatch))

	// console.log(`${n} / ${strLength} * (${matchLength} + ${remainderMatch})`)
	// ((20 - 2) / 6) * (2) + 1

	console.log(`(((${n} - ${remainderVal}) / ${strLength}) * ${matchLength}) + ${remainderMatch}`)

	let repeatNum = (((n - remainderVal) / strLength) * matchLength) + remainderMatch;

	console.log(repeatNum + '\n\n')

	return repeatNum;

	/*

	(((547602 - 2) / 10) * 2) + 1
	109521
	109520 + 54760
	164280

	*/

}

// aba aba aba a

// aa aa aa a

// abcacd abcacd abcacd ab

// aa aa aa a

// console.log(
	// repeatedString('a', 1000000000000) // 4
	// repeatedString('abcacd', 20) // 7
	// // repeatedString('aba', 10) // abaabaabaa 7
	// // repeatedString('ceebbcb', 817723) // ceebbcb ceebbcb ceebbc -> 0
	repeatedString('gfcaaaecbg', 547602) // 164280
// );



// let str = 'gfcaaaecbg';
// let num = 547602;
let str = 'aba';
let num = 7;
let timerInit = 0;


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

		if (timerInit > newStrCount) {
			newStr += remainderStr;
			resolve(newStr);
			return;
		} else {
			newStr += `${str}`;
			setTimeout(count, 5)
		}

		console.log(timerInit)
	}

	count(0);
})



fullStr.then((resolve) => {
	let matchRegex = new RegExp(resolve.charAt(0), 'g');
	let matchExp = matchStr => matchStr.match(matchRegex).length;

	fs.writeFile(`${__dirname}/_test.txt`, resolve, error => {
		if (error){
			return console.log(error)
		}

		console.log('- - - - - - - - - - - ');
		console.log(matchExp(resolve));
		console.log('- - - - - - - - - - - ');
	})
})

