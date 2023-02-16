import {Box, Button, Modal, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {useSelector} from "react-redux";


const CommentModal = (props) => {
    const {open, closeModal, modalStyle, postReq} = props
    const mangaId = useSelector(state => state.mangas.mangaId)
    const [text, setText] = useState("")
    let data = {id: mangaId, text: {"text": text}}

    return (
        <Box sx={{display: `${modalStyle}`}}>
            <Modal
                open={open}
                onClose={() => closeModal()}
                sx={{
                    width: '100vw',
                    height: '100vh',
                    borderRadius: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box sx={{
                    width: '600px',
                    height: '330px',
                    backgroundColor: '#f3f3f3',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    alignContent: 'space-between',
                    borderRadius: '20px',
                }}>
                    <Typography variant='h4' color='primary'>
                        Оставьте отзыв!
                    </Typography>
                    <TextField
                        label='Добавить комментарий' variant='outlined'
                        onChange={e => setText(e.target.value)}
                        sx={{'& .MuiInputBase-root': {height: '150px', width: '500px'}}}>
                    </TextField>
                    <Box sx={{display: 'flex', columnGap: '25px'}}>
                        <Button onClick={() => closeModal()}>
                            Отмена
                        </Button>
                        <Button
                            variant='outlined'
                            sx={{backgroundColor: '#AD02E0', color: 'white', '&:hover': {backgroundColor: '#AD02E0'}}}
                            onClick={() => postReq(data)}
                        >
                            Отправить
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

export default CommentModal;