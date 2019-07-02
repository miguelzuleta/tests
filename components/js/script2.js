let el = {
    main: document.querySelector('main'),
    list: null,
    icon: {}
};

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
    append({
        parent: el.main,
        child: 'h2',
        text: 'Magical Title',
        attrs: {
            class: 'main-title'
        }
    });

     append({
        parent: el.main,
        child: 'ul',
        attrs: {
            class: 'main-list'
        }
    });

    el.list = el.main.querySelector('ul');

    for (let elem in data.list) {
        let { text, icon } = data.list[elem];

        append({
            parent: el.list,
            child: 'li',
            text: `${text} `,
            attrs: {
                class: `item item-${elem}`
            }
        });


        el.icon[elem] = el.list.querySelector(`.item-${elem}`);

        append({
            parent: el.icon[elem],
            child: 'span',
            text: icon,
            attrs: {
                class: `icon icon-${elem}`
            }
        });
    }
}

let loadData = load('./data.json');

loadData.then(data => {
    listSection(data);
    // console.log(el.icon);
    el.icon.three.addEventListener('click', event => {
        console.log(event.target.innerHTML);
    });
});
