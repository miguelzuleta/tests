// import s1 from './script1.js'
// import s2 from './script2.js'

class DeckOfCards {
	constructor() {
		this.deck = {};

		this.order = {
			sorted: [],
			shuffled: []
		};

		this.deckSuits = ['spade', 'heart', 'club', 'diamond'];

		this.cardValues = [
			'A', 'K', 'Q', 'J', '10', '9','8', '7', '6', '5', '4', '3', '2'
		];

		this.sortedRow = document.querySelector('.sorted .deck');
		this.shuffledRow = document.querySelector('.shuffled .deck');
	}

	buildDeck() {
		this.deckSuits.forEach(suit => {
			this.cardValues.forEach(value => {
				let random = Math.random();

				this.order.sorted.push(random);
				this.order.shuffled.push(random);

				this.deck[random] = {
					suit: suit,
					value: value
				}
			});
		});

		this.order.shuffled.sort();

		return this.deck;
	}

	toDOM(elem, card) {
		elem.innerHTML += `<div class="card ${card.suit}-${card.value}"></div>`;
	}

	render() {
		let deckObj = this.buildDeck();
		let keyCount = 0;

		for (let key in deckObj) {
			let randomKey = this.order.shuffled[keyCount];
			let orderedKey = this.order.sorted[keyCount];

			keyCount++;

			this.toDOM(this.sortedRow, deckObj[orderedKey]);
			this.toDOM(this.shuffledRow, deckObj[randomKey]);
		}
	}
}


let newDeckOfCards = new DeckOfCards;

newDeckOfCards.render();
