import { GlobalStyle } from './App.style';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from './actions/posts';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { Routes, Route } from "react-router-dom";


const theme = createTheme({
    palette: {
        primary: {
            main: '#c7213191',
        }
    }
});

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<Auth />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App; 
