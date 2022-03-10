import { React, useState } from 'react'; 
import {Button, Modal, Form, Row, Col, InputGroup} from 'react-bootstrap';

function NewJobForm({ show, handleClose }) {
    const [formJob, setFormJob] = useState(
        {
            title: '',
            company: '',
            location: '',
            companySite: '',
            contactName: '',
            technologies: [],
            applied: false,
            replied: false
        }
    )

    const [technology, setTechnology] = useState(); 
    
    function handleFormChange(event) {
        const category =    event.target.id;
        const input    = event.target.value;
        console.log('category: ', category, "input: ", input)
        setFormJob({
                    ...formJob, 
                    [category]: input
                   })
    }

    function handleAddClick(event) {
        console.log('clicked'); 
    }
    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add a New Job Posting</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control value={formJob.title} id='title' placeholder="ex. 'Web Developer" onChange={handleFormChange}></Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control id='company' value={formJob.company} placeholder="ex. 'Microsoft'" onChange={handleFormChange}></Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group >
                        <Form.Label>Location</Form.Label>
                        <Form.Control id='location' value={formJob.location} placeholder="ex. 'Cleveland, OH'" onChange={handleFormChange}></Form.Control>
                    </Form.Group>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>Contact Name</Form.Label>
                        <Form.Control id='contactName' value={formJob.contactName} onChange={handleFormChange}></Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group >
                        <Form.Label>Company Site</Form.Label>
                        <Form.Control type='url' id='companySite' value={formJob.companySite} onChange={handleFormChange}></Form.Control>
                    </Form.Group>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Form.Group >
                        <Form.Label>Technologies</Form.Label>
                        <InputGroup className='mb-3'>
                            <Form.Control id='technologies' value={technology} onChange={(e)=>setTechnology(e.target.value)}></Form.Control>
                            <Button variant='outline-primary' onClick={handleAddClick}>Add</Button>
                        </InputGroup>
                    </Form.Group>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            <Button variant='outline-primary' onClick={()=>console.log(formJob, technology)}>Show state variable</Button>
            </Modal.Footer>
        </Modal>
        </>
  );
}

export default NewJobForm; 