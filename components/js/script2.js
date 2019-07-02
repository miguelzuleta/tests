let main = document.querySelector('main');

let traverse = (elem, callback) => {
    let elemArray = Array.from(elem.children);

   for (let i = 0; i < elemArray.length; i++) {
        let childElem = elemArray[i];

        callback(childElem);

        if (childElem.children.length) {
            traverse(childElem, callback);
        }
   }
};

let logElem = elem => {
    console.log(elem);
}

// traverse(main, logElem);

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
// girl ();

let obj = {
    mig: 'uel',
    zul: 'eta',
    likes: 'eating',
    spicy: 'tacos',
    deep: {
        something: 'else',
        lives: 'here'
    }
};

let cloneObj = object => {
    let newObject = {};

    for (let key in object) {
        newObject[key] = object[key];
    }

    return newObject;
};

// console.log(obj);

// let newObj = cloneObj(obj);

// newObj['YAYAYAYAYA'] = 'DSFU9S8DUF98SUDF';

// console.log(obj);
// console.log(newObj);

let arr = 'miguel'.split('');
console.log(arr);

arr = ['BEGIN', ...arr, 'END'];
console.log(arr);

