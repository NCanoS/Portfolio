import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Contact(){
    return(
        <Container fluid>
            <Row>
                <Col>
                    <h1>Send me an Email</h1>
                    <Form>
                    <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" placeholder="Your Email address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="subject">
                    <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="messageSend">
                    <Form.Control as="textarea" rows={5}/>
                    </Form.Group>
                    </Form>
                    <Button type="submit">Send Email</Button>
                </Col>
                <Col>
                    <h1>Contact information</h1>
                    <p>add icon: Corregidora, Qro. 76921</p>
                    <p>add icon: (+52) 442 4379211</p>
                    <p>add icon: nathacasa07@outlook.com</p>
                    <ul>
                        <li>GitHub</li>
                        <li>LinkedIn</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}
export default Contact;