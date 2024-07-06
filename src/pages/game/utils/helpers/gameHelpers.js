function stackingCards(cardsList = []) {
	const numStacks = 3;
	const stackLength = Math.round(cardsList.length / numStacks);

	const stacks = [];
	for (let i = 0; i < numStacks; i++) {
		const startStack = i * stackLength;
		const endStack = startStack + stackLength;
		stacks.push(cardsList.slice(startStack, endStack));
	}

	return stacks;
}

function select21Cards(cardsList = []) {
	const cards = [...cardsList];
	const selectedCards = [];
	for (let i = 0; i < 21; i++) {
		let n = Math.floor(Math.random() * cards.length);
		selectedCards.push(cards.splice(n, 1)[0]);
	}
	return stackingCards(selectedCards);
}

function shuffleCards(cardStacks = []) {
	const mergedCards = cardStacks.reduce((cards, cardStack) => {
		return [...cards, ...cardStack];
	});

	const cardsToShuffle = [...mergedCards];
	const shuffledCards = [];

	for (let i = 0; i < mergedCards.length; i++) {
		let n = Math.floor(Math.random() * cardsToShuffle.length);
		shuffledCards.push(cardsToShuffle.splice(n, 1)[0]);
	}
	return stackingCards(shuffledCards);
}

function sortStacks(cardStacks = [], middleStackIndex = 1) {
	const stacks = [...cardStacks];
	const middleStack = stacks.splice(middleStackIndex, 1)[0];
	stacks.splice(1, 0, middleStack);

	const mergedCards = stacks.reduce((cards, cardStack) => [
		...cards,
		...cardStack,
	]);

	const newStacks = [[], [], []];
	let index = 0;
	for (let i = 0; i < 7; i++) {
		for (let j = 0; j < 3; j++) {
			newStacks[j].push(mergedCards[index]);
			index += 1;
		}
	}

	return newStacks;
}

function deckBuilder(suits) {
	const cards = [];

	Object.keys(suits).forEach((suitKey) => {
		Object.keys(suits[suitKey]).forEach((cardKey) => {
			const card = suits[suitKey][cardKey];
			cards.push({
				key: cardKey,
				name: card.name,
				image: card.image,
			});
		});
	});
	return cards;
}

export { select21Cards, shuffleCards, sortStacks, deckBuilder };
