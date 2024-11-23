import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { theme } from "../utils/theme";
import NavbarContainer from "./navbar/NavbarContainer";
import FooterContainer from "./footer/FooterContainer";
import {useDispatch} from 'react-redux';
import { isEs, isNotEs } from "../redux/esSlice";

const LayoutContainer = () => {
    const location = useLocation();
    const dispatcher = useDispatch();
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        if (location.pathname == "/es") {
            dispatcher(isEs());
        } else {
            dispatcher(isNotEs());
        }
    }, [location]);

    return (
        <ThemeProvider
            theme={theme}
        >
            <NavbarContainer/>
            <Outlet/>
            <FooterContainer/>
        </ThemeProvider>
    );
};

export default LayoutContainer;