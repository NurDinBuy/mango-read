import React from 'react';
import {Box, Button, Checkbox, TextField, Typography} from "@mui/material";
import {authorization, setPassword, setUsername} from "../../redux/slices/authAndRegSlice";
import {useDispatch, useSelector} from "react-redux";
import {swal as message} from "sweetalert";

const LogModal = (props) => {
    const {account} = props
    const dispatch = useDispatch()
    const {username, password} = useSelector(state => state.auth.dataLog)
    const logData = useSelector(state => state.auth.dataLog)

    const loginFunc = (event) => {
        event.preventDefault();
        if (username === '' || password === '') {
            message({text: 'Заполните поля!', icon: 'warning'})
        } else {
            localStorage.setItem('account', JSON.stringify(account))
            dispatch(authorization(logData))
            message({text: 'Вы успешно вошли в свой аккаунт!', icon: "success"})
        }
    }

    return (
        <Box>
            <Box sx={{paddingTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '30px'}}>
                <TextField onChange={e => dispatch(setUsername(e.target.value))} placeholder="Username" sx={{width: '500px'}}/>
                <TextField onChange={e => dispatch(setPassword(e.target.value))} placeholder="Password" sx={{width: '500px'}}/>
            </Box>
            <Box sx={{paddingTop: '30px', display: 'flex', flexDirection: 'column', rowGap: '30px'}}>
                <Box sx={{borderColor: '#AD02E0', display: 'flex', columnGap: '10px', alignItems: 'center'}}>
                    <Checkbox size='large'/>
                    <Typography variant='h4' sx={{color: '#878787'}}>
                        Запомнить меня
                    </Typography>
                </Box>
                <Button onClick={loginFunc} variant='contained' sx={{padding: '15px 186px', width: '100%'}}>
                    <Typography variant='span'>Войти</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default LogModal;