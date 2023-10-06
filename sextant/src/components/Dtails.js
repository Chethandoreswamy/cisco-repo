import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' ,padding:'20px'} } className='cards'>
      <Card.Img variant="top dark" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Network Details</Card.Title>
        <Card.Text>
          IP Address : {}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;