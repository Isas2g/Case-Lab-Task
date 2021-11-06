import { observer } from "mobx-react-lite";
import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ModalComponent } from "../../../../../../shared/components/Modal";

interface Props {
    show: boolean;
    onHide: ModalFunc;
}


export const CreateEntryTestModal = observer(({show, onHide}: Props): JSX.Element => {
    
    const [testName, setTestName] = useState('');
    const [testDescription, setTestDescription] = useState('');
    const [testInstruction, setTestInstruction] = useState('');
    const [testDuration, setTestDuration] = useState('');
    
    const submitHandler = (event: FormEvent) => {
      event.preventDefault();
      onHide();
    }
    
    return <ModalComponent title="Добавить входное тестирование" heading="" show={show} onHide={onHide} remove={false} track={undefined}>
        
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Название</Form.Label>
            <Form.Control value={testName} onChange={(e) => setTestName(e.target.value)} type="text" placeholder="Тестовый тест" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Описание</Form.Label>
            <Form.Control value={testDescription} onChange={(e) => setTestDescription(e.target.value)} as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Инсрукция к выполнению</Form.Label>
            <Form.Control value={testInstruction} onChange={(e) => setTestInstruction(e.target.value)} as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Продолжительность</Form.Label>
            <Form.Control value={testDuration} onChange={(e) => setTestDuration(e.target.value)} type="text" placeholder="1 час 30 минут" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Готово
          </Button>
        </Form>
        
    </ModalComponent> 
})