import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="bg-secondary">
      <Container>
        <Navbar.Brand
          href="#home"
          className="fs-4 font-weight-lighter text-secondary"
        >
          SK
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-column align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
