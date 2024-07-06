import { useGameContext } from '../providers/GameProvider.jsx';
import GAME_CONFIG from '../game.config.js';

export default function useGameDeck() {
	const { deck: deckId } = useGameContext();
	const deck = GAME_CONFIG.decks[deckId];

	if (!deck || !deck.cards) {
		return {};
	}
	return deck;
}
