import React from 'react';
import { Link } from "react-router-dom";

type ITypes = 'xs' | 'sm' | 'lg';

// xs => Navbar top button
// sm => ...
// lg => Homepage without login content button

interface IButton {
    message: string;
    to: string;
    size: ITypes;
}

function Button(props: IButton) {
    const { message, to, size } = props;
    let classNames;

    if (size === 'xs') {
        classNames = 'border text-xs px-2 py-1 bg-sky-500 hover:bg-sky-50 hover:text-sky-500 hover:ease-in-out duration-300 text-slate-200 rounded border-gray-200 shadow-sm font-sans subpixel-antialiased font-bold'
    } else if (size === 'lg') {
        classNames = 'px-3 py-2 xxs:px-2 rounded-md bg-transparent no-underline border-2 text-sky-400 border-sky-400 mt-3';
    }

    return (
        <Link className={classNames} to={to}>{message}</Link>
    );
}

export default Button;