import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Button from "./Button";

import{
    FavoriteBorder, MenuRounded, SearchRounded, ShoppingCartOutlined
} from '@mui/icons-material';

import {Avatar} from "@mui/material";
import {logout} from "../redux/reducers/userSlice"
import {useDispatch} from "react-redux";
import LogoImg from "../utils/Images/Logo.svg";

const Navbar = () => {
    return <nav>
        <NavbarContainer>
            
            <NavLogo></NavLogo>

        </NavbarContainer>
        
        </nav>;
};

export default Navbar;