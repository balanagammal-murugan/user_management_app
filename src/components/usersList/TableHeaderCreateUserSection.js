import './TableHeaderCreateUserSection.css'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import * as constants from '../../helper/constants';

const TableHeaderCreateUserSection = ({toggleManageUser}) => {
  return (
      <Table>
        <TableRow>
          <TableCell align='left'><p className='Title'>Users</p></TableCell>
          <TableCell align='right'>
              <Button 
              variant="contained" 
              sx={{ backgroundColor: '#03b8c5'}}
              onClick={() => toggleManageUser(constants.CREATE_USER)}
              startIcon={<AddIcon />}>
              {constants.CREATE_USER}
              </Button>
          </TableCell>
        </TableRow>        
      </Table>
  )
}

export default TableHeaderCreateUserSection;