import { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import store from '../../store'

import classes from './style/index.module.css'
import { CreateCourseModal } from './subcomponents/CreateCourseModal'
import { CreateEventModal } from './subcomponents/CreateEventModal'

interface Props {
  trackId: number
  mutated: number
  setMutated: SetMutatedFunc
  lastIndex: number
}

type SetMutatedFunc = (num: number) => void

export const NewTrackDetail: React.FC<Props> = ({
  trackId,
  mutated,
  setMutated,
  lastIndex,
}) => {
  const [createMode, setCreateMode] = useState(false)
  const [chooseMode, setChooseMode] = useState(false)

  const [type, setType] = useState('')
  const [required, setRequired] = useState(false)
  const [entityId, setEntityId] = useState(0)

  const [modalCourseShow, setModalCourseShow] = useState(false)
  const [modalEventShow, setModalEventShow] = useState(false)

  // type: 'course' | 'event' | 'entryTest' | 'pdf';
  // entityId: integer;
  // sortIndex: integer;
  // required: boolean;

  const createDetail = (event: FormEvent) => {
    event.preventDefault()
    if (
      type === 'course' ||
      type === 'event' ||
      type === 'entryTest' ||
      type === 'pdf'
    ) {
      store.addTrackDetail(
        {
          type,
          entityId,
          sortIndex: lastIndex,
          required,
        },
        trackId,
      )
    }
    setCreateMode(false)
    setMutated(mutated + 1)
  }

  return (
    <div>
      <Button onClick={() => setChooseMode(!chooseMode)}>
        Создать элемент трека
      </Button>

      {chooseMode ? (
        <div className={classes.chooseType}>
          <p
            onClick={() => {
              setType('course')
              setChooseMode(false)
              setCreateMode(true)
            }}
          >
            Курс
          </p>
          <p
            onClick={() => {
              setType('event')
              setChooseMode(false)
              setCreateMode(true)
            }}
          >
            Событие
          </p>
        </div>
      ) : (
        ''
      )}

      {createMode ? (
        <Form onSubmit={createDetail} className="form">
          {type === 'course' ? (
            <div>
              <p
                onClick={() => setModalCourseShow(true)}
                className={classes.createTrackDetailLink}
              >
                Выберите курс из доступных
              </p>
              <CreateCourseModal
                setEntityId={setEntityId}
                show={modalCourseShow}
                onHide={() => setModalCourseShow(false)}
                trackId={trackId}
              />
            </div>
          ) : (
            ''
          )}
          {type === 'event' ? (
            <div>
              <p
                onClick={() => setModalEventShow(true)}
                className={classes.createTrackDetailLink}
              >
                Выберите мероприятие из доступных
              </p>
              <CreateEventModal
                setEntityId={setEntityId}
                show={modalEventShow}
                onHide={() => setModalEventShow(false)}
                trackId={trackId}
              />
            </div>
          ) : (
            ''
          )}

          <Form.Check
            label="Обязательный"
            type="checkbox"
            onChange={() => {
              setRequired(!required)
            }}
          />

          <Button type="submit">Создать</Button>
        </Form>
      ) : (
        ''
      )}
    </div>
  )
}
