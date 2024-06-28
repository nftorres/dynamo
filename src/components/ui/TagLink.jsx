import React from "react";
import { Link } from "react-router-dom";

export default function TagLink({ item }) {
    const cssTagLink = "font-normal text-sm opacity-60 hover:underline";
    return (
        <Link to={item.path} className={cssTagLink}>
            {item.label}
        </Link>
    );
}
