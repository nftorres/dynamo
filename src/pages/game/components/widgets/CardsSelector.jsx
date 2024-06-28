import React, { useEffect, useState, useCallback } from "react";
import useCard from "../../hooks/useCard";
import StacksList from "../shared/StacksList";
import { CgCardSpades } from "react-icons/cg";
import { TbCards } from "react-icons/tb";
import { select21Cards, shuffleCards } from "../../utils/helpers/gameHelpers";
import { useGameToggleContext } from "../../providers/GameProvider";

export default function CardsSelector({ active = true }) {
    const disabled = active ? false : true;

    const { saveCards } = useGameToggleContext();
    const cardsDeck = useCard();
    const [cards, setCards] = useState([...select21Cards(cardsDeck)]);

    const handlerSelectCards = () => {
        const selectedCards = select21Cards(cardsDeck);
        setCards([...selectedCards]);
    };

    const handlerShuffleCards = () => {
        const shuffledCards = shuffleCards(cards);
        setCards([...shuffledCards]);
    };

    useEffect(() => {
        saveCards(cards);
    }, [cards]);

    return (
        <div className="flex flex-col pb-8 rounded-lg bg-neutral-950">
            <div className="flex flex-row py-4 px-6 items-center justify-end space-x-2">
                <button
                    title="Añadir nuevas cartas"
                    className="p-2 rounded-lg opacity-60 hover:cursor-pointer hover:bg-neutral-900 hover:opacity-100"
                    disabled={disabled}
                    onClick={handlerSelectCards}
                >
                    <CgCardSpades size={20} />
                </button>
                <button
                    title="Barajar cartas"
                    className="p-2 rounded-lg opacity-60 hover:cursor-pointer hover:bg-neutral-900 hover:opacity-100"
                    disabled={disabled}
                    onClick={handlerShuffleCards}
                >
                    <TbCards size={20} />
                </button>
            </div>
            <StacksList stacks={cards} showLabels={false} />
        </div>
    );
}
