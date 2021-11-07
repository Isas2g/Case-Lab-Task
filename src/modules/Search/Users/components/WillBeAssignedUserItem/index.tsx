interface Props {
  user: User;
}


export const WillBeAssignedUserItem = ({user}: Props): JSX.Element => {


    return (
        <tr>
            <th>{user.fullName} [{user.login}]</th>
            <th>{user.data.department}</th>
            <th>{user.data.company}</th>
        </tr>
    )
}