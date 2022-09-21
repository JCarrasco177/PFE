import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';

function Registro() {
    const cardStyles = {
        width:450,
        position:"relative"
    }
  return (
    <Container style={{padding: 10, width:500}}>
        <Card style={cardStyles}>
        <Card.Header>Formulario de Registro</Card.Header>
            <Card.Body>
                <Card.Title>Register</Card.Title>
                <Card.Text>
                <Form>
                    <Form.Group className="mb-3" controlId="usuario">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Nombre" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="usuario">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Select aria-label="Cargo" required>
                        <option disabled selected>Seleccionar</option>
                        <option value="1">Administrativo</option>
                        <option value="2">Garzón</option>
                        <option value="3">M.Cocina</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="usuario">
                    <Form.Label>Sucursal</Form.Label>
                    <Form.Select aria-label="Sucursal" required>
                        <option disabled selected>Seleccionar</option>
                        <option value="1">Vina del mar</option>
                        <option value="2">Quilpue</option>
                        <option value="2">Villa Alemana</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email@ejemplo.com" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="usuario">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Usuario" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Crear Cuenta
                    </Button>
                </Form>
                </Card.Text>
            </Card.Body>
        </Card>
        
    </Container>

  );
}

export default Registro;