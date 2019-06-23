let appendToDOM = () => {
    let el = {
        main: document.querySelector('main'),
        list: null,
        icon: null
    };

    let _load = file => {
        return new Promise(resolve => {
            let getData = fetch(file)
                            .then(response => response.json())
                            .then(content => resolve(content));
        });
    }

    let _append = prop => {
        let parentElement = prop.parent;
        let childElement = document.createElement(prop.child);
        let text = document.createTextNode(prop.text);

        for (let key in prop.attrs) {
            childElement.setAttribute(key, prop.attrs[key]);
        }

        if (prop.parent === undefined || prop.child === undefined) {
            throw Error('parent or child properties missing from _append()');
        }

        if (prop.text) {
            childElement.appendChild(text);
        }

        parentElement.appendChild(childElement);
    }

    let _appendTitle = data => {
        return new Promise(resolve => {
            _append({
                parent: el.main,
                child: 'h2',
                text: 'Magical Title',
                attrs: {
                    class: 'main-title'
                }
            });

            resolve();
        });
    }

    let _appendList = data => {

        return new Promise(resolve => {
            _append({
                parent: el.main,
                child: 'ul',
                attrs: {
                    class: 'main-list'
                }
            });

            el.list = el.main.querySelector('ul');
            let elemCount = 0;

            for (let elem in data.list) {
                elemCount++;

                let { text, icon } = data.list[elem];

                _append({
                    parent: el.list,
                    child: 'li',
                    text: `${text} `,
                    attrs: {
                        class: `item item-${elem}`
                    }
                });


                el.icon = el.list.querySelector(`.item-${elem}`);
                _append({
                    parent: el.icon,
                    child: 'span',
                    text: icon,
                    attrs: {
                        class: `icon icon-${elem}`
                    }
                });

                console.log(elemCount === Object.keys(data.list).length)

                if (elemCount === Object.keys(data.list).length) {
                    resolve();
                }
            }
        });
    }

    let render = () => {
        return new Promise(resolve => {
            _load('./data.json').then(data => {
                let promises = [
                    _appendTitle(data),
                    _appendList(data)
                ];

                 Promise.all(promises).then(() => {
                    console.log('All promises solved.');
                    resolve();
                });
            });
        });
    }

    return { render };
}

let addAllElements = appendToDOM().render();

addAllElements.then(() => {
    console.log('ALL DONE!');
});
