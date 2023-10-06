import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function TextLinkExample() {
  return (
    
    <Navbar className="bg-body-tertiary" style={{display:'flex', height:'70px' }}>
      <Container style={{display:'flex' }}>
        <Navbar.Brand href="#home" style={{paddingRight:"262mm", marginleft : '70px' , margintop: '30px'}}>Technical support</Navbar.Brand>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Chethan R D</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default TextLinkExample;