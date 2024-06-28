import CardsReading from "../../components/CardsReading";
import CardsSelector from "../../components/CardsSelector";
import DecksList from "../../components/DecksList";
import StacksList from "../../components/StacksList";
import { levelUp, saveDeck } from "../helpers/gameHelpers";

export const GAME_LEVELS = [
    {
        key: "deck selection",
        message: {
            sender: "dynamo",
            text: "¡Saludos, valiente! ✨ Soy Dynamo. ¿Te atreves a desafiarme en un duelo de magia? 😏 ¡Excelente! Para iniciar este fascinante viaje, selecciona una baraja y prepárate para la magia. 🃏🔮✨",
            widgets: [
                {
                    key: "decks list",
                    type: "static",
                    view: DecksList,
                },
            ],
        },
        keyboard: [
            {
                key: "spanish_deck",
                label: "Baraja Española",
                onClick: (gameState) => {
                    saveDeck("spanish_deck", gameState);
                    levelUp(gameState);
                },
            },
            {
                key: "poker_deck",
                label: "Poker",
                onClick: (gameState) => {
                    saveDeck("poker_deck", gameState);
                    levelUp(gameState);
                },
            },
            {
                key: "tarot_deck",
                label: "Tarot",
                onClick: (gameState) => {
                    saveDeck("tarot_deck", gameState);
                    levelUp(gameState);
                },
            },
        ],
    },
    {
        key: "cards selection",
        message: {
            sender: "dynamo",
            text: "¡Excelente! 🎩✨ He invocado al azar 21 cartas de la baraja que elegiste. 🃏✨ Ahora, necesito tu confirmación: ¿deseas que continúe con estas cartas mágicas o prefieres cambiarlas usando los botones encantados de abajo? 🔄✨👇",
            widgets: [
                {
                    key: "decks_list",
                    type: "interactive",
                    view: CardsSelector,
                },
            ],
        },
        keyboard: [
            {
                key: "save_cards",
                label: "¡Continúa con estas cartas!",
                onClick: (gameState) => {
                    levelUp(gameState);
                },
            },
        ],
    },
    {
        key: "first_reading",
        message: {
            sender: "dynamo",
            text: "¡Estamos listos! 🎉 Que comience el espectáculo... Voy a presentarte tres montones de cartas. Elige una carta en tu mente y luego indícame en cuál montón se encuentra. 🃏✨",
            widgets: [
                {
                    key: "decks_list",
                    type: "interactive",
                    view: CardsReading,
                },
            ],
        },
        keyboard: [
            {
                key: "stack1",
                label: "Montón 1",
                onClick: (gameState) => {
                    levelUp(gameState);
                },
            },
            {
                key: "stack2",
                label: "Montón 2",
                onClick: (gameState) => {
                    levelUp(gameState);
                },
            },
            {
                key: "stack3",
                label: "Montón 3",
                onClick: (gameState) => {
                    levelUp(gameState);
                },
            },
        ],
    },
];
