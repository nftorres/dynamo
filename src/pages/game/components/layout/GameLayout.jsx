import React from "react";
import { useGameContext } from "../../providers/GameProvider";
import Welcome from "../../views/welcome";
import Chat from "../../views/chat";


export default function GameLayout() {
    const game = useGameContext();
    return (
        <main className="w-full h-full">
            {game.started ? <Chat/> : <Welcome />}
        </main>
    );
}
