import { Container } from "react-bootstrap";

function Footer(){
    return(
        <Container fluid style={{background:"black", color:"white", height:"5rem", alignItems:"center"}}>
            <p style={{textAlign: "center", fontSize:"20px", paddingTop:"15px"}}>© NCanoS COPYRIGHT - 2023. Todos los derechos reservados.</p>
        </Container>
    );
}
export default Footer;