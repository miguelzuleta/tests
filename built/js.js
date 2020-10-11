(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var append = function append(props) {
  var parent = props.parent,
      child = props.child;
  var dataAttr = 'data-current-elem';
  var parentElems = [];
  var svgElems = ['animate', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'defs', 'desc', 'discard', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'foreignObject', 'g', 'hatch', 'hatchpath', 'image', 'line', 'linearGradient', 'marker', 'mask', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'set', 'solidcolor', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title', 'tspan', 'unknown', 'use', 'view'];

  if (_typeof(parent) == 'object') {
    parentElems = Object.keys(parent).length > 1 ? _toConsumableArray(parent) : [parent];
  } else {
    parentElems = _toConsumableArray(document.querySelectorAll(parent));
  }

  parentElems.forEach(function (parentEl) {
    if (child) {
      child.forEach(function (childEl) {
        var newElem = {};

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

        if (childEl["class"]) {
          newElem.setAttribute('class', childEl["class"]);
        }

        if (childEl.id) {
          newElem.id = childEl.id;
        }

        if (childEl.text) {
          newElem.innerHTML = childEl.text;
        }

        for (var attrKey in childEl.attrs) {
          newElem.setAttribute(attrKey, childEl.attrs[attrKey]);
        }

        parentEl.appendChild(newElem);
        parentEl.removeAttribute(dataAttr);

        if (childEl['child'] && _typeof(childEl['child']) === 'object') {
          append({
            parent: "[".concat(dataAttr, "]"),
            child: childEl['child']
          });
        } else {
          newElem.removeAttribute(dataAttr);
        }
      });
    }
  });
};

var _default = append;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _append = _interopRequireDefault(require("./append"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _append["default"])({
  parent: 'h1',
  child: [{
    elem: 'span',
    text: ' ++'
  }]
});

},{"./append":1}]},{},[2]);
