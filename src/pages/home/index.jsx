import React from "react";
import SideBar from "../../components/layout/sidebar";
import { Outlet } from "react-router-dom";

export default function index() {
    return (
        <div className="flex flex-row bg-black h-screen w-screen overflow-hidden text-white">
            <SideBar />
            <div className="w-full h-full flex">{<Outlet />}</div>
        </div>
    );
}
