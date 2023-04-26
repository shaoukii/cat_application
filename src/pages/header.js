import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Image_cat from "../images/cat_logo.png"

function ColorSchemesExample() {
    return (
        <>
<Navbar bg="light" variant="light">
<Container>
  <Navbar.Brand href="#home" >  <img src={Image_cat} alt="img"   className="responsive-image" /></Navbar.Brand>
  <Nav className="me-auto">
  </Nav>
</Container>
</Navbar>
</>
  );
}

export default ColorSchemesExample;