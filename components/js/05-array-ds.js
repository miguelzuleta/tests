let arr = [
	[ 1, 1, 1, 0, 0, 0 ],
	[ 0, 1, 0, 0, 0, 0 ],
	[ 1, 1, 1, 0, 0, 0 ],
	[ 0, 0, 2, 4, 4, 0 ],
	[ 0, 0, 0, 2, 0, 0 ],
	[ 0, 0, 1, 2, 4, 0 ]
];

let glassWidth = 3;
let waistWidth = 1;
let row = arr[0].length;
let column = arr.length;

let glassPerRow = row - (glassWidth - waistWidth);
let glassPerColumn = column - (glassWidth - waistWidth);
let glassGrid = glassPerRow * glassPerColumn;

let allHourGlasses = [];
let currentHourGlass = [];

let columnCount = 0;
let rowCount = 0;

for (let j = 0; j < glassGrid; j++) {
	currentHourGlass.push([
		arr[0 + rowCount][0 + columnCount],
		arr[0 + rowCount][1 + columnCount],
		arr[0 + rowCount][2 + columnCount],
		arr[1 + rowCount][1 + columnCount],
		arr[2 + rowCount][0 + columnCount],
		arr[2 + rowCount][1 + columnCount],
		arr[2 + rowCount][2 + columnCount]
	]);

	columnCount++;

	if (columnCount === glassPerRow) {
		rowCount++;
		columnCount = 0;
	}

	allHourGlasses.push(currentHourGlass);
}

let hourGlassCount = allHourGlasses.map((arr, index) => {
	return arr[index].reduce((num, acc) => num + acc, 0);
})

let biggestHourGlass = hourGlassCount.reduce((num, acc) => Math.max(num, acc));

console.log('glassPerRow', glassPerRow)
console.log('glassPerColumn', glassPerColumn)
console.log('glassGrid', glassGrid)

console.log(currentHourGlass);
console.log(hourGlassCount)
console.log(biggestHourGlass);

