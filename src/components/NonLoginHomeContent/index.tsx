import React from 'react';
import { useFlags } from 'flagsmith/react';
import { Link } from "react-router-dom";
import Button from '../../common/Buttons';

function NonLoginHomeContent() {
    const featureFlags = useFlags(['demo_flag_for_testing']);
    const flags =  featureFlags['demo_flag_for_testing'].enabled;

    return (
        <>
            {flags ? <h3 className="">Hello World!</h3> : null }
            <div className="flex container h-screen items-start flex-col justify-center">
            <h5 className="px-3 xxs:px-0 text-2xl md:text-4xl font-bold ">Word meaning needs to be memorized...</h5>
            <Button to="/login" message="Get Started" size="lg" />
            </div>
        </>
    );
}

export default NonLoginHomeContent;
