import React from 'react';
import {Typography, Box} from '@mui/material';
import {NavLink} from "react-router-dom";

const MangaCard = ({manga, toManga}) => {
    return (
        <NavLink to={`/${manga.id}`}>
            <Box
                onClick={() => toManga(manga?.id)}
                sx={{
                    backgroundImage: `url(${manga?.image})`,
                    borderRadius: '16px',
                    width: '190px',
                    height: '220px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    rowGap: '11px',
                    padding: '0 10px 11px',
                }}
            >
                <Typography variant='p' sx={{fontSize: '14px', color: '#FFFFFF'}}>
                    {`Год: ${manga?.issue_year}`}
                </Typography>
                <Typography variant='span' sx={{color: '#FFFFFF', fontWeight: 500}}>
                    {manga?.ru_name}
                </Typography>
            </Box>
        </NavLink>

    );
}

export default MangaCard;
