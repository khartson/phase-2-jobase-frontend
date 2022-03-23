import { React, Fragment, useState } from 'react'; 
import {Button, Modal, Form, Row, Col, InputGroup, Badge} from 'react-bootstrap';
// Modal - react-bootstrap component that will overlay the page that will 
//         display hidden or show corresponding to state changes from App.js 
// InputGroup - react-bootstrap component to group multiple input fields inline


// show - App.js - boolean value of shown vs hidden modal for job submit form
// handleClose - App.js - changes state of 'shown variable' - needs to be in
//               App.js because of 'New Job' navbar also changing this value
// handleAdd - App.js - handle submission of job for React to render via
//                      state
function NewJobForm({ show, handleClose, handleAdd }) {

    // initialize state-controlled input fields (formatted as the db.json object)
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
 
    // for the controlled input fields, capture the event id and value 
    // and make changes to the corresponding object property
    function handleFormChange(event) {
        const category =    event.target.id;
        const input    = event.target.value;
        // setState() based on input field values
        setFormJob({
                    ...formJob, 
                    [category]: input
                   })
    }

    // separate state function to capture input field of the list of 
    // technologies, since they are stored in an array 
    const [techInput, setTechInput] = useState('');

    // upon add, copy updated array and set state of 'technologies' object
    // property, as well as resetting input fields
    function handleAddClick() {
        setFormJob({...formJob,
                    technologies: [...formJob.technologies, techInput]})
        setTechInput('');
    }

    // when user hits submit field for form,
    // 1. validates input fields - will alert if any required fields (title,
    //    location, company, contact link/company site) are left empty
    // 2. POSTs request to db.json (!!TODO -> use actual backend)
    // 3. adds request to state variable in App.js that stores list of job
    //    objects to be rendered on the app
    // 4. resets form fields for convenience
    function handleSubmit() {
        for (const field in formJob) {
            switch(field) {
                case 'applied': continue;
                case 'replied': continue;
                case 'technologies': continue;
                default:
                    if (!formJob[field]) {
                        alert(`${field[0].toUpperCase() + field.substring(1)} is empty! Please add a value`); 
                        return;
                    }
            }
        }
        fetch('http://localhost:3000/jobs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formJob)
        })
        .then((r)=>r.json())
        .then((newJob)=>handleAdd(newJob)) // * 
        setFormJob({
            title: '',
            company: '',
            location: '',
            companySite: '',
            contactLink: '',
            technologies: [],
            applied: false,
            replied: false
        })
    }
    
    // each technology that the user adds will appear as a 'badge' below the
    // input field - clicking on the pill will remove the technology, in the
    // event of a typo/mistake -> will also update the state of the formJob
    // object
    function removeTechBadge(removedTech) {
        const newTechList = formJob.technologies.filter((tech)=> tech !== removedTech);
        setFormJob({...formJob,
                    technologies: newTechList}); 
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
                        <Form.Text className='text-muted'> Click on a technology badge to remove it</Form.Text>
                    </Form.Group>
                </Row>
                <hr/>
                <Row md='auto'>
                    {formJob.technologies.map((tech, index)=> {
                        return(
                            <Fragment key={index}>
                                <Badge onClick={()=>removeTechBadge(tech)} className='mx-1' key={index} pill>{tech}</Badge>
                            </Fragment>
                        )
                    })}
                </Row>
            </Modal.Body>
            <Modal.Footer>
            {/* <Button variant='outline-primary' onClick={()=>console.log(formJob, techInput)}>Show state variable</Button> */}
            <Button variant='outline-primary' onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
        </>
  );
}

export default NewJobForm; 