import React from "react";
import { useChatContext } from "../../providers/ChatProvider";
import UserMessage from "../../components/shared/UserMessage";
import DynamoMessage from "../../components/shared/DynamoMessage";

export default function ChatMessages() {
    const chat = useChatContext();
    return (
        <div className="px-3 py-6 flex flex-col space-y-6">
            {chat.messages.map((message, index) =>
                message.meta.sender === "user" ? (
                    <UserMessage key={index} message={message} />
                ) : (
                    <DynamoMessage key={index} message={message} />
                )
            )}
        </div>
    );
}
