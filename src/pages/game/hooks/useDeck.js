import decks from "../../../assets/data/decks.js";

export function useDeck() {
    return Object.keys(decks).map((deck) => ({
        key: deck,
        name: decks[deck].name,
        thumbnail: decks[deck].thumbnail,
    }));
}
