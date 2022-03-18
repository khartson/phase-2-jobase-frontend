import { React, Fragment, useState } from 'react'; 
import {Button, Modal, Form, Row, Col, InputGroup, Badge} from 'react-bootstrap';

function NewJobForm({ show, handleClose, handleAdd }) {

    const [formJob, setFormJob] = useState(
        {
            title: '',
            company: '',
            location: '',
            companySite: '',
            contactLink: '',
            technologies: [],
            applied: false,
            replied: false
        }
    )
 
    function handleFormChange(event) {
        const category =    event.target.id;
        const input    = event.target.value;
        console.log('category: ', category, "input: ", input)
        setFormJob({
                    ...formJob, 
                    [category]: input
                   })
    }

    const [techInput, setTechInput] = useState('');
    const [techList, setTechList]   = useState([]);

    function handleAddClick() {
        setTechList([...techList, techInput]);
        setTechInput(''); 
        setFormJob({
                    ...formJob,
                    technologies: techList
                    })
    }

    function handleSubmit() {
        console.log('clicked');
        fetch('http://localhost:3000/jobs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formJob)
        })
        .then((r)=>r.json())
        .then((newJob)=>handleAdd(newJob)) // * 
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
                        <Form.Label>Contact Link</Form.Label>
                        <Form.Control id='contactLink' value={formJob.contactLink} onChange={handleFormChange}></Form.Control>
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
                <Row >
                    <Form.Group >
                        <Form.Label>Technologies</Form.Label>
                        <InputGroup className='mb-3'>
                            <Form.Control id='technologies' value={techInput} onChange={(e)=>setTechInput(e.target.value)}></Form.Control>
                            <Button variant='outline-primary' onClick={handleAddClick}>Add</Button>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <hr/>
                <Row md='auto'>
                    {techList.map((tech, index)=> {
                        return(
                            <Fragment key={index}>
                                <Badge className='mx-1' key={index} pill>{tech}</Badge>
                            </Fragment>
                        )
                    })}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            <Button variant='outline-primary' onClick={()=>console.log(formJob, techInput)}>Show state variable</Button>
            <Button variant='outline-secondary' onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
        </>
  );
}

export default NewJobForm; 