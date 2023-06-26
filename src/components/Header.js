import { Container, Nav, Navbar } from "react-bootstrap";


function Header(){
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark" id="header" className="bg-body-tertiary mb-3" collapseOnSelect expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Replace Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
                <Nav variant="tabs" defaultActiveKey="/" className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Item>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#about">About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default Header;