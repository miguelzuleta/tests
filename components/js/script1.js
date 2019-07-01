let load = file => {
    return new Promise(resolve => {
        fetch(file).then(response => response.json())
                   .then(content => resolve(content));
    });
}

let append = prop => {
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

let listSection = data => {
    let el = {
        main: document.querySelector('main'),
        list: null,
        icon: null
    };

    let title = data => {
        return new Promise(resolve => {
            append({
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

    let list = data => {
        return new Promise(resolve => {
            append({
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

                append({
                    parent: el.list,
                    child: 'li',
                    text: `${text} `,
                    attrs: {
                        class: `item item-${elem}`
                    }
                });


                el.icon = el.list.querySelector(`.item-${elem}`);
                append({
                    parent: el.icon,
                    child: 'span',
                    text: icon,
                    attrs: {
                        class: `icon icon-${elem}`
                    }
                });

                if (elemCount === Object.keys(data.list).length) {
                    resolve();
                }
            }
        });
    }

    return [
        title(data),
        list(data)
    ];
}

let loadData = load('./data.json');

let render = promises => {
    return new Promise(resolve => {
        console.log('rendering...');
        Promise.all(promises).then(() => {
            resolve();
        });
    });
};

loadData.then(data => {
    render(listSection(data)).then(() => {
        console.log('yadda');
    });
});
