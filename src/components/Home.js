import React from 'react';
import { Container } from 'react-bootstrap'; 

// Home - homepage of the application, containing brief instructions on how
//        to use the application as well as information about its specs +
//        myself
function Home() {
    return (
        <Container className='mt-5'>
            <h1 className='d-flex justify-content-center text-secondary'>
                Welcome to jobase!
            </h1>
            <hr>
            </hr>
        </Container>
    )
}

export default Home; 