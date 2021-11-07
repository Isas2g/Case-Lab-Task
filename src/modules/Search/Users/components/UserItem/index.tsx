import { Form } from "react-bootstrap";
import store from "../../../../Tracks/components/TrackAssign/store"

interface Props {
  user: User;
  trackId: number;
  willBeAssignedUsers: User[];
  setWillBeAssignedUsers: SetWillBeAssignedUsers;
}

type SetWillBeAssignedUsers = (users: any) => void;

export const UserItem = ({user, trackId, setWillBeAssignedUsers, willBeAssignedUsers}: Props): JSX.Element => {

    const handleCheckbox = (event:any) => {
        if (event.target.checked) {
            store.createTrackAssign(trackId, user.id);
            setWillBeAssignedUsers(willBeAssignedUsers.concat([user]));
        } else {
            store.deleteTrackAssign(trackId, store.assigns.filter(item => item.data.userId === user.id)[0].id);
            setWillBeAssignedUsers(willBeAssignedUsers.filter((item) => item.id !== user.id));
        }
    }

    return (
        <tr>
            {/* <div className="d-flex justify-content-between align-items-center"> */}
                <th>{user.fullName} [{user.login}]</th>
                <th>{user.data.department}</th>
                <th>{user.data.company}</th>
                <th>
                    <Form.Check
                        type="checkbox"
                        defaultChecked={!!store.assigns.filter(item => item.data.userId === user.id).length}
                        onChange={handleCheckbox}
                    />
                </th>
            {/* </div> */}
        </tr>
    )
}