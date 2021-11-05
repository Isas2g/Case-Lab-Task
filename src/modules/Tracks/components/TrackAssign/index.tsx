import { useState } from "react"
import { Button } from "react-bootstrap";
import { ModalComponent } from "../../../../shared/components/Modal";
import { UserList } from "../../../Search/Users";
import { observer } from "mobx-react-lite";
import store from "../TrackAssign/store";
import UserForm from "./subcomponents/UserForm";

interface Props {
  trackId: number;
}

export const TrackAssign = observer(({trackId}:Props): JSX.Element => {

  store.readTrackAssigns(trackId).then();

  const [show, setModalShow] = useState(false);
  
  return (
    <div>
      <Button className={"btn-primary h-100"}  onClick={() => setModalShow(true)}>Назначить учеников</Button>
      
        <ModalComponent show={show} onHide={() => setModalShow(false)} heading="Ученики трека" title="" remove={false} track={undefined}>
          <h4>Список студентов:</h4>
          <UserForm />
          <UserList trackId={trackId} />
        </ModalComponent>
    </div>
  )
})