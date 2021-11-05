import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import store from '../../../../Tracks/components/TrackAssign/store'

interface Props {
  user: User
  trackId: number
}

export const UserItem = ({ user, trackId }: Props): JSX.Element => {
  const handleCheckbox = (event: any) => {
    event.target.checked
      ? store.createTrackAssign(trackId, user.id)
      : store.deleteTrackAssign(
          trackId,
          store.assigns.filter((item) => item.data.userId === user.id)[0].id,
        )
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          {user.fullName} [{user.login}]
        </div>
        <div>
          <Form.Check
            type="checkbox"
            defaultChecked={
              !!store.assigns.filter((item) => item.data.userId === user.id)
                .length
            }
            onChange={handleCheckbox}
          />
        </div>
      </div>
      <hr />
    </div>
  )
}
