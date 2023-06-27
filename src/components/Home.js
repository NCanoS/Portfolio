import { Container } from "react-bootstrap";
import computerBackground from "../assets/computer-background.jpg"

function Home(){
    return(
        <Container fluid id="home" style={{backgroundImage:`url(${computerBackground})`, textAlign:"center", padding:"50px", color:"white", height:"30rem"}}>
            <h1>Nathaniel Cano</h1>
            <br></br>
            <h2>Web Developer</h2>
        </Container>
    );
}
export default Home;