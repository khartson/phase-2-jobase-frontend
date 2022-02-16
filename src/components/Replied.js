import { React } from 'react';
import JobItem from './JobItem'; 
import { Container, Stack, Spinner } from 'react-bootstrap'; 

function Replied({ jobs }) {
    if(jobs) return (
        <Container>
        <Stack gap={3}>
           {jobs.map((job)=> {
               if (job.replied){
               return <JobItem job={job} key={job.id} />
            }
            return null;  
        })}
        </Stack>
        </Container>
    )
    return <Spinner animation='border' role='status' />
}

export default Replied;