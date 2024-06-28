import React from "react";

export default function Card({ card }) {
    return (
        <div
            className={`w-[100px] h-[160px] transform transition duration-500 opacity-80 rounded-lg overflow-hidden select-none hover:opacity-100 hover:scale-125 hover:z-10 hover:drop-shadow-lg hover:cursor-pointer`}
        >
            <img src={card.image} alt={card.name} />
        </div>
    );
}
