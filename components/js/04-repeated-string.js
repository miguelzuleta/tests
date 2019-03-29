function jumpingOnClouds(c) {

	let ar = c.split(' ');
	let cloudJump = 0;

	for (let i = 0; i < ar.length; i++) {
		if (ar[i + 2] == '0') {
			cloudJump++;
			i++;
			continue;
		}

		if (ar[i + 1] == '1') {
			cloudJump++;
			continue;
		}

		if (ar[i + 1] == '0') {
			cloudJump++;
			continue;
		}
	}

	return cloudJump;

}

console.log(jumpingOnClouds('0 0 0 0 1 0'));
