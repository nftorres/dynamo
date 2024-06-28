import React from "react";
import { ChatProvider } from "../../providers/ChatProvider";
import ChatMessages from "./ChatMessages";
import KeyBoard from "./KeyBoard";
import { useGameContext } from "../../providers/GameProvider";

export default function Chat() {
    const gameContext = useGameContext();
    return (
        <ChatProvider>
            {gameContext.started ? (
                <div className="w-full h-full flex flex-col">
                    <div className="px-40 max-h-[calc(100vh-80px)] overflow-y-auto">
                        <ChatMessages />
                    </div>
                    <div className="fixed bottom-0 w-full px-40 py-4 bg-black">
                        <KeyBoard />
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </ChatProvider>
    );
}
