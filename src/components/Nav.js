import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{color:'white'}}  href="#">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color:'violet'}} href="#">Home</Nav.Link>
            <Nav.Link style={{color:'violet'}}  href="#about">About</Nav.Link>
            <Nav.Link style={{color:'violet'}}  href="#skills">Skills</Nav.Link>
            <Nav.Link style={{color:'violet'}}  href="#myprojects">Projects</Nav.Link>
             <Nav.Link style={{color:'violet'}}  href="#projects">Achievements</Nav.Link>
            <Nav.Link style={{color:'violet'}}  href="#contact">Contact</Nav.Link>
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;