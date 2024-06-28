import React from "react";

export default function DeckThumbnail({ deckThumbnail }) {
    return (
        <div className="flex flex-col items-center justify-center space-y-3 text-white">
            <div className="text-center font-medium text-normal">
                <span>{deckThumbnail.name}</span>
            </div>
            <div className="w-[120px] h-[180px] select-none flex items-center justify-center bg-white rounded-lg">
                <img
                    src={deckThumbnail.thumbnail}
                    alt={deckThumbnail.name}
                    width={60}
                    height={60}
                    draggable="false"
                />
            </div>
        </div>
    );
}
