import MangaCard from "./components/MangaCard/MangaCard";
import {Box, CircularProgress} from "@mui/material";
import MyPagination from "./components/Pagination/Pagination";

export const pageSelector = (state, Mangas, toManga, MangasByType, MangasByGenres, MangasByYears, TopMangas, isLoad) => {
     if (state === 'Mangas') return !isLoad ? Mangas?.results?.map(manga => <MangaCard toManga={toManga} manga={manga} key={manga?.id}/>) : <Box className='load'><CircularProgress/></Box>
     else if (state === 'Types') return !isLoad ? MangasByType?.results?.map(manga => <MangaCard toManga={toManga} manga={manga} key={manga?.id}/>) : <Box className='load'><CircularProgress/></Box>
     else if (state === 'Genres') return !isLoad ? MangasByGenres?.results?.map(manga => <MangaCard toManga={toManga} manga={manga} key={manga?.id}/>) : <Box className='load'><CircularProgress/></Box>
     else if (state === 'Years') return MangasByYears?.map(manga => <MangaCard toManga={toManga} manga={manga} key={manga?.id}/>)
     else if (state === 'TopMangas') return !isLoad ? TopMangas?.results?.map(manga => <MangaCard toManga={toManga} manga={manga} key={manga?.id}/>) : <Box className='load'><CircularProgress/></Box>
}

export const paginationSelector = (pageType, changeOffset, Mangas, MangasByYears, MangasByGenres, MangasByType, TopMangas) => {
    if (pageType === 'Mangas') return <MyPagination changePage={changeOffset} count={Math.ceil(Mangas?.count / 12)}/>
    else if (pageType === 'Types') return <MyPagination changePage={changeOffset} count={Math.ceil(MangasByType?.count / 12)}/>
    else if (pageType === 'Genres') return <MyPagination changePage={changeOffset} count={Math.ceil(MangasByGenres?.count / 12)}/>
    else if (pageType === 'Years') return <MyPagination changePage={changeOffset} count={Math.ceil(MangasByYears?.length / 12)}/>
    else if (pageType === 'TopMangas') return <MyPagination changePage={changeOffset} count={Math.ceil(TopMangas?.count / 12)}/>
}
