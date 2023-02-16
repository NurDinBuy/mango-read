import {Box, Typography} from '@mui/material';
import React from 'react';

const Comment = (props) => {
    const {user} = props
    return (
        <Box sx={{display: 'flex', gap: '26px', padding: '0 10px'}}>
            <Box sx={{
                backgroundImage: `url(https://www.meme-arsenal.com/memes/2bb16d2a483b3c99fa7508b789bbbfa3.jpg)`,
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: 'black',
            }}>

            </Box>
            <Box sx={{
                width: '1063px',
                display: 'flex',
                flexWrap: 'wrap',
                borderLeft: '2px solid #878787',
            }}>
                <Typography variant='h3'>
                    {user?.username}
                </Typography>
                <Typography paragraph sx={{color: '#878787', marginBottom: '0'}}>
                    {user?.text}
                </Typography>
            </Box>
        </Box>
    );
}

export default Comment;
