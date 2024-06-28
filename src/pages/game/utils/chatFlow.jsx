import DeckSelector from "../components/widgets/DeckSelector";
import CardsSelector from "../components/widgets/CardsSelector";
import CardsReading from "../components/widgets/CardsReading";
import CardReveal from "../components/widgets/CardReveal";
import { sortStacks } from "./helpers/gameHelpers";

export default {
    welcome_message: {
        meta: {
            sender: "dynamo",
            active: true,
            next: "cards_selector",
        },
        content: {
            text: "¡Hola! ✨ Soy Dynamo. ¿Te atreves a desafiarme en un duelo de magia? 😏 ¡Excelente! Para iniciar este fascinante viaje, selecciona una baraja y prepárate para la magia. 🃏🔮✨",
            widget: {
                title: "Selector de la baraja",
                type: "static",
                view: DeckSelector,
            },
        },
        options: [
            {
                label: "Baraja Española",
                action: ({ gameToggleContext }) => {
                    const { selectDeck } = gameToggleContext;
                    selectDeck("spanish_deck");
                    console.log("Baraja lista...");
                },
            },
            {
                label: "Poker",
                action: ({ gameToggleContext }) => {
                    const { selectDeck } = gameToggleContext;
                    selectDeck("poker_deck");
                    console.log("Baraja lista...");
                },
            },
            {
                label: "Tarot",
                action: ({ gameToggleContext }) => {
                    const { selectDeck } = gameToggleContext;
                    selectDeck("tarot_deck");
                    console.log("Baraja lista...");
                },
            },
        ],
    },
    cards_selector: {
        meta: {
            sender: "dynamo",
            active: true,
            next: "first_reading",
        },
        content: {
            text: "¡Excelente! 🎩✨ He invocado al azar 21 cartas de la baraja que elegiste. 🃏✨ Ahora, necesito tu confirmación: ¿deseas que continúe con estas cartas mágicas o prefieres cambiarlas usando los botones encantados de abajo? 🔄✨👇",
            widget: {
                title: "Selector de las cartas",
                type: "interactive",
                view: CardsSelector,
            },
        },
        options: [
            {
                label: "Continuar",
                action: () => {
                    console.log("Cartas listas...");
                },
            },
        ],
    },
    first_reading: {
        meta: {
            sender: "dynamo",
            active: true,
            next: "second_reading",
        },
        content: {
            text: "¡Estamos listos! 🎉 Que comience el espectáculo... Voy a presentarte tres montones de cartas. Elige una carta en tu mente y luego indícame en cuál montón se encuentra. 🃏✨",
            widget: {
                title: "Contenedor de la primera tirada de cartas",
                type: "static",
                view: CardsReading,
            },
        },
        options: [
            {
                label: "Montón 1",
                action: ({ gameContext, gameToggleContext }) => {
                    const { saveCards } = gameToggleContext;
                    const newCards = sortStacks(gameContext.cards, 0);
                    saveCards(newCards);
                },
            },
            {
                label: "Montón 2",
                action: ({ gameContext, gameToggleContext }) => {
                    const { saveCards } = gameToggleContext;
                    const newCards = sortStacks(gameContext.cards, 1);
                    saveCards(newCards);
                },
            },
            {
                label: "Montón 3",
                action: ({ gameContext, gameToggleContext }) => {
                    const { saveCards } = gameToggleContext;
                    const newCards = sortStacks(gameContext.cards, 2);
                    saveCards(newCards);
                },
            },
        ],
    },
    second_reading: {
        meta: {
            sender: "dynamo",
            active: true,
            next: "third_reading",
        },
        content: {
            text: "¡Excelente! 🎉 Vamos por la segunda ronda. Te mostraré nuevamente los tres montones de cartas. Tu carta pudo haber cambiado de posición, así que necesito que me indiques en qué montón se encuentra ahora. 🃏🔄.",
            widget: {
                title: "Contenedor de la segunda tirada de cartas",
                type: "static",
                view: CardsReading,
            },
        },
        options: [
            {
                label: "Montón 1",
                action: ({ gameContext, gameToggleContext }) => {
                    const { saveCards } = gameToggleContext;
                    const newCards = sortStacks(gameContext.cards, 0);
                    saveCards(newCards);
                },
            },
            {
                label: "Montón 2",
                action: ({ gameContext, gameToggleContext }) => {
                    const { saveCards } = gameToggleContext;
                    const newCards = sortStacks(gameContext.cards, 1);
                    saveCards(newCards);
                },
            },
            {
                label: "Montón 3",
                action: ({ gameContext, gameToggleContext }) => {
                    const { saveCards } = gameToggleContext;
                    const newCards = sortStacks(gameContext.cards, 2);
                    saveCards(newCards);
                },
            },
        ],
    },
    third_reading: {
        meta: {
            sender: "dynamo",
            active: true,
            next: "before_revelation",
        },
        content: {
            text: "¡Perfecto! 🎉 Ahora vamos a la tercera y última ronda. Te mostraré los tres montones de cartas una vez más. Tu carta pudo haber cambiado de posición nuevamente, así que necesito que me indiques en qué montón se encuentra ahora. 🃏🔄 ¡Esta es la definitiva! 🌟",
            widget: {
                title: "Contenedor de la tercera tirada de cartas",
                type: "static",
                view: CardsReading,
            },
        },
        options: [
            {
                label: "Montón 1",
                action: ({ gameContext, gameToggleContext }) => {
                    const { saveCards } = gameToggleContext;
                    const newCards = sortStacks(gameContext.cards, 0);
                    saveCards(newCards);
                },
            },
            {
                label: "Montón 2",
                action: ({ gameContext, gameToggleContext }) => {
                    const { saveCards } = gameToggleContext;
                    const newCards = sortStacks(gameContext.cards, 1);
                    saveCards(newCards);
                },
            },
            {
                label: "Montón 3",
                action: ({ gameContext, gameToggleContext }) => {
                    const { saveCards } = gameToggleContext;
                    const newCards = sortStacks(gameContext.cards, 2);
                    saveCards(newCards);
                },
            },
        ],
    },
    before_revelation: {
        meta: {
            sender: "dynamo",
            active: true,
            next: "revealing_card",
        },
        content: {
            text: "¡Ha llegado la hora de la revelación final! 🎩✨. He seguido cuidadosamente cada una de tus elecciones y ahora estoy listo para revelar la carta que has elegido en tu mente. Siente la tensión y la emoción en el aire mientras la magia cobra vida ante tus ojos 🃏✨. Respira hondo y prepárate, porque en un instante, todo quedará claro. Estoy a punto de mostrarte que la magia y la tecnología pueden trabajar juntas de una manera realmente sorprendente 😲🔍. Cada decisión que tomaste, cada elección que hiciste, ha llevado a este momento. La carta que elegiste está a punto de ser revelada. ¿Estás listo/a para descubrir si he leído tu mente con precisión? ¿Estás preparado/a para ser sorprendido/a por la magia digital? ¡Aquí vamos! 🚀✨",
            widget: null,
        },
        options: [
            {
                label: "Estoy Listo/a",
                action: () => {},
            },
        ],
    },
    revealing_card: {
        meta: {
            sender: "dynamo",
            active: true,
            next: null,
        },
        content: {
            text: "El momento ha llegado. He usado la magia y tecnología para leer tu mente 🧠. La carta que elegiste es... 🃏🔮",
            widget: {
                title: "Contenedor de la revelación de la carta del usuario",
                type: "static",
                view: CardReveal,
            },
        },
        options: [
            {
                label: "¿Cómo adivinaste mi carta?",
                action: ({ navigate }) => {
                    navigate("/tutorial");
                },
            },
        ],
    },
};
