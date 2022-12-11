import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import './ListItems.css';

const ListItem = (props) => {
  return (
    <TableContainer className='Table-Body' component={Paper}>
      <Table aria-label="user table">
        <TableHead>
          <TableRow
              key='table-header-row'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell><p className='Table-Header'>NAME</p></TableCell>
            <TableCell><p className='Table-Header'>EMAIL</p></TableCell>
            <TableCell><p className='Table-Header'>ROLE</p></TableCell>
            <TableCell><p className='Table-Header'>ACTIONS</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => props.updateSelectedUser(row)}
            >
              <TableCell component="th" scope="row"><p className='Table-Content'>{row.name}</p></TableCell>
              <TableCell><p className='Table-Content'>{row.email}</p></TableCell>
              <TableCell><p className='Table-Content'>{row.role}</p></TableCell>
              <TableCell align="left">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListItem;

