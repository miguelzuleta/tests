// function minBribes(q) {
// 	let tooChaotic = false;
// 	let bribeCount = 0;

// 	for (let i = 0; i < q.length; i++) {
// 		console.log(q[i] - (i + 1))
// 		let bribePos = q[i] - (i + 1);

// 		if (bribePos > 2) {
// 			tooChaotic = true;
// 			break;
// 		}

// 		if (bribePos > 0) {
// 			bribeCount += bribePos;
// 		}
// 	}

// 	console.log(tooChaotic ? 'Too chaotic' : bribeCount);
// 	// return tooChaotic ? 'Too chaotic' : bribeCount;
// }

function minBribes(q) {
	let tooChaotic = false;
	let bribeCount = 0;

	for (let i = 0; i < q.length; i++) {
		console.log(q[i] - (i + 1))
		let bribePos = q[i] - (i + 1);

		if (bribePos > 2) {
			tooChaotic = true;
			break;
		}

		if (bribePos > 0) {
			bribeCount += bribePos;
		}
	}

	console.log(tooChaotic ? 'Too chaotic' : bribeCount);
	// return tooChaotic ? 'Too chaotic' : bribeCount;
}

// minBribes([ 2, 1, 5, 3, 4 ]);
// minBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ]);
         // 1, 2, 3, 4, 5, 6, 7, 8

// console.log('- - - - - - - - - - - - - -')

function minimumBribes(q) {

  let n = q.length

  let c = 0
  for (let p = n; p-- > 0;) {
    if (q[p] - (p + 1) > 2) {
    	console.log(`${q[p]} - (${p} + 1) > 2`)
    	console.log(q[p] - (p + 1) > 2)
      c = "Too chaotic"
      break;
    }
    // console.log('q[p] - 2', q[p] - 2)
  		console.log('p', p)
  		console.log('q[p]', q[p], '- 2 =', q[p] - 2)
    for (let j = q[p] - 2; j < p; j++) {
  		console.log('j', j)
      if (q[j] > q[p]) {
  		console.log('q[j]', q[j], '>', q[p], 'pass')
    	// console.log(q[p], q[p] - 2)
    	// console.log(j, q, q[j])
        	c++
    	} else {
  		console.log('q[j]', q[j], '<', q[p],'fail')
    		// console.log('x')
    	}
    }
  	console.log('- - - -')
  }
  console.log(c)
}

// minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ]);
minimumBribes([ 2, 1, 5, 3, 4 ]);
