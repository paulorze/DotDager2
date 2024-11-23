import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import {useSelector} from 'react-redux';

const NavbarContainer = () => {
    const es = useSelector(store=>store.es)
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleNavigate = (url) => {
        navigate(url);
    };

    const handleOpen = ()=> {
        setOpen(prev=>true);
    };

    const handleClose = () => {
        setOpen(prev=>false);
    };

    return (
        <Navbar
            es={es}
            handleNavigate={handleNavigate}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
        />
    );
};

export default NavbarContainer;