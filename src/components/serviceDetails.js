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
      paddingLeft:'5%',
      borderRadius: 15,
      paddingRight:'5%'
        
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
        srNo: i+1,
        memberId: faker.datatype.uuid(),
        estbName: faker.company.companyName(),
        estbId: faker.datatype.uuid(),
        dojEPF: faker.date.past().toLocaleDateString('en-US'),
        doeEPF: faker.date.past().toLocaleDateString('en-US'),
        dojEPS: faker.date.past().toLocaleDateString('en-US'),
        doeEPS: faker.date.past().toLocaleDateString('en-US'),
        dojFPS: faker.date.past().toLocaleDateString('en-US'),
        doeFPS: faker.date.past().toLocaleDateString('en-US') 
    }
}

function ServiceDetails() {
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

  <div className = "Container">

    <centre><h1> Service Details </h1></centre>

    <TableContainer component={Paper} className={classes.tableContainer}>
             <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Sr No.</TableCell>
            <TableCell className={classes.tableHeaderCell}>Member ID</TableCell>
            <TableCell className={classes.tableHeaderCell}>Establishment Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Establishment ID</TableCell>
            <TableCell className={classes.tableHeaderCell}>DOJ EPF</TableCell>
            <TableCell className={classes.tableHeaderCell}>DOE EPF</TableCell>
            <TableCell className={classes.tableHeaderCell}>DOJ EPS</TableCell>
            <TableCell className={classes.tableHeaderCell}>DOE EPS</TableCell>
            <TableCell className={classes.tableHeaderCell}>DOJ FPS</TableCell>
            <TableCell className={classes.tableHeaderCell}>DOE FPS</TableCell>
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
                          <Typography className={classes.srNo}>{row.srNo}</Typography>
                          {/* <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.phone}</Typography> */}
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.memberId}</Typography>
                  {/* <Typography color="textSecondary" variant="body2">{row.company}</Typography> */}
                </TableCell>
              <TableCell>{row.estbName}</TableCell>
              <TableCell>{row.estbId}</TableCell>
              <TableCell>{row.dojEPF}</TableCell>
              <TableCell>{row.doeEPF}</TableCell>
              <TableCell>{row.dojEPS}</TableCell>
              <TableCell>{row.doeEPS}</TableCell>
              <TableCell>{row.dojFPS}</TableCell>
              <TableCell>{row.doeFPS}</TableCell>
              
                {/* <TableCell>{row.signType}</TableCell>
                <TableCell>{row.remarks}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    </TableContainer>
    </div>
  );
}

export default ServiceDetails;