import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import './ManageUserModal.css'
import * as constants from '../../helper/constants';
import UserInputSection from './UserInfoInputSection';

const ManageUserModal = (props) => {
    return (
        <div className="modal">
          <div className="overlay"/>
          <div className="modal-content">
            <div id="modal-back-button" className='modal-title'>
              <Button onClick={() => {props.toggleManageUser()}} sx={{ color: 'black'}} startIcon={<ArrowBack />}/>
              {props.userInfo && props.userInfo.name ? constants.UPDATE_USER : constants.CREATE_USER}
            </div>
            <UserInputSection {...props}/>
            {props.showErrorUI.show ? <div className='error-text'>{props.showErrorUI.message}</div> : null }
          </div>
        </div>
    );
}

ManageUserModal.propTypes = {
  toggleManageUser: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }),
}
export default ManageUserModal;