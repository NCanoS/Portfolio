import { Card, Col, Container, Row } from "react-bootstrap";
import restaurantLogo from "../assets/restaurant-logo.png";
import { BsShopWindow } from "react-icons/bs";

function Portfolio(){
    return(
    <Container id="portfolio" style={{padding:"20px"}}>
        <h1>Portfolio</h1>
        <Row style={{maxWidth:"60%"}} className="w-100 mx-auto">
            <Col>
            <a href="https://644c6e00c9c13b36b327a789--effortless-naiad-18fba6.netlify.app/?classId=022bab65-30d3-4e06-af92-b8126a5e792c&assignmentId=031ef28c-4bca-47a5-8f7d-c6e62ce6257e&submissionId=d98b3f56-3882-3b77-f212-696ca3612fe2" target="_blank" style={{textDecoration:"none", animation:"ease-in-out"}}>
            <Card style={{backgroundColor:"#7cdaf9"}} className="w-100 align-items-center shadow-lg p-3 mb-5 rounded hover-zoom" >
            <Card.Img variant="top" src={restaurantLogo} style={{width:"30%"}}/>
            <Card.Body>
            <Card.Title className="fw-bolder fst-italic"> <BsShopWindow/> Restaurant App</Card.Title>
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