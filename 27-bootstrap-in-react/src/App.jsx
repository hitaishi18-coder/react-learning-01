import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Needed for styling

import { Alert, Navbar, Container,NavDropdown , Nav } from 'react-bootstrap';


function App() {
  return (
    <>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <br></br>
      <h1>Bootstrap in React</h1>
      <br>
      </br>
       <br></br>
      <Alert variant='success'>hello from me </Alert>
      <br></br>
      <button onClick={()=>alert("button called ")}>button</button>
       <br></br> 
       <br></br>
      <Button variant="primary">OK</Button>
      <br>
      </br>
    </>
  );
}

export default App;
