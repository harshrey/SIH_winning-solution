import faker from 'faker';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
       paddingRight:'5%',
       paddingLeft:'5%',
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));

let USERS = [], STATUSES = ['Approved', 'Pending', 'Rejected'], DOCTYPES = ['BANK', 'AADHAR', 'PAN'],
SIGNTYPES = ['DSC', 'MANUAL', 'NOT REQUIRED'];
for(let i=0;i<3;i++) {
    USERS[i] = {
        uan: faker.datatype.uuid(),
        docType : DOCTYPES[i],
        name: faker.internet.userName(),
        docNumber: faker.datatype.uuid(),
        empName: faker.internet.userName(),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
        signType: SIGNTYPES[Math.floor(Math.random() * SIGNTYPES.length)],
        remarks: faker.internet.userName() 
    }
}

function KYC_Details() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="Container">
      <center><h1>KYC Details</h1></center>
      <TableContainer component={Paper} className={classes.tableContainer}>
             <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>UAN</TableCell>
            <TableCell className={classes.tableHeaderCell}>Document Type</TableCell>
            <TableCell className={classes.tableHeaderCell}>Name As Per Document</TableCell>
            <TableCell className={classes.tableHeaderCell}>Document Number</TableCell>
            <TableCell className={classes.tableHeaderCell}>Employer Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell}>Sign Type</TableCell>
            <TableCell className={classes.tableHeaderCell}>Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.uan}>
              <TableCell>
                  <Grid container>
                      {/* <Grid item lg={2}>
                          <Avatar alt={row.name} src='.' className={classes.avatar}/>
                      </Grid> */}
                      <Grid item lg={3}>
                          <Typography className={classes.uan}>{row.uan}</Typography>
                          {/* <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.phone}</Typography> */}
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.docType}</Typography>
                  {/* <Typography color="textSecondary" variant="body2">{row.company}</Typography> */}
                </TableCell>
                <TableCell>{row.name}</TableCell>
              <TableCell>{row.docNumber}</TableCell>
              <TableCell>{row.empName}</TableCell>
              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'Approved' && 'green') ||
                        (row.status === 'Pending' && 'blue') ||
                        (row.status === 'Rejected' && 'orange'))
                    }}
                  >{row.status}</Typography>
                </TableCell>
                <TableCell>{row.signType}</TableCell>
                <TableCell>{row.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
    </div>
    
  );
}

export default KYC_Details;