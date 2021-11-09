import React from "react";
import { DIV } from "src/shared/styles/style";

export const Profile: React.FC = () => {
  
  const role = localStorage.getItem("role");
  
  return (
    <div className="container d-flex">
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="128" height="128">
          <mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
              <rect width="36" height="36" fill="white" />
          </mask>
          <g mask="url(#mask__beam)">
              <rect width="36" height="36" fill="#eecab1" />
              <rect x="0" y="0" width="36" height="36" transform="translate(-5 9) rotate(209 18 18) scale(1.2)" fill="#240910" rx="36" />
              <g transform="translate(-1 4.5) rotate(-9 18 18)">
                  <path d="M13,21 a1,0.75 0 0,0 10,0" fill="white" />
                  <rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white" />
                  <rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white" />
              </g>
          </g>
      </svg>
      {role !== "teacher" ? <DIV>Ученик</DIV> : <DIV>Учитель</DIV>}
    </div>
  )
}
