import { React } from 'react';
import JobItem from './JobItem'; 
import { Container, Stack, Spinner } from 'react-bootstrap'; 

// Replied - child of App.js - jobs from which the user has received a 
//           company reply 
//           TODO: add more information fields, such as interview times/status
// jobs, onDelete - same as Applied, Wishlist components - handle state change
//                  when either action occurs
function Replied({ jobs, onDelete }) {
    if(jobs) return (
        <Container>
        <h3 className='d-flex justify-content-center text-muted'>
            This is your replied list. When you mark a job as having received a response, it will appear here.
        </h3>
        <hr></hr>
        <Stack gap={3}>
           {jobs.map((job)=> {
               if (job.replied){
               return <JobItem job={job} key={job.id} onDelete={onDelete} />
            }
               return null;  
            })}
        </Stack>
        </Container>
    )
    return <Spinner animation='border' role='status' />
}

export default Replied;