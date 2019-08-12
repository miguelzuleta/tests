// import s1 from './script1.js'
// import s2 from './script2.js'

class DeckOfCards {
	constructor() {
		this.deck = {};

		this.order = {
			sorted: [],
			shuffled: []
		};

		this.deckSuits = ['spade', 'heart', 'diamond', 'club'];

		this.cardValues = [
			'A', 'K', 'Q', 'J', '10', '9','8', '7', '6', '5', '4', '3', '2'
		];

		this.sortedColumn = document.querySelector('.sorted .deck');
		this.shuffledColumn = document.querySelector('.shuffled .deck');
	}

	buildDeck() {
		this.deckSuits.forEach(suit => {
			this.cardValues.forEach(card => {
				let random = Math.random();

				this.order.sorted.push(random);
				this.order.shuffled.push(random);

				this.deck[random] = {
					suit: suit,
					card: card
				}
			});
		});

		this.order.shuffled.sort();

		return this.deck;
	}

	toDOM(elem, key) {
		// elem.innerHTML += `<p><span>${key.card}</span> of <span>${key.suit}</span></p>`;
		elem.innerHTML += `<div class="card ${key.suit}-${key.card}"></div>`;
	}

	render() {
		let deckObj = this.buildDeck();
		let keyCount = 0;

		for (let key in deckObj) {
			let randomKey = this.order.shuffled[keyCount];
			let orderedKey = this.order.sorted[keyCount];

			keyCount++;

			this.toDOM(this.sortedColumn, deckObj[orderedKey]);
			this.toDOM(this.shuffledColumn, deckObj[randomKey]);
		}
	}
}


let newDeckOfCards = new DeckOfCards;

newDeckOfCards.render();
