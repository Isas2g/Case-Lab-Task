import { useState } from "react"
import {Form, Col, Row, Button, ToggleButton} from "react-bootstrap";
import { ModalComponent } from "../../../../shared/components/Modal";
import { UserList } from "../../../Search/Users";
import {observer} from "mobx-react-lite";
import store from "../../../Search/Users/store";
import UserForm from "./subcomponents/UserForm";

interface Props {
  trackId: number;
}

export const TrackAssign = observer(({trackId}:Props): JSX.Element => {
  
  const [show, setModalShow] = useState(false);
  
  return (
    <div>
      <Button onClick={() => setModalShow(true)}>Назначить учеников</Button>
      
        <ModalComponent show={show} onHide={() => setModalShow(false)} heading="Ученики трека" title="" remove={false} track={undefined}>
          <h4>Список студентов:</h4>
          {/*<StudentList trackId={trackId}/>*/}
          <UserForm />
          <UserList trackId={trackId} />
        </ModalComponent>
    </div>
  )
})