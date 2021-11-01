import { useHistory } from "react-router";
<<<<<<< HEAD
import Avatar from "./style";
=======
import {Avatar} from "./style";
import React from "react";
>>>>>>> 03609474e02f28945c8cbbf9cea71239fa3de63a

export const Profile: React.FC = () => {
  
  const role = localStorage.getItem('role');
  
  return (
    <div className="container d-flex">
      <Avatar src="url"/>
      <div>
        <p>Role: {role}</p>
      </div>
    </div>
  )
}