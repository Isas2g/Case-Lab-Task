import { observer } from "mobx-react-lite";
import {  useEffect, useState } from "react";
import { ModalComponent } from "../../../../shared/components/Modal"
import store from "../../store";
import style from './style/index.module.css';

interface Props {
  show: boolean
  onHide: ModalFunc
  type: 'course' | 'event' | 'entryTest' | 'pdf'
  mutated: number
  setMutated: SetMutatedFunc
  trackDetail: TrackDetail
}

type SetMutatedFunc = (num: number) => void

export const DetailUpdateModal = observer(
  ({
    show,
    onHide,
    type,
    mutated,
    setMutated,
    trackDetail,
  }: Props): JSX.Element => {
    const [searches, setSearches]: any = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
      if (type === 'course') {
        store.getTrackDetailCourses(searchQuery)
        setSearches(store.courses)
      } else {
        store.getTrackDetailEvents(searchQuery)
        setSearches(store.events)
      }
    }, [searchQuery, type])
      
    
    
    const changeEntity = async(id: number) => {
      await store.updateTrackDetail({
        ...trackDetail.data,
        entityId: id
      }, trackDetail.id);
      onHide();
      setMutated(mutated + 1);
    }

    return (
      <ModalComponent
        title="Изменить элемент трека"
        heading=""
        show={show}
        onHide={onHide}
        remove={false}
        track={undefined}
      >
        <input
          type="text"
          onChange={({ target }) => setSearchQuery(target.value)}
        />

        {searches.map((item: Course | Event) => (
          <p className={style.searchItem} onClick={() => changeEntity(item.id)}>
            {item.id} {item.name}
          </p>
        ))}
      </ModalComponent>
    )
  },
)
