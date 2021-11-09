import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import store from "../../store";

import classes from "./style/index.module.scss";
import { CreateCourseModal } from "./subcomponents/CreateCourseModal";
import { CreateEntryTestModal } from "./subcomponents/CreateEntryTestModal";
import { CreateEventModal } from "./subcomponents/CreateEventModal";
import { CreatePdfModal } from "./subcomponents/CreatePdfModal";

interface Props {
  trackId: number;
  mutated: number;
  setMutated: SetMutatedFunc;
  lastIndex: number;
}

type SetMutatedFunc = (num: number) => void;

export const NewTrackDetail: React.FC<Props> = ({ trackId, mutated, setMutated, lastIndex }) => {
  const [createMode, setCreateMode] = useState(false);
  const [chooseMode, setChooseMode] = useState(false);

  const [type, setType] = useState("");
  const [required, setRequired] = useState(false);
  const [entityId, setEntityId] = useState(0);

  const [modalCourseShow, setModalCourseShow] = useState(false);
  const [modalEventShow, setModalEventShow] = useState(false);
  const [modalEntryTestShow, setModalEntryTestShow] = useState(false);
  const [modalPdfShow, setModalPdfShow] = useState(false);

  // type: 'course' | 'event' | 'entry_test' | 'pdf';
  // entityId: integer;
  // sortIndex: integer;
  // required: boolean;

  const createDetail = (event: FormEvent) => {
    event.preventDefault();
    if (type === "course" || type === "event" || type === "pdf") {
      store
        .addTrackDetail(
          {
            type,
            entityId,
            sortIndex: lastIndex,
            required,
          },
          trackId,
        )
        .then(() => setMutated(mutated + 1));
    }
    if (type === "entry_test") {
      store
        .addTrackDetail(
          {
            type,
            entityId,
            sortIndex: 0,
            required,
          },
          trackId,
        )
        .then(() => setMutated(mutated + 1));
    }

    setCreateMode(false);
  };

  const entryTest = store.details.filter((detail) => detail.data.type === "entry_test");

  return (
    <div>
      <Button variant={"outline"} className={"btn fourth"} onClick={() => setChooseMode(!chooseMode)}>
        Добавить деталь трека
      </Button>

      {chooseMode ? (
        <div className={classes.chooseType}>
          <p
            onClick={() => {
              setType("course");
              setChooseMode(false);
              setCreateMode(true);
            }}
          >
            Курс
          </p>
          <p
            onClick={() => {
              setType("event");
              setChooseMode(false);
              setCreateMode(true);
            }}
          >
            Событие
          </p>
          {entryTest.length === 0 ? (
            <p
              onClick={() => {
                setType("entry_test");
                setChooseMode(false);
                setCreateMode(true);
              }}
            >
              Входное тестирование
            </p>
          ) : (
            ""
          )}
          <p
            onClick={() => {
              setType("pdf");
              setChooseMode(false);
              setCreateMode(true);
            }}
          >
            PDF-документ
          </p>
        </div>
      ) : (
        ""
      )}

      {createMode ? (
        <Form onSubmit={createDetail} className="form">
          {type === "course" ? (
            <div>
              <p onClick={() => setModalCourseShow(true)} className={classes.createTrackDetailLink}>
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
            ""
          )}
          {type === "event" ? (
            <div>
              <p onClick={() => setModalEventShow(true)} className={classes.createTrackDetailLink}>
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
            ""
          )}
          {type === "entry_test" ? (
            <div>
              <p onClick={() => setModalEntryTestShow(true)} className={classes.createTrackDetailLink}>
                Создайте входное тестирование
              </p>
              <CreateEntryTestModal show={modalEntryTestShow} onHide={() => setModalEntryTestShow(false)} />
            </div>
          ) : (
            ""
          )}
          {type === "pdf" ? (
            <div>
              <p onClick={() => setModalPdfShow(true)} className={classes.createTrackDetailLink}>
                Создайте pdf документ
              </p>
              <CreatePdfModal show={modalPdfShow} onHide={() => setModalPdfShow(false)} />
            </div>
          ) : (
            ""
          )}

          <Form.Check
            label="Обязательный"
            type="checkbox"
            onChange={() => {
              setRequired(!required);
            }}
          />

          <Button type="submit">Создать</Button>
        </Form>
      ) : (
        ""
      )}
    </div>
  );
};
