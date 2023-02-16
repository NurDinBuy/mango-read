import React, {useState, useEffect} from 'react';
import {Box, AppBar, Container} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../redux/slices/authAndRegSlice';

import RegAuthModals from '../RegAuthModals/RegAuthModals.js';
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import LogReg from "../LogReg/LogReg";

const Header = () => {
    const dispatch = useDispatch();
    const dataLog = useSelector(state => state.auth.dataLog)
    let isLogin = useSelector(state => state.auth.logined)
    const usersList = useSelector((state) => state.auth.users);

    const [open, setOpen] = useState(false)
    const [logger, setLogger] = useState('Reg')
    const [modalStyle, setModalStyle] = useState(['none', 'static'])

    let account = usersList?.find(user => user.username === dataLog.username)
    let refreshToken = JSON.parse(JSON.stringify(localStorage.getItem('tokenRefresh')))
    if (!account) account = JSON.parse(localStorage.getItem('account'))
    if (!isLogin) isLogin = JSON.parse(localStorage.getItem('logined'))

    const closeLogModal = () => {
        setOpen(false)
        setModalStyle(['none', 'static'])
        setLogger('Log')
    }

    const openRegModal = () => {
        setOpen(true)
        setModalStyle(['block', 'absolute'])
        setLogger('Reg')
    }

    const openLogModal = () => {
        setOpen(true)
        setModalStyle(['block', 'absolute'])
        setLogger('Log')
    }

    useEffect(() => {dispatch(getUsers())}, [dispatch])


    return (
        <AppBar sx={{background: '#f3f3f3'}}>
            <Container fixed sx={{'&.MuiContainer-root': {padding: 0, width: 1240}}}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Logo />
                    <Search />
                    {isLogin ? <Profile account={account} refreshToken={refreshToken}/> : <LogReg openLog={openLogModal} openReg={openRegModal}/>}
                    <RegAuthModals account={account && account} openLog={openLogModal} openReg={openRegModal} users={usersList} open={open} modalStyle={modalStyle} modalType={logger} closeLogModal={closeLogModal}/>
                </Box>
            </Container>
        </AppBar>
    );
};

export default Header;