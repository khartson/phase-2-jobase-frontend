import { React } from 'react';
import JobItem from './JobItem'; 
import { Container, Stack, Spinner } from 'react-bootstrap'; 

function Wishlist({ jobs, onApply }) {

    if(jobs) return (
        <Container>
        <Stack gap={3}>
           {jobs.map((job)=> {
               if (!job.applied){
               return <JobItem job={job} key={job.id} onApply={onApply} />
            }
            return null;  
        })}
        </Stack>
        </Container>
    )
    return <Spinner animation='border' role='status' />
}

export default Wishlist