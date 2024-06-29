import React from "react";
import { useGameToggleContext } from "../../providers/GameProvider";

export default function Welcome() {
    const {startGame} = useGameToggleContext();
    return (
        <div className="w-full h-full relative">
            <div className="select-none absolute inset-y-0 right-0 w-3/4 h-full z-0">
                <img
                    src="https://nftorres.github.io/dynamo/img/altar.png"
                    alt="Altar de Dynamo"
                    draggable="false"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black rounded-l-lg"></div>
            </div>

            <div className="select-none absolute inset-y-0 right-0 w-3/4 h-full flex items-center justify-center z-10">
                <img
                    src="https://nftorres.github.io/dynamo/dynamo.svg"
                    alt="Icono de Dynamo"
                    draggable="false"
                    className="w-40 h-auto mb-10 animate-up-down"
                />
            </div>

            <div className="absolute bottom-0 left-0 px-12 py-8 z-20 flex flex-col items-start space-y-12">
                <div className="flex flex-col space-y-2">
                    <h1 className="font-semibold text-5xl">Desafía a Dynamo</h1>
                    <p className="font-light text-lg">
                        ¡Leerá tu mente con un simple truco de magia!
                    </p>
                </div>
                <button
                    className="py-3 px-12 bg-blue-600 rounded-lg font-semibold hover:opacity-90"
                    onClick={startGame}
                >
                    Comenzar
                </button>
            </div>
        </div>
    );
}
