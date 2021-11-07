import store from "./store";
import { UserItem } from "./components/UserItem";
import {observer} from "mobx-react-lite";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { WillBeAssignedUserItem } from "./components/WillBeAssignedUserItem";

interface Props {
  trackId: number;
}

export const UserList = observer(({trackId}:Props): JSX.Element => {

  const [willBeAssignedUsers, setWillBeAssignedUsers] = useState([]); 
  
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Дивизион</th>
            <th>Предприятие</th>
            <th>Запись пользователя</th>
          </tr>
        </thead>
        {
          store.users.map( (user: User) => <UserItem willBeAssignedUsers={willBeAssignedUsers} setWillBeAssignedUsers={setWillBeAssignedUsers} user={user} trackId={trackId} key={user.id} />)
        }
      </Table>
      <h3>Будут подписаны</h3>
      <Table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Дивизион</th>
            <th>Предприятие</th>
          </tr>
        </thead>
        {
          willBeAssignedUsers.map( (user: User) => <WillBeAssignedUserItem user={user} key={user.id} />)
        }
      </Table>
    </div>
  )
})