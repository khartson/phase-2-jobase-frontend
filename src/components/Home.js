import React from 'react';
import { Container } from 'react-bootstrap'; 

// Home - homepage of the application, containing brief instructions on how
//        to use the application as well as information about its specs +
//        myself
// TODO: put actual text in the homepage
function Home() {
    return (
        <Container className='mt-5'>
            <h1 className='d-flex justify-content-center text-secondary'>
                Welcome to Jobase!
            </h1>
            <hr>
            </hr>
            <h3 className='text-secondary'>About Jobase</h3>
            <p> 
                Applying to jobs can be a daunting and messy task. Jobase is a 
                tool that enables applicants to seamlessly track job applicatons 
                across various stages of the recruitment process.
            </p>
            <h3 className='text-secondary'>Usage</h3>
            <p>
                Jobase submissons will initially be added to a user wishlist, 
                containing information about a posting's title, company, 
                location, as well as contact/company links and a list of 
                technologies/skills pertinent to the application. Applicants 
                can then move these jobs to different categories based on 
                whether they have applied to, or received a reply from the 
                company. To start your first submission navigate to the "New Job" 
                tab located in the bar at the top of the screen. Happy hunting!
            </p>
            <h3 className='text-secondary'>Project Details</h3>
            <p>
                This project was created as a phase project for
                {' '}<a href='https://flatironschool.com/courses/coding-bootcamp/'>
                    Flatiron School's
                </a>{' '}
                Software Engineering Bootcamp.
                <br/>
                The frontend of this project was created in
                {' '}<a href='https://reactjs.org'>React</a>{' '},
                with its styling handled by
                {' '}<a href='https://react-bootstrap.github.io/'>
                    React Bootstap
                </a>{' '} 
                and additional icons from 
                {' '}<a href='https://react-icons.github.io/react-icons/'>
                    React Icons.
                </a>{' '}
            </p>
        </Container>
    )
}

export default Home; 