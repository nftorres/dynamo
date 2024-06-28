import React from "react";
import {
    useChatContext,
    useChatToggleContext,
} from "../../providers/ChatProvider";
import {
    useGameContext,
    useGameToggleContext,
} from "../../providers/GameProvider";
import { useNavigate } from "react-router-dom";

export default function KeyBoard() {
    // Obtiene el contexto del juego
    const gameContext = useGameContext();
    const gameToggleContext = useGameToggleContext();

    // Obtiene el contexto del chat
    const {
        addUserMessage,
        addFollowingDynamoMessage,
        deactivateLastDynamoMessage,
        getLastDynamoMessage,
    } = useChatToggleContext();

    const navigate = useNavigate();

    const lastDynamoMessage = getLastDynamoMessage();

    const handlerOnClick = async (option) => {
        const userMessage = {
            meta: {
                sender: "user",
            },
            content: {
                text: option.label,
            },
        };
        await addUserMessage(userMessage);
        if (typeof option.action !== null) {
            await option.action({ gameContext, gameToggleContext, navigate });
        }
        await deactivateLastDynamoMessage();
        await addFollowingDynamoMessage();
    };
    return (
        <div className="flex items-center justify-center px-3 overscroll-none w-full h-full">
            <div className="w-full flex flex-row items-center justify-start space-x-3 overflow-hidden">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-[1.5px] border-neutral-500 select-none">
                    <span className="font-medium text-xs whitespace-nowrap">
                        Tú
                    </span>
                </div>
                <div className="flex justify-start space-x-4">
                    {lastDynamoMessage.options.map((option, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 bg-neutral-950 rounded-md hover:bg-blue-600"
                            onClick={() => handlerOnClick(option)}
                        >
                            <span className="select-none">{option.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
