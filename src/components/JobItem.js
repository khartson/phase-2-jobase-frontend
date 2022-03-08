import React from 'react'; 
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';
import { RiDeleteBackLine, RiLinkedinBoxFill } from 'react-icons/ri';
import { FcCheckmark } from "react-icons/fc";
function JobItem({ job, onApply, onReply }) {
    
    // onApply - patch to change applied value, set state false -> true
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

    // onReply - patch to change replied value, set state false -> true
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

    // onDelete - remove from state & db
    function onDelete(job) {
        console.log(job.id); 
    }

    return (
        <Card >
            <Card.Body>
                <Container fluid>
                    <Row>
                        {/* <Col xs='auto'><RiLinkedinBoxFill/></Col> */}
                        <Col xs='auto'>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Subtitle>{job.company} | {job.location}</Card.Subtitle>
                        </Col>
                        <Col xs='auto'>
                            <Card.Link href={job.contactLink}>Contact Link</Card.Link>
                            <Card.Link href={job.companySite}>Site Link</Card.Link>
                        </Col>
                        <Col xs={2}>
                            {job.technologies.map((tech)=> {
                                return <> <Badge key={job.id} pill>{tech}</Badge>{' '} </>
                            })}
                        </Col>
                        <Col xs='auto'>
                            <Button disabled={job.applied} size='sm' variant='outline-primary' onClick={()=>handleApplyClick(job)}><FcCheckmark /> {job.applied ? "Applied": "Apply"}</Button>
                        </Col>
                        <Col xs='4'>
                            <Button disabled={job.replied || !job.applied} size='sm' variant='outline-primary' onClick={() => handleReplyClick(job)}><FcCheckmark /> {job.replied ? "Replied": "Received Reply?"}</Button>
                        </Col>
                        <Col xs='auto'>
                            <Button className='float-right' variant="outline-secondary" onClick={()=> onDelete(job)} ><RiDeleteBackLine/></Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default JobItem;