import { React } from 'react';
import JobItem from './JobItem'; 
import { Container, Stack, Spinner } from 'react-bootstrap'; 

// Wishlist - child of App.js - jobs to which the user wishes to apply
// jobs - App.js - the current list of jobs from db.json handled via state 
//                 jobs with 'applied' and 'replied' = false fields will 
//                 show up in user wishlist - paased to jobItem
// onApply - App.js - handles state change of applied button - will move job 
//                    card to 'applied' route - passed to jobItem
// onDelete - App.js - handles deletion state change after DELETE request
//                     is made in JobItem.js
function Wishlist({ jobs, onApply, onDelete }) {
    if(jobs) return (
        <Container>
            <h3 className='d-flex justify-content-center text-muted'>
                This is your wishlist. If you want to add a job application, click "New Job" on the menu bar above.
            </h3>
            <hr></hr>
        <Stack gap={3}>
           {jobs.map((job)=> {
               if (!job.applied){
               return <JobItem job={job} key={job.id} onApply={onApply} onDelete={onDelete}/>
            }
            return null;  
        })}
        </Stack>
        </Container>
    )
    return <Spinner animation='border' role='status' />
}

export default Wishlist