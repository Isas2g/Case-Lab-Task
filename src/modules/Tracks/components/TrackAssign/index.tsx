import { useState } from "react"
import { Button } from "react-bootstrap"
import { ModalComponent } from "../../../../shared/components/Modal";
import { UserList } from "../UserList";

interface Props {
  trackId: number;
}

export const TrackAssign: React.FC<Props> = ({trackId}) => {
  
  const [show, setModalShow] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div>
      <Button onClick={() => setModalShow(true)}>Назначить учеников</Button>
      
        <ModalComponent show={show} onHide={() => setModalShow(false)} heading="Назначить студентов" title="Поиск студентов" remove={false} track={undefined}>
          <input onChange={(event) => setSearchQuery(event.target.value)} className="form-control" type="text" />
          <UserList searchQuery={searchQuery} trackId={trackId} />
        </ModalComponent>
    </div>
  )
}