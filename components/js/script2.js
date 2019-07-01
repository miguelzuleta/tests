let main = document.querySelector('main');

let traverse = (elem, callback) => {
    let elemChildren = elem.children ? Array.from(elem.children) : null;

   if (elemChildren) {
    elemChildren.forEach(childElem => {
        callback(childElem);

        if (childElem.children.length) {
            traverse(childElem, callback);
        }
    });
   }
};

let logElem = elem => {
    console.log(elem);
}

traverse(main, logElem);