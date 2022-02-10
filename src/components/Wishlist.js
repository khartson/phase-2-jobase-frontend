import {React, useEffect } from 'react';
import JobItem from './JobItem'; 
import { Container, Stack, Spinner } from 'react-bootstrap'; 

function Wishlist({ jobs, onFetch }) {
    useEffect(() => {
        fetch('http://localhost:3000/jobs')
        .then(response => response.json())
        .then(result => {onFetch(result); console.log(result)});
    }, [])
    if(jobs) return (
        <Container>
        <Stack gap={3}>
           {jobs.map((job)=> {
               if (!job.applied){
               return <JobItem job={job} key={job.id} />
               } 
        })}
        </Stack>
        </Container>
    )
    return <Spinner animation='border' role='status' />
}

export default Wishlist