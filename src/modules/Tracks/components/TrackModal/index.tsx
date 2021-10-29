import store from "../../store";
import { SetStateAction, useEffect, useState } from "react";

import { Modal } from '../../../../shared/components/Modal';
import { Link } from "react-router-dom";
interface Props {
  trackId: number;
  isModalOpen: boolean;
  setIsModalOpen: ModalFunc;
}

type ModalFunc = (isModalOpen: boolean) => void;

export const TrackModal: React.FC<Props> = ({trackId, isModalOpen, setIsModalOpen}) => {

    const [data, setData] = useState({
      name: '',
      previewPicture: '',
      previewText: '',
      published: false,
      dateTimeStart: 0,
      dateTimeFinish: 0,
      mode: 'free'
    });
    
    useEffect(() => {
      const fetchData = async () => {
        setData((await store.getTrack(trackId)).data);
        console.log(data);
      };
      fetchData();
    }, []);
    
    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={data.name}>
          <p>PreviewPicture: {data.previewPicture}</p>
          <p>PreviewText: {data.previewText}</p>
          <p>Published: {data.published}</p>
          <p>dateTimeStart: {data.dateTimeStart}</p>
          <p>dateTimeFinish: {data.dateTimeFinish}</p>
          <p>Mode: {data.mode}</p>
          
          <Link to={'/tracks/' + trackId}>See track</Link>
          
        </Modal>
    )
};