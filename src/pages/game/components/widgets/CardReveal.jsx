import React from "react";
import Card from "../shared/Card";
import { useGameContext } from "../../providers/GameProvider";

export default function CardReveal() {
    const gameContext = useGameContext();
    const cards = [...gameContext.cards];
    const userCard = cards[1][3];
    return (
        <div className="py-12 flex items-center justify-center rounded-lg bg-neutral-950">
            <Card card={userCard} />
        </div>
    );
}
