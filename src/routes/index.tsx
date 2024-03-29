import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/Loginpage";
import ErrorPage from '../pages/ErrorPage';
import { RootState } from "../redux/store";

function RouteApp() {
    const isLogin = useSelector((state: RootState) => state.login.isLogin);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={isLogin ? <HomePage /> : <LoginPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}

export default RouteApp;
