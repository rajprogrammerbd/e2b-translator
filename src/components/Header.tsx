import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

function Header() {
    const isLogin = useSelector((state: RootState) => state.login.isLogin);

    return (
        <div className="px-4 py-2 md:py-3 bg-sky-500">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-white text-base md:text-lg drop-shadow-2xl">Translator</Link>
                {isLogin ? null : <Link to="/login" className="border text-xs px-2 py-1 bg-sky-500 hover:bg-sky-50 hover:text-sky-500 hover:ease-in-out duration-300 text-slate-200 rounded border-gray-200 shadow-sm font-sans subpixel-antialiased font-bold">Login</Link>}
            </div>
        </div>
    );
}

export default Header;
