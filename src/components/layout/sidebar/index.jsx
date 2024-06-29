import React from "react";
import SocialLink from "../../ui/SocialLink";
import TagLink from "../../ui/TagLink";
import SideBarLink from "./SideBarLink";
import { NAVBAR_LINKS, FOOTER_LINKS } from "../../../lib/consts/navigation";

export default function index() {
    return (
        <div className="bg-transparent w-80 h-full pl-10 border-r border-neutral-900 text-white">
            <div className="h-full w-full px-3 flex flex-col justify-between">
                <div className="flex flex-row items-center justify-start px-3 py-6">
                    <img src="https://nftorres.github.io/dynamo/dynamo-logo.svg" alt="Logo de Dynamo" />
                </div>
                <nav className="flex flex flex-col pt-8 pb-6">
                    {NAVBAR_LINKS.map((item) => (
                        <SideBarLink key={item.key} item={item} />
                    ))}
                </nav>
                <div className="h-px w-full bg-neutral-900"></div>
                <footer className="flex-1 flex flex-col px-3">
                    <div className="flex-1 flex-col space-y-8 pt-6">
                        <div className="flex flex-col space-y-4">
                            <p className="font-medium text-base opacity-60">
                                Proyecto
                            </p>
                            <div className="flex flex-col space-y-2.5">
                                {FOOTER_LINKS.project.map((item) => (
                                    <TagLink key={item.key} item={item} />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <p className="font-medium text-base opacity-60">
                                Social
                            </p>
                            <div className="flex flex-row space-x-4">
                                {FOOTER_LINKS.social.map((item) => (
                                    <SocialLink key={item.key} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-light text-sm opacity-60">v0.1.0</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
