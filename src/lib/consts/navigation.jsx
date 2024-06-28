import {
    RiGamepadLine,
    RiBookLine,
    RiGithubFill,
    RiLinkedinBoxFill,
} from "react-icons/ri";



export const NAVBAR_LINKS = [
    {
        key: "game",
        label: "Jugar",
        path: "/",
        icon: <RiGamepadLine size={24}/>,
    },
    {
        key: "tutorial",
        label: "Tutorial",
        path: "/tutorial",
        icon: <RiBookLine size={24}/>,
    },
];

export const FOOTER_LINKS = {
    project: [
        {
            key: "about",
            label: "Info del juego",
            path: "/about",
        },
        {
            key: "sourceCode",
            label: "Código fuente",
            path: "https://github.com/nftorres",
        },
    ],
    social: [
        {
            key: "github",
            label: "GitHub",
            link: "https://github.com/nftorres/dynamo",
            icon: <RiGithubFill size={24}/>,
        },
        {
            key: "linkedin",
            label: "LinkedIn",
            link: "https://linkedin.com/in/fabiantorresc",
            icon: <RiLinkedinBoxFill size={24}/>,
        },
    ],
};
