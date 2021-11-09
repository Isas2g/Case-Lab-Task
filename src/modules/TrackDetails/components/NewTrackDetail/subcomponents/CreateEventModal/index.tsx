import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ModalComponent } from "../../../../../../shared/components/Modal";
import style from "../../style/index.module.css";
import store from "../../../../store";

interface Props {
  show: boolean;
  onHide: ModalFunc;
  trackId: number;
  setEntityId: setEntityIdFunc;
}

type setEntityIdFunc = (num: number) => void;

export const CreateEventModal = observer(({ show, onHide, setEntityId }: Props): JSX.Element => {
  const [events, setEvents]: any = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    store.getTrackDetailEvents(searchQuery).then();
    setEvents(store.events);
  }, [searchQuery]);

  return (
    <ModalComponent title="Добавить событие" heading="" show={show} onHide={onHide} remove={false} track={undefined}>
      <input type="text" onChange={({ target }) => setSearchQuery(target.value)} />

      {events.map((event: Event) => (
        <p
          className={style.searchItem}
          onClick={() => {
            setEntityId(event.id);
            onHide();
          }}
        >
          {event.id} {event.name}
        </p>
      ))}
    </ModalComponent>
  );
});
