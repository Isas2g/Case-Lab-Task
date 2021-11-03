import { useEffect, useState } from "react";
import store from "./store";
import { UserItem } from "./components/UserItem";
import {observer} from "mobx-react-lite";

interface Props {
  searchQuery: string;
  trackId: number;
}

export const UserList: React.FC<Props> = observer(({searchQuery, trackId}) => {

  const [users, setUsers]: any = useState([]);

  useEffect(() => {
    const fetchData = () => {
      store.getUsersBySearch(searchQuery).then()
      console.log(searchQuery);
      setUsers(store.users);
    };
    fetchData();
  }, [searchQuery]);

  return <div>
      {users.map( (user: User) => <UserItem trackId={trackId} user={user} key={user.id} />)}
  </div>
})