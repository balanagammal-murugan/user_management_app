import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import './UserInfoInputSection.css'
import * as constants from '../../helper/constants';

export default function UserInputSection({userInfo,toggleManageUser}) {
  return (
    <>
      <div className='modal-text'>NAME</div>
      <TextField margin="dense" id="outlined-basic" variant="outlined" defaultValue={userInfo.name} />
      <div className='modal-text'>EMAIL</div>
      <TextField margin="dense" id="outlined-basic" variant="outlined" defaultValue={userInfo.email}/>
      <div className='modal-text'>ROLE</div>
      <FormControl margin="dense">
            <Select labelId="select-role" id="select-role" defaultValue={userInfo.role}>
                <MenuItem value="menu-item-user">User</MenuItem>
                <MenuItem value="menu-item-admin">Admin</MenuItem>
            </Select>
      </FormControl>
      <Button onClick={() => toggleManageUser()}>{constants.CANCEL}</Button>
      <Button variant="contained" sx={{ backgroundColor: '#03b8c5'}}>{userInfo && userInfo.name ? constants.UPDATE_USER : constants.CREATE_USER}</Button>
    </>
  )
}