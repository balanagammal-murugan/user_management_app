import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import './UserInfoInputSection.css'
import * as constants from '../../helper/constants';

const UserInputSection = (props) => {
  const [name, setName] = useState(props.userInfo.name);
  const [email, setEmail] = useState(props.userInfo.email);
  const [role, setRole] = useState(props.userInfo.role ? props.userInfo.role : "User");
  const [id, _] = useState(props.userInfo.id);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  
  const userOperation = (action) => {
    let user = {
      id,
      name,
      email,
      role
    }
    action === 'add' ? props.createUser(user) : props.updateUser(user);
  };

  return (
    <>
      <div className='modal-text'>NAME</div>
      <TextField margin="dense" id="outlined-basic" onChange={handleNameChange} variant="outlined" defaultValue={props.userInfo.name} />
      <div className='modal-text'>EMAIL</div>
      <TextField margin="dense" id="outlined-basic" onChange={handleEmailChange} variant="outlined" defaultValue={props.userInfo.email}/>
      <div className='modal-text'>ROLE</div>
      <FormControl margin="dense">
            <Select labelId="select-role" id="select-role"  onChange={handleRoleChange} defaultValue = { props.userInfo.role ? props.userInfo.role : "User" }>
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
            </Select>
      </FormControl>
      <Button onClick={() => props.toggleManageUser()}>{constants.CANCEL}</Button>
      <Button 
        variant="contained" 
        sx={{ backgroundColor: '#03b8c5'}}
        onClick={() => props.userInfo && props.userInfo.name ? userOperation('update') : userOperation('add') }>
          {props.userInfo && props.userInfo.name ? constants.UPDATE_USER : constants.CREATE_USER}
      </Button>
    </>
  )
}
export default UserInputSection;