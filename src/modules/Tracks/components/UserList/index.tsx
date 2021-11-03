import { useEffect, useState } from "react";
import store from "../../store";
import { UserItem } from "./UserItem";

interface Props {
  searchQuery: string;
  trackId: number;
}

export const UserList: React.FC<Props> = ({searchQuery, trackId}) => {
  
  const [users, setUsers]: any = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      setUsers(await store.getUsersBySearch(searchQuery));
    };
    fetchData();
  }, [searchQuery]);
  
  return <div>
      {users.map( (user: User) => <UserItem trackId={trackId} user={user} key={user.id} />)}
  </div>
}