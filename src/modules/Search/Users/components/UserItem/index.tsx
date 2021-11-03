interface Props {
  user: User;
  trackId: number;
}

export const UserItem: React.FC<Props> = ({user, trackId}) => {
  return <div>
    <div className="d-flex justify-content-between align-items-center">
        <div>{user.fullName}</div>
        <div><input type="checkbox" /></div>
    </div>
    <hr />
  </div>
}