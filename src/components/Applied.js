import { React } from 'react';
import JobItem from './JobItem'; 
import { Container, Stack, Spinner } from 'react-bootstrap'; 

function Applied({ jobs }) {
    if(jobs) return (
        <Container>
        <Stack gap={3}>
           {jobs.map((job)=> {
               if (job.applied && !job.replied){
               return <JobItem job={job} key={job.id} />
           }
           return null; 
        })}
        </Stack>
        </Container>
    )
    return <Spinner animation='border' role='status' />
}

export default Applied; 