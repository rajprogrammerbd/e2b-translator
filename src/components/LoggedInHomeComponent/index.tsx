import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayedAnimation } from '../../redux/slice/login';
import { RootState } from '../../redux/store';

function LoggedInHomeComponent() {
    const topUpAnimation = useSelector((state: RootState) => state.login.displayedAnimation);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state?.login?.user);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            dispatch(displayedAnimation({}));
        }, 1200);
        return () => {
            window.clearTimeout(timeout);
        }
    }, []);

    return (
        <>
            {(!topUpAnimation) ? (
                <div className="animate-out fade-out delay-700 duration-700 container h-screen flex items-center justify-center flex-col m-[-5px]">
                    <h3 className="font-dosis md:text-8xl xxz:text-9xl sm:text-5xl zzy:text-4xl mt-[-50px] tracking-wide">Welcome </h3>
                    <div className="relative text-center">
                        <div className="zzy:w-64 md:w-96 zzy:h-7 sm:h-8 md:h-14 z-0 bg-sky-500/100 drop-shadow-sm"></div>
                        <span className="text-white absolute bottom-0 left-0 z-10 tracking-wide button-0 font-dosis font-extralight zzy:text-2xl sm:text-3xl md:text-5xl animate-in slide-in-from-top duration-1000 repeat-1 ease-out">{user.name}</span>
                    </div>
                </div>
            ) : (
                <h3>Hello World!</h3>
            )}
        </>
    );
}

export default LoggedInHomeComponent;