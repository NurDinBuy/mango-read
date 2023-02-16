import {Box, Button, Checkbox, FormControlLabel, RadioGroup, TextField, Typography,} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, {useState, useEffect} from 'react';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import {useDispatch} from 'react-redux';
import {setEndYear, setStartYear, setTypes} from '../../redux/slices/mangasSlice';

const FirstFilter = (props) => {
    const {changePageToTypes, changeFilter, resetAll, confirm, offset, changeOffset, filterByYears, filterTypeByYear, startYear, endYear, types,} = props
    const dispatch = useDispatch()
    const [authAndReg, setAuthAndReg] = useState(['Сбросить', 'Применить']);
    const mangaTypes = ['Манга', 'Манхва', 'Западный комикс', 'Маньхуа'];

    const removeResetAll = () => {
        resetAll()
        dispatch(setTypes(''))
    }

    const checkType = (startYear, endYear) => types === '' ? filterByYears(startYear, endYear) : filterTypeByYear(startYear, endYear)
    useEffect(() => confirm(types), [offset, types]);

    return (
        <Box sx={{
            width: '400px',
            height: '600px',
            borderRadius: '20px',
            backgroundColor: '#FFF',
            padding: '10px 15px 10px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
            <Box onClick={changeFilter} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                <Typography variant="p">
                    Жанры
                </Typography>
                <Button sx={{display: 'flex', alignItems: 'center', columnGap: '17px'}}>
                    <Typography
                        textTransform="lowercase"
                        variant="span"
                        sx={{fontWeight: '400', color: '#878787', fontSize: '24px'}}
                    >
                        все
                    </Typography>
                    <ArrowForwardIosIcon sx={{color: '#878787'}}/>
                </Button>
            </Box>
            <Box  sx={{paddingTop: '43px'}}>
                <Typography variant="p">Тип</Typography>
                <RadioGroup sx={{gap: '10px'}}>
                    {mangaTypes.map((type, i) => (
                        <FormControlLabel
                            key={i}
                            onChange={({target}) => {
                                target.checked ? dispatch(setTypes(type)) : dispatch(setTypes(''))
                                changeOffset(0)
                            }}
                            sx={{'& .MuiFormControlLabel-label': {fontSize: '24px'}}}
                            control={
                                <Checkbox
                                    onClick={changePageToTypes}
                                    key={i}
                                    checked={type === types}
                                    sx={{
                                        color: '#2FE09B',
                                        '& svg': {width: 40, height: 40},
                                        '&.Mui-checked': {color: '#2FE09B'},
                                        '&.MuiCheckbox-root:hover': {background: 'none'}
                                    }}
                                />
                            }
                            label={type}
                        />
                    ))}
                </RadioGroup>
                <Box sx={{
                    paddingTop: '33px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <TextField
                        value={startYear > 0 && startYear}
                        onChange={e => dispatch(setStartYear(e.target.value))}
                        variant="outlined"
                        type="number"
                        color="secondary"
                        placeholder="От 0"
                        sx={{
                            width: 168,
                            height: 55,
                            '& input': {paddingLeft: '15px'},
                            '& .MuiInputBase-root': {'& fieldset': {border: '2px solid #2FE09B'}},
                            '& .MuiInputBase-root:hover fieldset': {borderColor: '#2FE09B'},
                        }}
                    />
                    <HorizontalRuleIcon/>
                    <TextField
                        onChange={e => dispatch(setEndYear(e.target.value))}
                        value={endYear > 0 && endYear}
                        variant="outlined"
                        type="number"
                        color="secondary"
                        placeholder="До 2022"
                        sx={{
                            width: 168,
                            height: 55,
                            '& input': {paddingLeft: '15px'},
                            '& .MuiInputBase-root': {'& fieldset': {border: '2px solid #2FE09B'}},
                            '& .MuiInputBase-root:hover fieldset': {borderColor: '#2FE09B'},
                        }}
                    />
                </Box>
            </Box>
            <Box  sx={{
                padding: '10px 0',
                display: 'flex',
                gap: '15px',
                marginTop: 'auto',
                position: 'absolute',
                bottom: '0',
            }}>
                <Button
                    variant="outlined"
                    sx={{
                        padding: '16px 40px',
                        background: '#C94CEE',
                        color: '#fff',
                        '&:hover': {
                            boxShadow: '0px 0px 20px #AD02E0',
                            background: '#C94CEE'
                        },
                        width: '175px'
                    }}
                    onBlur={() => setAuthAndReg(['Сбросить', 'Применить'])}
                    onClick={() => removeResetAll()}>
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
                    onClick={() => checkType(startYear, endYear)}>
                    <Typography variant="span">
                        {authAndReg[1]}
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default FirstFilter;