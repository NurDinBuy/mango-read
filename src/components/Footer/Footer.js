import {Box, Container, Typography} from '@mui/material';
import React from 'react';
import Logo from '../Logo/Logo'
import instagram from '../../assets/Instagram.svg'
import facebook from '../../assets/Twitter.svg'
import twitter from '../../assets/Facebook.svg'
const links = ['Link one', 'Link two', 'Link three']
const icons = [instagram, facebook, twitter]

const Footer = () => {
    return (
        <Box>
            <Box sx={{background: '#FFFFFF', borderBottom: '1px solid #bbb'}}>
                <Container fixed sx={{'&.MuiContainer-root': {padding: 0, maxWidth: 1240}}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px 0'}}>
                        <Logo/>
                        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', rowGap: '32px'}}>

                            {
                                links.map((item, i) => {
                                    return (
                                        <Box key={i} sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                            <img src={icons[i]} alt="#"/>
                                            <Typography variant="span" sx={{fontWeight: 600, fontFamily: 'Roboto'}}>
                                                {item}
                                            </Typography>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846.7898478986851!2d74.61839118987496!3d42.87952383522053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb794b532a8f1%3A0xcea5bfa3cae816aa!2sVictory!5e0!3m2!1sru!2skg!4v1676197659254!5m2!1sru!2skg"
                            width="400" height="250" style={{borderRadius: 20, border: 'none'}} allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </Box>
                </Container>
            </Box>

            <Box sx={{padding: '40px 0'}}>
                <Box sx={{display: 'flex', columnGap: '24px', justifyContent: 'center'}}>
                    <Typography
                        variant="span"
                        sx={{fontFamily: 'Roboto', fontSize: 14}}>
                        ©2022, All right reserved.
                    </Typography>
                    <Typography
                        variant="span"
                        sx={{fontFamily: 'Roboto', fontSize: 14}}>
                        Privacy Policy
                    </Typography>
                    <Typography
                        variant="span"
                        sx={{fontFamily: 'Roboto', fontSize: 14}}>
                        Terms of Service
                    </Typography>
                    <Typography
                        variant="span"
                        sx={{fontFamily: 'Roboto', fontSize: 14}}>
                        Cookies Settings
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
