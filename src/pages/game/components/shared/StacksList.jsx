import React, { useEffect } from "react";
import CardsStack from "../shared/CardsStack";

export default function StacksList({ stacks = [], showLabels = true }) {
    return (
        <div className="flex flex-row items-center justify-center space-x-10">
            {stacks.map((stack, index) => (
                <div key={index} className="flex flex-col">
                    {showLabels ? (
                        <div className="inline-block mb-4 text-center font-medium text-base">
                            <span>Montón {index + 1}</span>
                        </div>
                    ) : (
                        <></>
                    )}
                    <CardsStack key={index} cardsList={stack} />
                </div>
            ))}
        </div>
    );
}
