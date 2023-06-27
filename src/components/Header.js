import { Container, Nav, Navbar } from "react-bootstrap";


function Header(){
    return(
        <>
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" sticky="top" style={{backgroundColor:"#004173", color:"#b6ffff"}}>
            <Container>
                <Navbar.Brand href="#home">Replace Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav variant="pills" defaultActiveKey="/#home" className="me-auto " style={{ maxHeight: '100px', color:"#b6ffff"}} navbarScroll>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Header;