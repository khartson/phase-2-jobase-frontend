import { React } from 'react';
import JobItem from './JobItem'; 
import { Container, Stack, Spinner } from 'react-bootstrap'; 

// Applied - child of App.js - jobs to which the user has applied 
//           (have applied: true property)
// jobs - App.js - list of jobs rendered via state (same as Wishlist)
// onReply - App.js - update "replied" field to true via state, move 
// to 'Replied' component to be rendered there
function Applied({ jobs, onReply, onDelete }) {
    if(jobs) return (
        <Container>
            <h3 className='d-flex justify-content-center text-muted'>
                This is your applied list. Jobs to which you have applied will appear here.
            </h3>
            <hr></hr>
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