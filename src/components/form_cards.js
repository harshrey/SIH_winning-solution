import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Form19C from './form19C';



function FormCards() {
  return (
   
    <CardGroup>
    
        <Card style={{ borderWidth: 3, borderColor: "black",borderRadius: 8 }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnZOVerId04qW1k653CDN4lyQ17tdCKbRbw&usqp=CAU" />
        <Card.Body>
          <Card.Title>Advance PF</Card.Title>
          <Card.Text>
            Form for Advance PF claim
          </Card.Text>
        <Button variant="primary">Fill Form</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>
   
      
    
        <Card style={{ borderWidth: 3, borderColor: "black",borderRadius: 8 }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFq960iUB4JGr6y5xZWg3rc40g9zO2zyx8zXeXdhnV3A&s" />
        <Card.Body>
          <Card.Title>EPF Withdrawal</Card.Title>
          <Card.Text>
                Form for Advance PF claim
          </Card.Text>
          <Button variant="primary">Fill Form</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>
    
      
     
      <Card style={{ borderWidth: 3, borderColor: "black",borderRadius: 8 }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzT1GpUgeVcjm1GyRNsXZseLLFvOlpQW3LvQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>Pension Withdrawal</Card.Title>
          <Card.Text>
            Form for Advance PF claim
          </Card.Text>
          {/* <Button as={Link} to={'/19C_Form'}>Login Page</Button> */}
           {/* <Nav.Link style={{color:"blue"}} as={Link} to={"./19C_EPF_Form"}>Raise Claim</Nav.Link> */}
            {/* <Button onClick={()=>{history.push("/Form19")}}></Button>  */}
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
      
    </CardGroup>
   
    
  );
}

export default FormCards;