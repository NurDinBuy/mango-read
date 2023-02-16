import {Box, Container} from '@mui/material';
import React, {useEffect} from 'react';
import FirstFilter from '../../components/Filters/FirstFilter';
import {getMangas, setMangasByType, getMangasByTypes, setMangasByYear, getMangasByGenres, setMangaId, getTopMangas, setMangaByGenre} from '../../redux/slices/mangasSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {getGenres} from '../../redux/slices/genresSlice';
import SecondFilter from '../../components/Filters/SecondFilter';
import {pageSelector, paginationSelector} from "../../helpers";

const MainPage = () => {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(0)
    const [all, setAll] = useState(false)
    const [page, setPage] = useState('TopMangas')
    const startYear = useSelector(state => state.mangas.startYear)
    const endYear = useSelector(state => state.mangas.endYear)
    const types = useSelector(state => state.mangas.types)
    const Mangas = useSelector(state => state.mangas.mangas)
    const TopMangas = useSelector(state => state.mangas.topMangas)
    const MangasByGenres = useSelector(state => state.mangas.mangaByGenres)
    const MangasByType = useSelector(state => state.mangas.mangasByType)
    const MangasByYears = useSelector(state => state.mangas.mangasByYears)
    const Genres = useSelector(state => state.genres.genres)
    const selectedGenres = useSelector(state => state.genres.selectedGenres)
    const load = useSelector(state => state.mangas.load)
    const toManga = (id) => dispatch(setMangaId(id))

    useEffect(() => {
        dispatch(getTopMangas({
            limit: 12,
            offset: offset,
        }))
    }, [offset, dispatch])

    useEffect(() => {
        dispatch(getMangas({
            limit: 12,
            offset: offset
        }))
    }, [dispatch, MainPage])

    useEffect(() => {dispatch(getGenres())}, [dispatch])

    useEffect(() => {
        dispatch(getMangasByGenres({
            limit: 12,
            offset: offset,
            genre__title: selectedGenres
        }))
    }, [offset, dispatch, selectedGenres])

    useEffect(() => {
        dispatch(getMangasByTypes({
            limit: 12,
            offset: offset,
            type: '',
        }))
    }, [dispatch])

    const confirm = (type) => {
        dispatch(getMangasByTypes({
            limit: 12,
            offset: offset,
            type: type,
        }))
    }

    const confirmGenres = (selectedGenres) => {
        dispatch(getMangasByGenres({
            limit: 12,
            offset: offset,
            genre__title: selectedGenres
        }))
        setPage('Genres')
    }

    const changeFilter = () => {
        setAll(!all)
        dispatch(setMangasByType({
            count: 0,
            results: []
        }))
        dispatch(setMangasByYear([]))
        setPage('TopMangas')
    }

    const resetAll = () => {
        dispatch(getMangas({
            limit: 12,
            offset: offset
        }))
        dispatch(setMangasByType({
            count: 0,
            results: []
        }))
        dispatch(setMangasByYear([]))
        dispatch(setMangaByGenre({
            count: 0,
            return: []
        }))
    }

    const filterTypeMangasByYears = (startYear, endYear) => {
        dispatch(setMangasByYear(MangasByType?.results?.filter(item => item?.issue_year >= startYear && item?.issue_year <= endYear)))
        setPage('Years')
    }

    const filterMangasByYears = (startYear, endYear) => {
        dispatch(setMangasByYear(Mangas?.results?.filter(item => item?.issue_year >= startYear && item?.issue_year <= endYear)))
        setPage('Years')
    }

    const changeOffset = (p) => setOffset(p)
    const changePage = () => setPage('Genres')
    const changePageToTypes = () => setPage('Types')

    return (
        <Box sx={{background: '#F3F3F3', paddingTop: '87px'}}>
            <Container sx={{'&.MuiContainer-root': {padding: 0, maxWidth: 1240}}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', paddingTop: '32px'}}>
                    {
                        !all
                            ? <FirstFilter
                                changePageToTypes={changePageToTypes}
                                changeFilter={changeFilter}
                                types={types}
                                mangasByYears={MangasByYears}
                                resetAll={resetAll}
                                startYear={startYear}
                                endYear={endYear}
                                confirm={confirm}
                                offset={offset}
                                changeOffset={changeOffset}
                                filterByYears={filterMangasByYears}
                                filterTypeByYear={filterTypeMangasByYears}
                            />
                            : <SecondFilter
                                changePage={changePage}
                                selectedGenres={selectedGenres}
                                changeFilter={changeFilter}
                                confirmGenres={confirmGenres}
                                resetAll={resetAll}
                                offset={offset}
                                changeOffset={changeOffset}
                                filterByYears={filterMangasByYears}
                                genres={Genres}
                            />
                    }
                    <Box sx={{
                        width: '820px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        rowGap: '20px',
                    }}>
                        {pageSelector(page, Mangas, toManga, MangasByType, MangasByGenres, MangasByYears, TopMangas, load)}
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    {paginationSelector(page, changeOffset, Mangas, MangasByYears, MangasByGenres, MangasByType, TopMangas)}
                </Box>
            </Container>
        </Box>
    );
};

export default MainPage;