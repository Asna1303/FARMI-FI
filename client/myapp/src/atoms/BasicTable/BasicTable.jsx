import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Function to format the date to yy/mm/dd
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString(); // Extract last 2 digits of the year
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding leading zero for single digit months
  const day = ('0' + date.getDate()).slice(-2); // Adding leading zero for single digit days
  return `${year}-${month}-${day}`;
}
const BasicTable = ({lotData}) => {
  return (
    <div>
      <TableContainer component={Paper} sx={{ backgroundColor: "#F7C35F", borderRadius: "5"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Work Done</TableCell>
              <TableCell>Yield Obtained in grams</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lotData.map((item) => (
              <TableRow>
                <TableCell>{formatDate(item.date)}</TableCell>
                
                <TableCell>{item.workdone}</TableCell>
                <TableCell>{item.yieldobtained}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTable;


