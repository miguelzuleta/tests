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

traverse(main, logElem);