import React from 'react';
import {Box, Typography} from '@mui/material';
import {NavLink} from "react-router-dom";

const SearchCard = (props) => {
    const {manga, toManga} = props
    return (
        <NavLink to={`${manga.id}`}>
            <Box
                onClick={() => toManga(manga?.id)}
                sx={{
                    padding: '5px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '10px',
                }}>
                <Box
                    sx={{
                        backgroundImage: `url(${manga?.image})`,
                        width: '70px',
                        height: '70px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}
                >

                </Box>
                <Box>
                    <Typography variant='h4'>
                        {manga?.ru_name}
                    </Typography>
                </Box>
            </Box>
        </NavLink>
    );
}

export default SearchCard;
