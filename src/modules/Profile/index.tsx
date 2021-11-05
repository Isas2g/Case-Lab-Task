import { Avatar } from './style'
import React from 'react'
import userIcon from '../../shared/assets/user-icon.png'

export const Profile: React.FC = () => {
  const role = localStorage.getItem('role')

  return (
    <div className="container d-flex">
      <Avatar role={role} src={userIcon} />
    </div>
  )
}
