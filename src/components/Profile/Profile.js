import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {logOutAcc} from "../../redux/slices/authAndRegSlice";
import {useDispatch} from "react-redux";

const Profile = (props) => {
    const { account, refreshToken } = props
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logOutAcc({
            refresh: refreshToken
        }))
        localStorage.removeItem('tokenAccess')
        localStorage.removeItem('tokenRefresh')
        localStorage.removeItem('account')
        localStorage.setItem('logined', false)
    }

    return (
        <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Box>
                <Typography variant='span' sx={{color: '#000', fontSize: '24px'}}>
                    {account?.username}
                </Typography>
            </Box>
            <Box sx={{
                backgroundImage: `url(${account?.image_file})`,
                width: '80px',
                height: '80px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%',
            }}>

            </Box>
            <Button variant='contained' onClick={logOut}>
                <Typography variant='span'>Выйти</Typography>
            </Button>
        </Box>
    );
};

export default Profile;
