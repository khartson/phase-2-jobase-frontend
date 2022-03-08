import { React, useState } from 'react'; 
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';

function NewJobForm({ show, handleClose }) {
    
    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add a New Job Posting</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <Row>
                    <Col>
                    <Form.Group controlId='positionName'>
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control placeholder="ex. 'Web Developer">
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='companyName'>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control placeholder="ex. 'Microsoft'" value=''>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId='companyLoc'>
                        <Form.Label>Location</Form.Label>
                        <Form.Control placeholder="ex. 'Cleveland, OH'" value=''>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                    <Form.Group controlId='contactName'>
                        <Form.Label>Contact Name</Form.Label>
                        <Form.Control value=''></Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId='companySite'>
                        <Form.Label>Company Site</Form.Label>
                        <Form.Control type='url'></Form.Control>
                    </Form.Group>
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
  );
}

export default NewJobForm; 