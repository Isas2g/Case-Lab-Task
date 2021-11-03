import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import store from "../../store";

interface Props {
  trackId: number;
  mutated: number;
  setMutated: SetMutatedFunc;
}

type SetMutatedFunc = (num: number) => void;

export const NewTrackDetail: React.FC<Props> = ({trackId, mutated, setMutated}) => {
    
    const [createMode, setCreateMode] = useState(false);
    
    const [type, setType] = useState('');
    const [required, setRequired] = useState(false);
    
    // type: 'course' | 'event' | 'entryTest' | 'pdf';
    // entityId: integer;
    // sortIndex: integer;
    // required: boolean;
    
    const createDetail = (event: FormEvent) => {
      event.preventDefault();
      if (type === 'course' ||
            type === 'event' ||
            type === 'entryTest' ||
            type === 'pdf'
        ) {
            store.addTrackDetail({
                type, 
                entityId: 0,
                sortIndex: 0,
                required
            }, trackId);
          }
      setCreateMode(false);
      setMutated(mutated+1);
    }
    
    return <div>
        <Button onClick={() => setCreateMode(true)}>Создать элемент трека</Button>
        {createMode ? 
            <Form onSubmit={createDetail} className="form">
                <Form.Label htmlFor="type">Тип</Form.Label>
                <Form.Select onChange={(event: ChangeEvent<HTMLSelectElement>) => setType(event.target.value)} placeholder="Имя элемента" id="type">
                    <option value="course">Курс</option>
                    <option value="event">Событие</option>
                    <option value="entryTest">Тест</option>
                    <option value="pdf">PDF документ</option>
                </Form.Select>
                <Form.Label htmlFor="required">Обязательный</Form.Label>
                <Form.Select onChange={(event: ChangeEvent<HTMLSelectElement>) => setRequired(!!event.target.value)} id="required">
                  <option value="">Нет</option>
                  <option value="1">Да</option>
                </Form.Select>
                
                <Button type="submit">Создать</Button>
            </Form>
            :
            ''
        }
    </div>;
};