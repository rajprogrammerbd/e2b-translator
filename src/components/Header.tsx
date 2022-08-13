import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import Button from "../common/Buttons";
import { useLogoutRequestMutation } from '../redux/services/loginApi';
import resetReduxStore from '../redux/actions/resetReduxStore';
import useLocalStorage from "use-local-storage";
import { useCookies } from 'react-cookie';
import { resetLogin } from "../redux/slice/login";

function Header() {
    const isLogin = useSelector((state: RootState) => state.login.isLogin);
    const [logoutRequest, { isError, isSuccess, isUninitialized }] = useLogoutRequestMutation();
    const dispatch = useDispatch();
    const [persistRoot, setPersistRoot] = useLocalStorage("persist:root", "");

    const fn = async () => {
        logoutRequest();
        // setPersistRoot(undefined);
        dispatch(resetLogin({}));
        // localStorage.removeItem('persist:root');
        // window.location.reload();
    }

    useEffect(() => {
        console.log('persist:root ', persistRoot);
        // console.log('res ', JSON.parse(localStorage.getItem('persist:root') as string));
    }, [isError, isSuccess, isUninitialized]);

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
