import { Button, Col, Container, Form, Row } from "react-bootstrap";
import cv from "../assets/NCanoS_CV.pdf";
import {BsWhatsapp, BsFillEnvelopeAtFill, BsFillGeoAltFill, BsGithub, BsLinkedin} from 'react-icons/bs';

function Contact(){
    return(
        <>
        <div style={{backgroundColor:"#0979b0", padding:"40px"}}>
        <Container id="contact" className="bg-white">
            <Row>
                <Col className="p-4">
                    <h2>Send me an Email</h2>
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
                    <Form.Control as="textarea" placeholder="Your Message" rows={5}/>
                    </Form.Group>
                    </Form>
                    <Button type="submit">Send Email</Button>
                </Col>
                <Col className="p-4">
                    <h2>Contact information</h2>
                    <p><BsFillGeoAltFill/> Corregidora, Qro. 76921</p>
                    <p><BsWhatsapp/> (+52) 442 4379211</p>
                    <p><BsFillEnvelopeAtFill/> nathacasa07@outlook.com</p>
                    <ul style={{listStyle:"none"}}>
                        <li><a href="https://github.com/NCanoS" target="_blank" rel="noreferrer"><h1><BsGithub/></h1></a></li>
                        <li><a href="https://www.linkedin.com/in/nathaniel-cano" target="_blank" rel="noreferrer"><h1><BsLinkedin/></h1></a></li>
                    </ul>
                    <Button type="button" href={cv} download>Download CV</Button>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    );
}
export default Contact;