import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import './ManageUserModal.css'
import * as constants from '../../helper/constants';
import UserInputSection from './UserInfoInputSection';

const ManageUserModal = ({toggleManageUser,userInfo}) => {
    return (
        <div className="modal">
          <div className="overlay"/>
          <div className="modal-content">
            <div id="modal-back-button" className='modal-title'>
              <Button onClick={() => toggleManageUser()} sx={{ color: 'black'}} startIcon={<ArrowBack />}/>
              {userInfo && userInfo.name ? constants.UPDATE_USER : constants.CREATE_USER}
            </div>
            <UserInputSection userInfo={userInfo} toggleManageUser={toggleManageUser}/>
          </div>
        </div>
    );
}

ManageUserModal.propTypes = {
  toggleManageUser: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }),
}
export default ManageUserModal;