import React from 'react';
import {Box, Button, Modal, Typography,} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LogModal from "./LogModal";
import RegModal from "./RegModal";

const RegAuthModals = (props) => {
    const {users, openReg, openLog, open, modalType, modalStyle, closeLogModal, account} = props

    return (
        <Box sx={{display: `${modalStyle[0]}`, position: `${modalStyle[1]}`}}>
            <Modal open={open} sx={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClose={closeLogModal}>
                <Box sx={{backgroundColor: '#fff', borderRadius: '30px', padding: '20px'}}>
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', cursor: 'pointer'}}>
                        <CloseIcon onClick={closeLogModal}/>
                    </Box>
                    <Box sx={{display: 'flex', columnGap: '30px', borderBottom: '2px solid #878787'}}>
                        <Button sx={{
                            color: '#000',
                            borderBottom: `${modalType === 'Log' && '5px solid #AD02E0'}`,
                            transition: '.3s'
                        }}>
                            <Typography onClick={openLog} variant="span" sx={{fontSize: '24px'}}>
                                Вход
                            </Typography>
                        </Button>
                        <Button onClick={openReg}
                                sx={{color: '#000', borderBottom: `${modalType === 'Reg' && '5px solid #AD02E0'}`}}>
                            <Typography variant="span" sx={{fontSize: '24px'}}>
                                Регистрация
                            </Typography>
                        </Button>
                    </Box>
                    {modalType === 'Log' ? <LogModal account={account}/> : <RegModal users={users}/>}
                </Box>
            </Modal>
        </Box>
    );
};

export default RegAuthModals
