import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navBar" collapseOnSelect>
      <Container>
        <Navbar.Brand
          href="#header"
          className="navbar-brand-lockup d-inline-flex align-items-center"
        >
          <img
            src="/logo.svg"
            alt="Smitha Kamath — home"
            width={36}
            height={36}
            className="navbar-logo flex-shrink-0"
            decoding="async"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav">
            <Nav.Link href="#header">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
