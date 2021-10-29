import { useState } from "react";

type Props = {
    title: string;
    isModalOpen: boolean;
    setIsModalOpen: ModalFunc;
}

type ModalFunc = (isModalOpen: boolean) => void;

export const Modal: React.FC<Props> = ({title, isModalOpen, setIsModalOpen, children}) => {
    
    const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
    return (
        <div className="modal fade show" role="dialog" style={{display: 'block'}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" onClick={() => setIsModalOpen(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
      </div>
    )
}
