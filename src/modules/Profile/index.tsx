import { useHistory } from "react-router";

export const Profile = () => {
  
  const role = localStorage.getItem('role');
  const history = useHistory();
  
  const leave = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    
    history.push('/login');
  }
  
  return (
    <div className="container d-flex">
      <div className="m-2" style={{width: 200, height: 200, background: "#f0f0f0"}}></div>
      <div>
        <p>Role: {role}</p>
        <button onClick={leave} className="btn btn-primary">Выйти из аккаунта</button>
      </div>
    </div>
  )
}