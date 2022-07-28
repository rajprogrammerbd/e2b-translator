import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import Button from "../common/Buttons";

function Header() {
    const isLogin = useSelector((state: RootState) => state.login.isLogin);

    return (
        <div className="px-4 py-2 md:py-3 bg-sky-500">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-white text-base md:text-lg drop-shadow-2xl">Translator</Link>
                {isLogin ? null : <Button to="/login" message="Login" size="xs" />}
            </div>
        </div>
    );
}

export default Header;
