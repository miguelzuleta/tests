// import s1 from './script1.js'
// import s2 from './script2.js'

class DeckOfCards {
	constructor() {
		this.deck = {};
		this.shuffle = [];

		this.deckSuits = ['spade', 'heart', 'club', 'diamond'];

		this.cardValues = [
			'A', 'K', 'Q', 'J', '10', '9','8', '7', '6', '5', '4', '3', '2'
		];

		this.sortedDeck = document.querySelector('.sorted .deck');
		this.shuffledDeck = document.querySelector('.shuffled .deck');
	}

	buildDeck() {
		this.deckSuits.forEach(suit => {
			this.cardValues.forEach(value => {
				let random = Math.random().toString();

				this.shuffle.push(random);

				this.deck[random] = {
					suit: suit,
					value: value
				}
			});
		});

		this.shuffle.sort();

		return this.deck;
	}

	toDOM(elem, card) {
		elem.innerHTML += `<div class="card ${card.suit}-${card.value}"></div>`;
	}

	render() {
		let deckObj = this.buildDeck();
		let keyCount = 0;

		for (let key in deckObj) {
			let shuffleKey = this.shuffle[keyCount];

			keyCount++;

			this.toDOM(this.sortedDeck, deckObj[key]);
			this.toDOM(this.shuffledDeck, deckObj[shuffleKey]);
		}
	}
}


let newDeckOfCards = new DeckOfCards;

newDeckOfCards.render();
