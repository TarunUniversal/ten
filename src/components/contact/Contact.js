import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function Contact() {
    return (
        <>
            <Form>
            <Row>
                <Col>
                <Form.Control placeholder="Full name" />
                </Col>
                <Col>
                <Form.Control placeholder="College name" />
                </Col>
            </Row>
            <br/>   
            <Row>
                <Col>
                <Form.Control placeholder="Mobile No." />
                </Col>
                <Col>
                <Form.Control placeholder="Email" />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Join our Discord Server" />
                </Form.Group>
                </Col>
                <Col>
                <Button>Submit</Button>
                </Col>
            </Row>
            </Form>
        </>
    )
}

export default Contact
