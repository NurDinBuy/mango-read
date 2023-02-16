import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {swal as message} from "sweetalert";
import {registration} from "../../redux/slices/authAndRegSlice";
import {useDispatch} from "react-redux";

const RegModal = (props) => {
    const {users} = props
    const dispatch = useDispatch()

    const [uplFile, setUplFile] = useState(null)
    const [fileURL, setFileURL] = useState(null)
    const [username, setUsername] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')

    const fileReader = new FileReader()
    fileReader.onloadend = () => setFileURL(fileReader.result)


    const setFile = (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        setUplFile(file)
        fileReader.readAsDataURL(file)
    }

    const registerFunc = () => {
        if (username === '' || password === '' || nickname === '' || uplFile === null) message({
            text: 'Заполните все поля!',
            icon: 'warning'
        })
        else if (users.find(u => u.username === username)) message({
            text: 'Такой пользователь уже зарегистрирован',
            icon: 'warning'
        })
        else {
            let dataReg = {
                "username": username,
                "password": password,
                "nickname": nickname,
                "image_file": uplFile
            }
            dispatch(registration(dataReg))
            message({text: 'Вы успешно зарегистрировались', icon: 'success'})
        }
    }

    return (
        <Box sx={{width: '600px', height: '650px', paddingTop: '40px'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{
                    backgroundImage: `url(${fileURL ? fileURL : 'Выберите картинку'})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    border: '1px solid'
                }}>

                </Box>
                <Button sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    marginTop: '21px',
                    marginBottom: '40px',
                    color: '#000',
                    background: 'none'
                }} component='label'>
                    Добавить фото
                    <input
                        onChange={setFile}
                        hidden
                        accept="image/*,.png,.jpg,.gif,.web,"
                        multiple
                        type="file"
                    />
                </Button>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '30px'}}>
                <TextField onChange={e => setUsername(e.target.value)} placeholder="Username" sx={{width: '500px'}}/>
                <TextField onChange={e => setNickname(e.target.value)} placeholder="Nickname" sx={{width: '500px'}}/>
                <TextField onChange={e => setPassword(e.target.value)} placeholder="Password" sx={{width: '500px'}}/>
                <Button
                    onClick={registerFunc}
                    variant="contained"
                    sx={{padding: '15px 186px'}}>
                    <Typography variant="span">Регистрация</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default RegModal;
