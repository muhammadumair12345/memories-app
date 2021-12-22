import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form'
import { Container, GlobalStyle, Header, Logo } from './App.style';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from './actions/posts';

const theme = createTheme({
    palette: {
        primary: {
            main: '#c7213191',
        }
    }
});

const App = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header>
                <Typography variant="h4" component="div">
                    MUSS Memories
                </Typography>
                <Logo src={memories} alt='memories' height='60' />
            </Header>
            <Container>
                <Posts setCurrentId={setCurrentId} />
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Container>
        </ThemeProvider>
    )
}

export default App; 
