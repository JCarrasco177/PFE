import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarCustom() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Comanda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Ingresar</Nav.Link>
            <Nav.Link href="#features">Registrar</Nav.Link>
            <Nav.Link href="#pricing">Info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBarCustom;