import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Form19C() {
  return (
    <div style={{ display: 'block', 
        alignContent:'center',
        alignItems:'center',
        paddingLeft:100,
        paddingRight:100
                  }}>
      
      <Form>
        <h2>Form 19</h2>
      <Form.Group>
          <Form.Label>Enter your address:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your Reason:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your reason for filing" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your amount:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your aadhar no.:</Form.Label>
          <Form.Control type="number" placeholder="Enter your aadhar no." />
        </Form.Group>
        <Button variant="primary" type="submit">
           Click here to submit form
        </Button>
      </Form>
    </div>
  );
}