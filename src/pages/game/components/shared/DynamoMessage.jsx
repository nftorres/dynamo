import React from "react";
import Dynamo from "/dynamo.svg";

export default function DynamoMessage({ message = {} }) {
    const { meta, content } = message;

    const { active } = meta;
    const { text, widget } = content;

    return (
        <div className="flex flex-row items-start justify-start space-x-3 text-white">
            <div className="flex items-start">
                <div className="flex items-center justify-center size-8 rounded-full border-[1.5px] border-neutral-500">
                    <img src={Dynamo} width={18} height={18} />
                </div>
            </div>
            <div className="flex flex-col items-start">
                <span className="inline-block font-bold text-base">Dynamo</span>
                <p className="font-normal text-base">{text}</p>
                <div className="mt-4 w-full">
                    {widget === null ? <div></div> : widget.view(active)}
                </div>
            </div>
        </div>
    );
}
