import React from 'react'; 
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';
import { RiDeleteBackLine } from 'react-icons/ri';
import { FcCheckmark } from "react-icons/fc";

// JobItem - child of Wishlist, Applied, Replied - the actual job application
//           item, containing information about a company (Name, Location, 
//           job title, and replied/applied fields)
// job - App.js from respective component (Wishlist, Applied, Replied)
//       state variable containing list of tracked jobs
// onApply - App.js from Wishlist, Applied or Replied -  handles state
//           change of 'applied' button click, moving it to the 'Applied' 
//           component
// onReply - ' ' - handles state change of 'replied' button click, moves card
//           to 'Replied' component
function JobItem({ job, onApply, onReply, onDelete }) {
    
    // job cards will have 'applied' and 'replied' fields to represent
    // different stages of job application process
    // when in wishlist, 'applied' button is enabled - clicking it will move
    // this card to the 'applied' field, so you can track job application
    // progress
    // 1. patch request to the job object in db.json, changing applied field
    // 2. update state of 'job' item so that it will render in appropriate
    //    component via onApply
    function handleApplyClick(job) {
        fetch(`http://localhost:3000/jobs/${job.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({'applied': true}),
        })
            .then((r)=>r.json())
            .then(onApply(job));
    }

    // handles same task as onApply, but changing the 'replied' field and 
    // moving card to Replied component
    function handleReplyClick(job) {
        fetch(`http://localhost:3000/jobs/${job.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({replied: true}),
        })
            .then((r)=>r.json())
            .then(onReply(job));
    }

    // each card renders a delete button, upon clicking a DELETE request 
    // will be made and the job will disappear from the app 
    // TODO -> make this a reversible action?
    function handleDeleteClick(job) {
        fetch(`http://localhost:3000/jobs/${job.id}`, {
            method: "DELETE",
        })
        .then((r)=>r.json())
        .then(onDelete(job))
    }
    // Render all object properties of 'job' item
    // map each technology used as 'badge' displayed on job card
    return (
        <Card >
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col xs='2'>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Subtitle>{job.company} | {job.location}</Card.Subtitle>
                        </Col>
                        <Col xs='2'>
                            <Card.Link href={job.contactLink}>Contact Link</Card.Link>
                            <Card.Link href={job.companySite}>Site Link</Card.Link>
                        </Col>
                        <Col xs='2'>
                            {job.technologies.map((tech, index)=> {
                                return <React.Fragment key={index}> <Badge key={job.id} pill>{tech}</Badge>{' '} </React.Fragment>
                            })}
                        </Col>
                        <Col xs='2'>
                            <Button disabled={job.applied} size='sm' variant='outline-primary' onClick={()=>handleApplyClick(job)}><FcCheckmark /> {job.applied ? "Applied": "Apply"}</Button>
                        </Col>
                        <Col xs='2'>
                            <Button disabled={job.replied || !job.applied} size='sm' variant='outline-primary' onClick={() => handleReplyClick(job)}><FcCheckmark /> {job.replied ? "Replied": "Received Reply?"}</Button>
                        </Col>
                        <Col xs='2'>
                            <Button className='justify-content-end' variant="outline-secondary" onClick={()=> handleDeleteClick(job)} ><RiDeleteBackLine/></Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default JobItem;