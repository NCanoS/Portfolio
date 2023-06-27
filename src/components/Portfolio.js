import { Card, Col, Container, Row } from "react-bootstrap";
import restaurantLogo from "../assets/restaurant-logo.png";

function Portfolio(){
    return(
    <Container id="portfolio" style={{padding:"20px"}}>
        <h1>Portfolio</h1>
        <Row>
            <Col>
            <a href="#" style={{textDecoration:"none", animation:"ease-in-out"}}>
            <Card style={{ width: '20%' }} >
            <Card.Img variant="top" src={restaurantLogo} />
            <Card.Body>
            <Card.Title>Restaurant App</Card.Title>
            <Card.Text>
            Page developed for academic purposes. Restaurant home page that shows basic information about the place,
            ratings, social media, location, products and a Registration form to book a reservation. This reservation connects with
            AWS MongoDB to keep track of customers' reservations.
            </Card.Text>
            </Card.Body>
            </Card>
            </a>
            </Col>
        </Row>
    </Container>
    );
}
export default Portfolio;