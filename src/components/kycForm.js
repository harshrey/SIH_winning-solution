import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const KYC_Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [nameBankAccount, setnameBankAccount] = useState('');
  const [accountNo, setaccountNo] = useState('');
  const [IFSC, setIFSC] = useState('');
  const [namePan, setnamePan] = useState('');
  const [panNo, setpanNo] = useState('');
  const [namePassport, setnamePassport] = useState('');
  const [passportNo, setpassportNo] = useState('');
  const [validDate, setvalidDate] = useState('');

  const handleDifferentNames = e =>{
  console.log(nameBankAccount);
  console.log(namePan);
  
  if(nameBankAccount.length==0 || accountNo.length==0 || IFSC.length==0 || namePan.length==0 || panNo.length==0 ||namePassport.length==0 || passportNo.length==0)
  {
    alert("Enter the mandatory fields")
  }else{
    if(nameBankAccount==namePan){
    console.log(nameBankAccount);
    //alert("Same names");
    }else{
       alert("Employee Name does not match in PAN and Bank Details")
    }
  }
}
    
   
  const handleSubmit = e => {
    e.preventDefault();
    //console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    <div className='container'>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Bank Details</Accordion.Header>
          <Accordion.Body>
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              label="Name as per Bank Account"
              variant="filled"
              required="required"
              value={nameBankAccount}
              onChange={e => setnameBankAccount(e.target.value)}
            />
            <TextField
              label=" Bank Account number"
              variant="filled"
              required
              value={accountNo}
              onChange={e => setaccountNo(e.target.value)}
            />
            <TextField
              label="Confirm Bank Account number"
              variant="filled"
              required
              value={accountNo}
              onChange={e => setaccountNo(e.target.value)}
            />
            <TextField
              label="Bank IFSC"
              variant="filled"
              required
              value={IFSC}
              onChange={e => setIFSC(e.target.value)}
            />
            </form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>PAN Details</Accordion.Header>
          <Accordion.Body>
            <form className={classes.root} onSubmit={handleSubmit}>
              <TextField
                label="Name as per PAN"
                variant="filled"
                required
                value={namePan}
                onChange={e => setnamePan(e.target.value)}
              />
              <TextField
                label= "PAN No."
                variant="filled"
                required
                value={panNo}
                onChange={e => setpanNo(e.target.value)}
              />
          </form>
          </Accordion.Body>
        </Accordion.Item>
    
        <Accordion.Item eventKey="2">
          <Accordion.Header>Passport Details</Accordion.Header>
          <Accordion.Body>
            <form className={classes.root} onSubmit={handleSubmit}>
              <TextField
                label="Name as per Passport"
                variant="filled"
                required
                value={namePassport}
                onChange={e => setnamePassport(e.target.value)}
              />
              <TextField
                label="Passport Number"
                variant="filled"
                required
                value={passportNo}
                onChange={e => setpassportNo(e.target.value)}
              />
              <TextField
              label="Valid Till"
              type="date"
              variant="filled"
              required
              value={validDate}
              onChange={e => setvalidDate(e.target.value)}
              />
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    <form className={classes.root} >
      <Button variant="contained" onClick={handleClose}>
        Cancel
      </Button>
      <Button type="submit" variant="contained" color="primary" onClick={handleDifferentNames}>
        Save
      </Button>
     
    </form>
    </div>
  );
};

export default KYC_Form;
