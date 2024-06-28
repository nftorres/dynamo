import React, { useState, useEffect, createContext, useContext } from "react";

const gameContext = createContext({});
const gameToggleContext = createContext({});

export function GameProvider({ children }) {
    const [game, setGame] = useState({ started: false });

    const startGame = () => {
        if (!game.started) {
            setGame((prevGame) => ({
                ...prevGame,
                started: true,
            }));
            console.log(game);
        }
    };

    const selectDeck = (deckKey = "") => {
        if (!game.deck) {
            setGame((prevGame) => ({
                ...prevGame,
                deck: deckKey,
            }));
        }
    };

    const saveCards = (cards = []) => {
        setGame((prevGame) => ({
            ...prevGame,
            cards: cards,
        }));
    };

    useEffect(() => {
        console.log(game);
    }, [game]);
    return (
        <gameContext.Provider value={game}>
            <gameToggleContext.Provider
                value={{
                    startGame: startGame,
                    selectDeck: selectDeck,
                    saveCards: saveCards,
                }}
            >
                {children}
            </gameToggleContext.Provider>
        </gameContext.Provider>
    );
}

export const useGameContext = () => useContext(gameContext);

export const useGameToggleContext = () => useContext(gameToggleContext);
