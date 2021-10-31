import { useHistory } from "react-router";
import {Avatar} from "./style";

interface Props {
  token: string;
  setToken: TokenFunc; 
}

type TokenFunc = (str: string) => void;

export const Profile: React.FC<Props> = ({token, setToken}) => {
  
  const role = localStorage.getItem('role');
  const history = useHistory();
  
  const leave = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    
    setToken('');
    history.push('/login');
  }
  
  return (
    <div className="container d-flex">
      <Avatar src='url'/>
      <div>
        <p>Role: {role}</p>
        <button onClick={leave} className="btn btn-primary">Выйти из аккаунта</button>
      </div>
    </div>
  )
}