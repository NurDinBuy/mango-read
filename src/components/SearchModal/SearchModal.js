import {Box} from '@mui/material';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getManga, setMangaId} from '../../redux/slices/mangasSlice';
import SearchCard from './SearchCard';

const SearchModal = (props) => {
    const {results} = props
    const dispatch = useDispatch()
    const mangaId = useSelector(state => state.mangas.mangaId)

    const toManga = (id) => dispatch(setMangaId(id))
    useEffect(() => {dispatch(getManga(mangaId))}, [mangaId])

    return (
        <Box
            sx={{
                width: '350px',
                maxHeight: '500px',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                overflowY: 'auto',
                borderBottomLeftRadius: '12px',
                borderBottomRightRadius: '12px',
                position: 'absolute',
                '&-webkit-scrollbar': {display: 'none'}
            }}
        >
            {
                results?.length > 12
                    ? results?.slice(0, 12).map(manga => <SearchCard toManga={toManga} key={manga.id} manga={manga}/>)
                    : results?.map(manga => <SearchCard toManga={toManga} key={manga.id} manga={manga}/>)
            }
        </Box>
    );
}

export default SearchModal;
