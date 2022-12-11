import React, { useState, useEffect } from "react";
import ListItem from "./ListItems";
import TableHeaderCreateUserSection from "./TableHeaderCreateUserSection";
import ManageUserModal from "../modal/ManageUserModal";
import * as constants from '../../helper/constants'

function ListUsers(){
  const [showManageUser, setShowManageUser] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})
  const [userList, setUserList] = useState([{}])
  
  const fetchData = () => {
    return fetch("/user")
          .then((response) => response.json())
          .then((data) => setUserList(data.users));
  }

  useEffect(() => {
    fetchData();
  },[userList]);

  const toggleManageUser = (action) => {
    if(action === constants.CREATE_USER)
      setSelectedUser({})
    setShowManageUser(!showManageUser);
  };

  const updateSelectedUser = (list) => {
    setSelectedUser(list);
    toggleManageUser('update');
  };

  if(showManageUser) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className="ListPadding">
     <TableHeaderCreateUserSection toggleManageUser={toggleManageUser}/>
     <ListItem list={userList} updateSelectedUser={updateSelectedUser}/>
     {showManageUser ? <ManageUserModal toggleManageUser={toggleManageUser} userInfo={selectedUser}/> : null } 
    </div>
  )
};

export default ListUsers;
