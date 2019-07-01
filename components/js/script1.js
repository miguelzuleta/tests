let sum = (...args) => {
    let arg1 = args[0];
    let arg2 = args[1];
    
    if (args.length == 2) {
        return arg1 + arg2;
    } else if (args.length == 1) {
        return function(altArg2) {
            return arg1 + altArg2;
        }
    } else {
        throw Error('sum needs two arguments');
    }
}

for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
}

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   (function(i) {
//     btn.addEventListener('click', function(){ console.log(i); });
//   })(i);
//   document.body.appendChild(btn);
// }

Array(5).fill(null).map((elem, index) => index).forEach(i => {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
});

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
// console.log(arr1, arr2)
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


let isPalindrome = str => {
    let compressedStr = str.replace(/\W/g, '');
    return compressedStr === (compressedStr.split('').reverse().join(''));
};
// console.log(isPalindrome('zulet ateluz'));

let nullTest = null;
// console.log(typeof nullTest === 'object')

// console.log(typeof NaN === typeof 1);

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// console.log(sum(2, 3))
// console.log(sum(2)(3))

let newArr = num => {
    return Array(num).fill(null).map((elem, index) => index + 1);
};

// let three = newArr(3);
// let four = newArr(4);

// console.log('three', three);
// console.log('three.push(four)', three.push(four));
// console.log('three', three);

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

let eh = true;
// console.log('+eh', +eh);

// for (var i = 0; i < 5; i++) {
//  (function(k) {
//      let num = i;
//      setTimeout(function() { console.log(num); }, i * 1000 );
//  })(i);
// }

// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));


let traverse = (elem, callback) => {
    callback(elem);
    
    let list = elem.children;
    for (let i = 0; i < list.length; i++) {
        traverse(list[i], callback);
    }
}

let testElem = document.querySelector('article');
let logElem = elem => {
    console.log(elem);
}

// traverse(testElem, logElem);

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

let a = [1, 2, 3];
a[10] = 99;

// console.log(a);

// console.log(typeof undefined, typeof null);