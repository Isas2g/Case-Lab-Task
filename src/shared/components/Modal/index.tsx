import { Modal, Button } from "react-bootstrap";
import "./style/style.css"

interface Props {
    title: string;
    heading: string;
    show: boolean;
    onHide: ModalFunc;
}

type ModalFunc = () => void;

export const ModalComponent: React.FC<Props> = ({title, show, onHide, heading,  children}) => {
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className="cardTitle">{title}</h4>
                <div>{children}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
