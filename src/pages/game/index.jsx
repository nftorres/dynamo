import React from "react";
import { GameProvider } from "./providers/GameProvider";
import GameLayout from "./components/layout/GameLayout";

export default function Game() {
    return (
        <GameProvider>
            <GameLayout />
        </GameProvider>
    );
}
