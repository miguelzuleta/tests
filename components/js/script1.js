let renderList = () => {
    let _load = file => {
        return new Promise(resolve => {
            let getData = fetch(file)
                            .then(response => response.json())
                            .then(content => resolve(content));
        });
    }

    let _render = prop => {
        let parentElement = prop.parent;
        let childElement = document.createElement(prop.child);
        let text = document.createTextNode(prop.text);

        for (let key in prop.attrs) {
            childElement.setAttribute(key, prop.attrs[key]);
        }

        if (prop.parent === undefined || prop.child === undefined) {
            throw Error('parent or child properties missing from _render()');
        }

        if (prop.text) {
            childElement.appendChild(text);
        }

        parentElement.appendChild(childElement);
    }

    let _appendList = data => {

        let main = document.querySelector('main');
        _render({
            parent: main,
            child: 'ul',
            attrs: {
                class: 'main-list'
            }
        });

        let mainList = main.querySelector('ul');

        for (let elem in data.list) {

            let { text, icon } = data.list[elem];

            _render({
                parent: mainList,
                child: 'li',
                text: `${text} `,
                attrs: {
                    class: `item item-${elem}`
                }
            });


            let listIcon = mainList.querySelector(`.item-${elem}`);
            _render({
                parent: listIcon,
                child: 'span',
                text: icon,
                attrs: {
                    class: `icon icon-${elem}`
                }
            });
        }
    }

    let init = () => {
        _load('./data.json').then(data => {
            _appendList(data);
        });
    }

    return { init };
}

renderList().init();