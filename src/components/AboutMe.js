import { Card, Col, Container, Row } from "react-bootstrap";

function AboutMe(){
    return(
        <Container id="about" style={{maxWidth:"80%",paddingTop:"20px"}}>
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body style={{padding:"40px"}}>
                    <Card.Title><h1>About Me</h1></Card.Title>
                    <Card.Text>
                    <Row>
                <Col>
                <br></br>
                <p>
                <span style={{fontWeight:"700"}}>Name: </span>
                <span>Nathaniel Antonio Cano Salas</span>
                </p>
                <p>
                <span style={{fontWeight:"700"}}>Profile: </span>
                <span>Web Developer</span>
                </p>
                <p>
                <span style={{fontWeight:"700"}}>Email: </span>
                <span>nathacasa07@outlook.com</span>
                </p>
                <p>
                <span style={{fontWeight:"700"}}>Phone: </span>
                <span>(+52)4424379211</span>
                </p>
                </Col>
                <Col>
                    <p>
                    Quality and Assurance analyst and Knowledge Management lead working with a SCRUM 
                    team and implementing Agile methodologies for leading a Customer Service Desk.
                    </p>
                    <p> Familiar with Tryvium's chat services, Amazon Web Services used for telephony 
                        services and ServiceNow ticketing system and central knowledge repository maintenance.</p>
                    <p>Constantly seeking for improvement and building a career as Web Developer.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Skills</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>NodeJS</li>
                    </ul>
                </Col>
                <Col>
                    <h3>Languages</h3>
                    <ul>
                        <li>Spanish</li>
                        <li>English</li>
                        <li>German</li>
                    </ul>
                </Col>
            </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

            
        </Container>
    );
}
export default AboutMe;