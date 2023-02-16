import {Box, Button, Checkbox, FormControlLabel, RadioGroup, Typography,} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setTypes} from '../../redux/slices/mangasSlice';
import {setGenres} from '../../redux/slices/genresSlice';

const SecondFilter = (props) => {
        const {changePage, changeFilter, confirmGenres, selectedGenres, genres, resetAll} = props
        const dispatch = useDispatch()
        const [authAndReg, setAuthAndReg] = useState(['Сбросить', 'Применить']);
        useEffect(() => confirmGenres(selectedGenres), [selectedGenres]);

        const removeResetAll = () => {
            resetAll()
            dispatch(setTypes(''))
            dispatch(setGenres(''))
        }

        return (
            <Box sx={{
                width: '400px',
                height: '700px',
                borderRadius: '20px',
                backgroundColor: '#FFF',
                padding: '10px 15px 10px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
            }}>
                <Box
                    onClick={() => changeFilter()}
                    sx={{
                        color: '#878787',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '24px',
                        padding: '17px 0 15px 10px',
                        cursor: 'pointer',
                        '&:hover': {
                            borderRadius: '10px',
                            background: 'rgba(135, 135, 135, 0.2)'
                        }
                    }}
                >
                    <ArrowBackIosIcon/>
                    <Typography variant="p">
                        Назад
                    </Typography>
                </Box>
                <Box sx={{paddingTop: '17px'}}>
                    <Typography variant="p">
                        Жанры
                    </Typography>
                    <RadioGroup sx={{flexWrap: 'nowrap', gap: '2px', height: '500px', overflowY: 'scroll'}}>
                        {genres.map(genre => (
                            <FormControlLabel
                                key={genre.id}
                                onChange={({target}) => {target.checked ? dispatch(setGenres(genre.title)) : dispatch(setGenres(''))}}
                                sx={{'& .MuiFormControlLabel-label': {fontSize: '24px'}}}
                                label={genre.title}
                                control={
                                    <Checkbox
                                        onClick={changePage}
                                        key={genre.id}
                                        checked={genre.title === selectedGenres}
                                        sx={{
                                            color: '#2FE09B',
                                            '& svg': {width: 40, height: 40},
                                            '&.Mui-checked': {color: '#2FE09B'},
                                            '&.MuiCheckbox-root': {padding: '0 10px'},
                                            '&.MuiCheckbox-root:hover': {background: 'none', padding: '0 10px'}
                                        }}
                                    />
                                }
                            />
                        ))}
                    </RadioGroup>
                </Box>
                <Box
                    sx={{
                        padding: '10px 0',
                        display: 'flex',
                        gap: '15px',
                        marginTop: 'auto',
                        position: 'absolute',
                        bottom: '0'
                    }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            padding: '16px 40px',
                            background: '#C94CEE',
                            color: '#fff',
                            '&:hover': {boxShadow: '0 0 20px #AD02E0', background: '#C94CEE'},
                            width: '175px'
                        }}
                        onBlur={() => setAuthAndReg(['Сбросить', 'Применить'])}
                        onClick={() => removeResetAll()}
                    >
                        <Typography variant="span">
                            {authAndReg[0]}
                        </Typography>
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            padding: '16px 40px',
                            background: '#AD02E0',
                            color: '#fff',
                            '&:hover': {boxShadow: '0px 0px 20px #AD02E0', background: '#AD02E0'},
                            width: '175px'
                        }}
                        onBlur={() => setAuthAndReg(['Сбросить', 'Применить'])}
                        onClick={() => confirmGenres(selectedGenres)}>
                        <Typography variant="span">
                            {authAndReg[1]}
                        </Typography>
                    </Button>
                </Box>
            </Box>
        );
    };

export default SecondFilter;
