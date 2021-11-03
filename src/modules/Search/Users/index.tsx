import { useEffect, useState } from "react";
import store from "./store";
import { UserItem } from "./components/UserItem";
import {observer} from "mobx-react-lite";

interface Props {
  trackId: number;
}

export const UserList = observer(({trackId}:Props): JSX.Element => {

  return (
    <div>
      {store.users.map( (user: User) => <UserItem trackId={trackId} user={user} key={user.id} />)}
    </div>
  )
})