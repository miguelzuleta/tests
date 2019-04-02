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
minBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ]);
         // 1, 2, 3, 4, 5, 6, 7, 8
