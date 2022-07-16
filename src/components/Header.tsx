import React from "react";

interface IProps {
    isLogin: boolean;
}

function Header(props: IProps) {
    const { isLogin } = props;

    return (
        <div className="bg-slate-100 px-4 py-2">
            <div className="flex justify-between">
                <small className="font-dosis">Translator</small>
                {isLogin ? null : <small className="font-dosis">World</small>}
            </div>
        </div>
    );
}

export default Header;
