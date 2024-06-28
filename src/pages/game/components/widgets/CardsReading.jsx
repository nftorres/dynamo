import React from "react";
import StacksList from "../shared/StacksList";
import { useGameContext } from "../../providers/GameProvider";

export default function CardsReading({ active = true }) {
    const gameContext = useGameContext();
    return (
        <div className="py-8 rounded-lg bg-neutral-950">
            <StacksList stacks={gameContext.cards} />
        </div>
    );
}
