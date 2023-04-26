import React  from "react" ;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cat_Card = ({ data }) => {
    console.log(data);
   
    const { id, breed, url, description } = data;
    return (
  
  
   
     
    
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{breed}</Card.Title>
          <Card.Text>
         {description}
          </Card.Text>
          <Button variant="primary">Show More </Button>
        </Card.Body>
      </Card>
     
    
  

    


    );
  };
  
  
  export default Cat_Card ; 