export function addUserMessage(label, gameState) {
    const { game, setGameState } = gameState;
    setGameState({
        chat: [
            ...game.chat,
            {
                sender: "user",
                text: label,
            },
        ],
    });
}
