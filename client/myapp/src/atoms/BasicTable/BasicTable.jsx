import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, date, workdone, yieldobtained, lotid) {
  return { id, date, workdone, yieldobtained, lotid };
}

const rows = [
  createData(1, '2022-02-02', 'Task 1', 24, 1001),
  createData(2, '2022-02-03', 'Task 2', 37, 1002),
  createData(3, '2022-02-04', 'Task 3', 24, 1003),
  createData(4, '2022-02-05', 'Task 4', 67, 1004),
  createData(5, '2022-02-06', 'Task 5', 49, 1005),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Work Done</TableCell>
            <TableCell>Yield Obtained in grams</TableCell>
            <TableCell>Lot ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.workdone}</TableCell>
              <TableCell>{row.yieldobtained}</TableCell>
              <TableCell>{row.lotid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


