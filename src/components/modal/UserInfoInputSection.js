import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import './UserInfoInputSection.css'
import * as constants from '../../helper/constants';

const UserInputSection = ({userInfo,toggleManageUser}) => {
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [role, setRole] = useState(userInfo.role ? userInfo.role : "User");
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const createUser = () => {
    console.log("$$$$$$$$$$$$$$ssss>"+name);
    console.log("$$$$$$$$$$$$$$ssss>"+email);
    console.log("$$$$$$$$$$$$$$ssss>"+role);
};

  return (
    <>
      <div className='modal-text'>NAME</div>
      <TextField margin="dense" id="outlined-basic" onChange={handleNameChange} variant="outlined" defaultValue={userInfo.name} />
      <div className='modal-text'>EMAIL</div>
      <TextField margin="dense" id="outlined-basic" onChange={handleEmailChange} variant="outlined" defaultValue={userInfo.email}/>
      <div className='modal-text'>ROLE</div>
      <FormControl margin="dense">
            <Select labelId="select-role" id="select-role"  onChange={handleRoleChange} defaultValue = { userInfo.role ? userInfo.role : "User" }>
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
            </Select>
      </FormControl>
      <Button onClick={() => toggleManageUser()}>{constants.CANCEL}</Button>
      <Button 
        variant="contained" 
        sx={{ backgroundColor: '#03b8c5'}}
        onClick={() => createUser()}>
          {userInfo && userInfo.name ? constants.UPDATE_USER : constants.CREATE_USER}
      </Button>
    </>
  )
}
export default UserInputSection;