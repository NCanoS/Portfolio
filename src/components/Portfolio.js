import { Card, Col, Container, Row } from "react-bootstrap";

function Portfolio(){
    return(
    <Container fluid id="portfolio">
        <h1>Portfolio</h1>
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="#" />
            <Card.Body>
            <Card.Title>Restaurant App</Card.Title>
            <Card.Text>
            Page developed for academic purposes. Restaurant home page that shows basic information about the place,
            ratings, social media, location, products and a Registration form to book a reservation. This reservation connects with
            AWS MongoDB to keep track of customers' reservations.
            </Card.Text>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
    );
}
export default Portfolio;