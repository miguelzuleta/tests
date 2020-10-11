const append = props => {
    let { parent, child } = props;
    let dataAttr = 'data-current-elem';
    let parentElems = [];
    let svgElems = ['animate', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'defs', 'desc', 'discard', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'foreignObject', 'g', 'hatch', 'hatchpath', 'image', 'line', 'linearGradient', 'marker', 'mask', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'set', 'solidcolor', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title', 'tspan', 'unknown', 'use', 'view'];
    
    if (typeof parent == 'object') {
        parentElems = Object.keys(parent).length > 1 ? [...parent] : [parent];
    } else {
        parentElems = [...document.querySelectorAll(parent)];
    }

    parentElems.forEach(parentEl => {
        if (child) {
            child.forEach(childEl => {
                let newElem = {};

                if (childEl.elem) {
                    if (svgElems.includes(childEl.elem)) {
                        newElem = document.createElementNS('http://www.w3.org/2000/svg', childEl.elem);
                    } else {
                        newElem = document.createElement(childEl.elem);
                    }
                } else {
                    newElem = document.createElement('div');
                }

                newElem.setAttribute(dataAttr, '');

                if (childEl.class) {
                    newElem.setAttribute('class', childEl.class);
                }

                if (childEl.id) {
                    newElem.id = childEl.id;
                }

                if (childEl.text) {
                    newElem.innerHTML = childEl.text;
                }

                for (let attrKey in childEl.attrs) {
                    newElem.setAttribute(attrKey, childEl.attrs[attrKey]);
                }
                
                parentEl.appendChild(newElem);
                parentEl.removeAttribute(dataAttr);

                if (childEl['child'] && (typeof childEl['child'] === 'object')) {
                    append({
                        parent: `[${dataAttr}]`,
                        child: childEl['child']
                    })
                } else {
                    newElem.removeAttribute(dataAttr);
                }
            })
        }
    })
}

export default append;