import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="primary" expand="md">
      <Container>
        <Navbar.Brand href="/">MangaX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Profile">
                Dropdown Item 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dropdown Item 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Dropdown Item 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Another Item
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
