(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import s1 from './script1.js'
// import s2 from './script2.js'

var DeckOfCards = function () {
	function DeckOfCards() {
		_classCallCheck(this, DeckOfCards);

		this.deck = {};
		this.shuffle = [];

		this.deckSuits = ['spade', 'heart', 'club', 'diamond'];

		this.cardValues = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

		this.sortedDeck = document.querySelector('.sorted .deck');
		this.shuffledDeck = document.querySelector('.shuffled .deck');
	}

	_createClass(DeckOfCards, [{
		key: 'buildDeck',
		value: function buildDeck() {
			var _this = this;

			this.deckSuits.forEach(function (suit) {
				_this.cardValues.forEach(function (value) {
					var random = Math.random().toString();

					_this.shuffle.push(random);

					_this.deck[random] = {
						suit: suit,
						value: value
					};
				});
			});

			this.shuffle.sort();

			return this.deck;
		}
	}, {
		key: 'toDOM',
		value: function toDOM(elem, card) {
			elem.innerHTML += '<div class="card ' + card.suit + '-' + card.value + '"></div>';
		}
	}, {
		key: 'render',
		value: function render() {
			var deckObj = this.buildDeck();
			var keyCount = 0;

			for (var key in deckObj) {
				var shuffleKey = this.shuffle[keyCount];

				keyCount++;

				this.toDOM(this.sortedDeck, deckObj[key]);
				this.toDOM(this.shuffledDeck, deckObj[shuffleKey]);
			}
		}
	}]);

	return DeckOfCards;
}();

var newDeckOfCards = new DeckOfCards();

newDeckOfCards.render();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb21wb25lbnRzL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTtBQUNBOztJQUVNLFc7QUFDTCx3QkFBYztBQUFBOztBQUNiLE9BQUssSUFBTCxHQUFZLEVBQVo7QUFDQSxPQUFLLE9BQUwsR0FBZSxFQUFmOztBQUVBLE9BQUssU0FBTCxHQUFpQixDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCLFNBQTNCLENBQWpCOztBQUVBLE9BQUssVUFBTCxHQUFrQixDQUNqQixHQURpQixFQUNaLEdBRFksRUFDUCxHQURPLEVBQ0YsR0FERSxFQUNHLElBREgsRUFDUyxHQURULEVBQ2EsR0FEYixFQUNrQixHQURsQixFQUN1QixHQUR2QixFQUM0QixHQUQ1QixFQUNpQyxHQURqQyxFQUNzQyxHQUR0QyxFQUMyQyxHQUQzQyxDQUFsQjs7QUFJQSxPQUFLLFVBQUwsR0FBa0IsU0FBUyxhQUFULENBQXVCLGVBQXZCLENBQWxCO0FBQ0EsT0FBSyxZQUFMLEdBQW9CLFNBQVMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBcEI7QUFDQTs7Ozs4QkFFVztBQUFBOztBQUNYLFFBQUssU0FBTCxDQUFlLE9BQWYsQ0FBdUIsZ0JBQVE7QUFDOUIsVUFBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLGlCQUFTO0FBQ2hDLFNBQUksU0FBUyxLQUFLLE1BQUwsR0FBYyxRQUFkLEVBQWI7O0FBRUEsV0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixNQUFsQjs7QUFFQSxXQUFLLElBQUwsQ0FBVSxNQUFWLElBQW9CO0FBQ25CLFlBQU0sSUFEYTtBQUVuQixhQUFPO0FBRlksTUFBcEI7QUFJQSxLQVREO0FBVUEsSUFYRDs7QUFhQSxRQUFLLE9BQUwsQ0FBYSxJQUFiOztBQUVBLFVBQU8sS0FBSyxJQUFaO0FBQ0E7Ozt3QkFFSyxJLEVBQU0sSSxFQUFNO0FBQ2pCLFFBQUssU0FBTCwwQkFBc0MsS0FBSyxJQUEzQyxTQUFtRCxLQUFLLEtBQXhEO0FBQ0E7OzsyQkFFUTtBQUNSLE9BQUksVUFBVSxLQUFLLFNBQUwsRUFBZDtBQUNBLE9BQUksV0FBVyxDQUFmOztBQUVBLFFBQUssSUFBSSxHQUFULElBQWdCLE9BQWhCLEVBQXlCO0FBQ3hCLFFBQUksYUFBYSxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQWpCOztBQUVBOztBQUVBLFNBQUssS0FBTCxDQUFXLEtBQUssVUFBaEIsRUFBNEIsUUFBUSxHQUFSLENBQTVCO0FBQ0EsU0FBSyxLQUFMLENBQVcsS0FBSyxZQUFoQixFQUE4QixRQUFRLFVBQVIsQ0FBOUI7QUFDQTtBQUNEOzs7Ozs7QUFJRixJQUFJLGlCQUFpQixJQUFJLFdBQUosRUFBckI7O0FBRUEsZUFBZSxNQUFmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gaW1wb3J0IHMxIGZyb20gJy4vc2NyaXB0MS5qcydcbi8vIGltcG9ydCBzMiBmcm9tICcuL3NjcmlwdDIuanMnXG5cbmNsYXNzIERlY2tPZkNhcmRzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5kZWNrID0ge307XG5cdFx0dGhpcy5zaHVmZmxlID0gW107XG5cblx0XHR0aGlzLmRlY2tTdWl0cyA9IFsnc3BhZGUnLCAnaGVhcnQnLCAnY2x1YicsICdkaWFtb25kJ107XG5cblx0XHR0aGlzLmNhcmRWYWx1ZXMgPSBbXG5cdFx0XHQnQScsICdLJywgJ1EnLCAnSicsICcxMCcsICc5JywnOCcsICc3JywgJzYnLCAnNScsICc0JywgJzMnLCAnMidcblx0XHRdO1xuXG5cdFx0dGhpcy5zb3J0ZWREZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnRlZCAuZGVjaycpO1xuXHRcdHRoaXMuc2h1ZmZsZWREZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNodWZmbGVkIC5kZWNrJyk7XG5cdH1cblxuXHRidWlsZERlY2soKSB7XG5cdFx0dGhpcy5kZWNrU3VpdHMuZm9yRWFjaChzdWl0ID0+IHtcblx0XHRcdHRoaXMuY2FyZFZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcblx0XHRcdFx0bGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKTtcblxuXHRcdFx0XHR0aGlzLnNodWZmbGUucHVzaChyYW5kb20pO1xuXG5cdFx0XHRcdHRoaXMuZGVja1tyYW5kb21dID0ge1xuXHRcdFx0XHRcdHN1aXQ6IHN1aXQsXG5cdFx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zaHVmZmxlLnNvcnQoKTtcblxuXHRcdHJldHVybiB0aGlzLmRlY2s7XG5cdH1cblxuXHR0b0RPTShlbGVtLCBjYXJkKSB7XG5cdFx0ZWxlbS5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJjYXJkICR7Y2FyZC5zdWl0fS0ke2NhcmQudmFsdWV9XCI+PC9kaXY+YDtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgZGVja09iaiA9IHRoaXMuYnVpbGREZWNrKCk7XG5cdFx0bGV0IGtleUNvdW50ID0gMDtcblxuXHRcdGZvciAobGV0IGtleSBpbiBkZWNrT2JqKSB7XG5cdFx0XHRsZXQgc2h1ZmZsZUtleSA9IHRoaXMuc2h1ZmZsZVtrZXlDb3VudF07XG5cblx0XHRcdGtleUNvdW50Kys7XG5cblx0XHRcdHRoaXMudG9ET00odGhpcy5zb3J0ZWREZWNrLCBkZWNrT2JqW2tleV0pO1xuXHRcdFx0dGhpcy50b0RPTSh0aGlzLnNodWZmbGVkRGVjaywgZGVja09ialtzaHVmZmxlS2V5XSk7XG5cdFx0fVxuXHR9XG59XG5cblxubGV0IG5ld0RlY2tPZkNhcmRzID0gbmV3IERlY2tPZkNhcmRzO1xuXG5uZXdEZWNrT2ZDYXJkcy5yZW5kZXIoKTtcbiJdfQ==
