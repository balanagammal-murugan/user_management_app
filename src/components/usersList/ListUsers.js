import React, { useState, useEffect } from "react";
import ListItem from "./ListItems";
import TableHeaderCreateUserSection from "./TableHeaderCreateUserSection";
import ManageUserModal from "../modal/ManageUserModal";
import * as constants from '../../helper/constants'

function ListUsers(){
  const [showManageUser, setShowManageUser] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})
  const [userList, setUserList] = useState([{}])
  const [showErrorUI, setShowErrorUI] = useState(
    {message : 'oops something went wrong', show: false})
  
  const fetchData = () => {
    return fetch("/user")
          .then((response) => response.json())
          .then((data) => setUserList(data.users));
  }

  const createUser = (user) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: user.name, email: user.email, role: user.role})
    };
    return fetch("/user",requestOptions)
          .then((response) => {
            if(response.ok){
            fetchData();
            setShowErrorUI({message:'',show:false});
            toggleManageUser();
            } else if(response.status == 400) {
              setShowErrorUI({message : "Invalid input, please provide proper inputs", show : true})
            }
          });
  };

  const updateUser = (user) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: user.name, email: user.email, role: user.role})
    };
    return fetch("/user/"+user.id,requestOptions)
          .then((response) => {
            if(response.ok){
            fetchData();
            setShowErrorUI({message:'',show:false});
            toggleManageUser();
            } else if(response.status == 400) {
              setShowErrorUI({message : "Invalid input, please provide proper inputs", show : true})
            }
          });
  };

  const deleteUser = (user) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch("/user/"+user.id,requestOptions)
          .then((response) => {
            if(response.ok){
              fetchData();
            }
          });
  };

  useEffect(() => {
    fetchData();
  },[]);

  const toggleManageUser = (action) => {
    setShowErrorUI({message:'',show:false});
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
  
  let props = {
    toggleManageUser,
    createUser,
    updateUser,
    deleteUser,
    updateSelectedUser,
    list : userList,
    userInfo : selectedUser,
    showErrorUI
  }
  return (
    <div className="ListPadding">
     <TableHeaderCreateUserSection {...props}/>
     <ListItem {...props}/>
     {showManageUser ? <ManageUserModal {...props}/> : null } 
    </div>
  )
};

export default ListUsers;
