import { useGameContext } from "../providers/GameProvider.jsx";
import GAME_CONFIG from "../game.config.js";

function useCard() {
    const gameContext = useGameContext();
    const deck = GAME_CONFIG.decks[gameContext.deck];
    if (!deck || !deck.cards) {
        return [];
    }

    const cards = [];

    Object.keys(deck.cards).forEach((suit) => {
        Object.keys(deck.cards[suit]).forEach((cardKey) => {
            const card = deck.cards[suit][cardKey];
            cards.push({
                key: cardKey,
                name: card.name,
                image: card.image,
            });
        });
    });
    return cards;
}

export default useCard;
