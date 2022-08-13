import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import Button from "../common/Buttons";
import { useLogoutRequestMutation } from '../redux/services/loginApi';
import { resetLogin } from "../redux/slice/login";

function Header() {
    const isLogin = useSelector((state: RootState) => state.login.isLogin);
    const [logoutRequest] = useLogoutRequestMutation();
    const dispatch = useDispatch();

    const fn = async () => {
        logoutRequest();
        dispatch(resetLogin({}));
    }

    return (
        <div className="px-4 py-2 md:py-3 bg-sky-500">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-white text-base md:text-lg drop-shadow-2xl">Translator</Link>
                {isLogin ? <Button to="/login" noRoute fn={fn} message="Logout" size="xs" /> : <Button to="/login" message="Login" size="xs" />}
            </div>
        </div>
    );
}

export default Header;
