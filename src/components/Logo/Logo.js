import React from 'react';
import {Box, Typography} from "@mui/material";
import logo from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="/">
            <Box sx={{display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'space-between'}}>
                <Box>
                    <img src={logo} alt="logo" style={{width: '104px', height: '83px'}}/>
                </Box>
                <Box>
                    <Typography variant="h4">
                        MangoRead
                    </Typography>
                    <Typography variant="span" sx={{fontSize: '16px', color: '#878787'}}>
                        Читай мангу с нами
                    </Typography>
                </Box>
            </Box>
        </NavLink>
    );
};

export default Logo;
