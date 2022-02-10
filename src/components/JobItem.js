import React from 'react'; 
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';
import { RiDeleteBackLine, RiLinkedinBoxFill } from 'react-icons/ri';
import { FcCheckmark } from "react-icons/fc";
function JobItem({ job }) {

    return (
        <Card >
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col xs='auto'><RiLinkedinBoxFill/></Col>
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
                                return <> <Badge key={tech} pill>{tech}</Badge>{' '} </>
                            })}
                        </Col>
                        <Col xs='auto'>
                            <Button disabled={job.applied} size='sm' variant='outline-primary' onClick={() => console.log(job.id)}><FcCheckmark /> {job.applied ? "Applied": "Apply"}</Button>
                        </Col>
                        <Col xs='auto'>
                            <Button disabled={job.replied || !job.applied} size='sm' variant='outline-primary' onClick={() => console.log(job.id)}><FcCheckmark /> {job.replied ? "Replied": "Received Reply?"}</Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default JobItem;