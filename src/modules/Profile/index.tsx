import { useHistory } from "react-router";
import {Avatar} from "./style";
import React from "react";

export const Profile: React.FC = () => {
  
  const role = localStorage.getItem('role');
  
  return (
    <div className="container d-flex">
      <Avatar role={role} src="url"/>
      {/* <div>
        <p className="role">Role: {role}</p>
      </div> */}
    </div>
  )
}