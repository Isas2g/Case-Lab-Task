import { observer } from "mobx-react-lite";
import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ModalComponent } from "../../../../../../shared/components/Modal";

interface Props {
  show: boolean;
  onHide: ModalFunc;
}

export const CreatePdfModal = observer(({ show, onHide }: Props): JSX.Element => {
  const [pdfName, setPdfName] = useState("");
  const [pdfDescription, setPdfDescription] = useState("");

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    onHide();
  };

  return (
    <ModalComponent
      title="Добавить входное тестирование"
      heading=""
      show={show}
      onHide={onHide}
      remove={false}
      track={undefined}
    >
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Название</Form.Label>
          <Form.Control
            value={pdfName}
            onChange={(e) => setPdfName(e.target.value)}
            type="text"
            placeholder="Тестовый тест"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PDF-файл</Form.Label>
          <Form.Control value={pdfDescription} onChange={(e) => setPdfDescription(e.target.value)} type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Готово
        </Button>
      </Form>
    </ModalComponent>
  );
});
