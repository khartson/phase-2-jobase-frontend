import { React } from 'react';
import JobItem from './JobItem'; 
import { Container, Stack, Spinner } from 'react-bootstrap'; 

function Applied({ jobs, onReply, onDelete }) {
    if(jobs) return (
        <Container>
        <Stack gap={3}>
           {jobs.map((job)=> {
               if (job.applied && !job.replied){
               return <JobItem job={job} key={job.id} onReply={onReply} onDelete={onDelete} />
           }
           return null; 
        })}
        </Stack>
        </Container>
    )
    return <Spinner animation='border' role='status' />
}

export default Applied; 