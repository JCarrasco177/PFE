import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
function NavBarCustom() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Comanda</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/login">Login</Link>\n
          <Link to="/registro">Registro</Link>\n
          <Link to="/about">About</Link>\n
          <Link to="/info">Info</Link>\n
          <Link to="/dashboard">Dashboard</Link>\n
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBarCustom;