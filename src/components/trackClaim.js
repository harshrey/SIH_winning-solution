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
        borderRadius: 5,
        paddingLeft:'5%',
        paddingRight:'5%',

    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
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

let USERS = [], STATUSES = ['Approved', 'Pending', 'Rejected'], CLAIMS = ["Form 31", "Form 19", "Form 10C", "Form 10D"];
for(let i=0;i<4;i++) {
    USERS[i] = {
        claimid :faker.datatype.uuid(), // 12 digit claim id in database
        claimtype: CLAIMS[Math.floor(Math.random()*CLAIMS.length)],
        joinDate: faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }

}



function TrackClaim() {
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

      <centre><h1> Track Claim </h1></centre>
    
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Claim ID </TableCell>
              <TableCell className={classes.tableHeaderCell}>Claim Type</TableCell>
              <TableCell className={classes.tableHeaderCell}>Raised Claim date</TableCell>
              <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                    <Grid container>
                        
                        <Grid item lg={10}>
                            <Typography className={classes.claimid}>{row.claimid}</Typography>
                            
                        </Grid>
                    </Grid>
                  </TableCell>
                <TableCell>
                    <Typography color="primary" variant="subtitle2">{row.claimtype}</Typography>
                    
                  </TableCell>
                <TableCell>{row.joinDate}</TableCell>
                <TableCell>
                    <Typography 
                      className={classes.status}
                      style={{
                          backgroundColor: 
                          ((row.status === 'Approved' && 'green') ||
                          (row.status === 'Pending' && 'blue') ||
                          (row.status === 'Rejected' && 'red'))
                      }}
                    >{row.status}</Typography>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  </div>
  );
}

export default TrackClaim;