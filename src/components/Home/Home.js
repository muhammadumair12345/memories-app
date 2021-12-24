import React, { useState } from 'react'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import { Container } from './Home.style'

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    return (
        <Container>
            <Posts setCurrentId={setCurrentId} />
            <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Container>
    )
}

export default Home
