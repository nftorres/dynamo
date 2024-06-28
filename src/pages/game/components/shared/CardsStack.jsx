import React from "react";
import Card from "./Card";

export default function CardsStack({ cardsList = [] }) {
    return (
        <div className="relative flex flex-col space-y-2">
            {cardsList.map((card, index) => (
                <Card key={index} card={card} />
            ))}
        </div>
    );
}
