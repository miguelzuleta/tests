/*

Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

Function Description

Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

countingValleys has the following parameter(s):

n: the number of steps Gary takes
s: a string describing his path
Input Format

The first line contains an integer , the number of steps in Gary's hike. 
The second line contains a single string , of  characters that describe his path.

Constraints

Output Format

Print a single integer that denotes the number of valleys Gary walked through during his hike.

Sample Input
8
UDDDUDUU

Sample Output
1


*/
// UDDUDUDDUU
let ar = 'UUUDDDDUUDDUUUDDDDUUUD'.split('');
// let ar = 'U D D U D U D D U U'.split(' ');
// let ar = 'U D D D U D U U'.split(' ');
let counter = 0;
let valleys = 0
let inValley = false;

function countingValleys(n, s) {
	s.forEach(elem => {

		if (elem === "U") {
			counter++;
		} else if (elem === "D") {
			counter--;
		}

		if (counter < 0 && !inValley) {
			inValley = true;
		}

		if (counter >= 0 && inValley) {
			inValley = false;
			valleys++;
		}
		console.log(elem, counter, inValley, valleys)
	})

	return valleys;
}

console.log(countingValleys(ar.length, ar));

/*
UUUDDDDUUDDUUUDDDDUUUD
   /\
  /  \        /\
_/    \  /\  /  \    /\_
       \/  \/    \  /
                  \/

_/\
   \    /
    \/\/


_/\        _
   \/\/\  /
        \/



_/\  /\_
   \/

*/
