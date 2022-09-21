import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
function Login() {
  return (
    <Container style={{width:500}}>
        <Card style={{width:350}}>
        <Card.Header>Login</Card.Header>
          <Card.Body>
          <Card.Title>Ingreso</Card.Title>
          <Card.Text>
          <Form>
                <Form.Group className="mb-3" controlId="usuario">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su usuario" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su Contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Acceso
                </Button>
             </Form>
             </Card.Text>
      </Card.Body>
    </Card>
    
    </Container>
  );
}

export default Login;