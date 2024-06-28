import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export default function SideBarLink({ item }) {
    const cssLink =
        "flex flex-row items-center space-x-4 p-3 font-light text-base rounded-full hover:cursor-pointer hover:bg-neutral-900";
    const cssActiveLink = "font-semibold";
    const { pathname } = useLocation();
    return (
        <Link
            to={item.path}
            className={classNames(
                pathname === item.path ? cssActiveLink : "",
                cssLink
            )}
        >
            <div>{item.icon}</div>
            <span>{item.label}</span>
        </Link>
    );
}
