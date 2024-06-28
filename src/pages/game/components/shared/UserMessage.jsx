import React from "react";
import { LuUser } from "react-icons/lu";

export default function UserMessage({ message = {} }) {
    const { content } = message;
    return (
        <div className="flex flex-row items-start justify-end space-x-3">
            <div className="flex flex-col items-end justify-start">
                <span className="inline-block font-bold text-base">Tú</span>
                <div className="p-3 bg-neutral-900 rounded-lg">
                    <p className="font-normal text-base">{content.text}</p>
                </div>
            </div>
            <div className="flex items-start justify-start">
                <div className="flex items-center justify-center size-8 rounded-full border-[1.5px] border-neutral-500">
                    <LuUser size={18} />
                </div>
            </div>
        </div>
    );
}
