import React from "react";
import { Link } from "react-router-dom";

export default function SocialLink({ item }) {
    const cssSocialLink = "opacity-50 hover:opacity-100";
    return (
        <Link to={item.link} className={cssSocialLink}>
            {item.icon}
        </Link>
    );
}
