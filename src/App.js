import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.js';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from './Theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import MainPage from './pages/MainPage/MainPage';
import {Route, Routes} from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/:id' element={<AboutPage/>}/>
            </Routes>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;