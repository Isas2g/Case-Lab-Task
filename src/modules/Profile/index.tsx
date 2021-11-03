import { useHistory } from "react-router";
import {Avatar} from "./style";
import React from "react";

export const Profile: React.FC = () => {
  
  const role = localStorage.getItem('role');
  
  return (
    <div className="container d-flex">
      <Avatar src='url'/>
      <div>
        <p>Роль: {role === "teacher" ? 'Преподаватель' : 'Ученик'}</p>
      </div>
    </div>
  )
}