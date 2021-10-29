import store from "../../store";
import { SetStateAction, useEffect, useState } from "react";
import React from "react";
import { Modal } from '../../../../shared/components/Modal';
import { Link } from "react-router-dom";
interface Props {
  track: Track;
  isModalOpen: boolean;
  setIsModalOpen: ModalFunc;
}

type ModalFunc = (isModalOpen: boolean) => void;

export const TrackModal: React.FC<Props> = ({track, isModalOpen, setIsModalOpen}) => {

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
      const fetchData = () => {
        setData(track.data);
        //console.log(data);
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
          
          <Link to={'/tracks/' + track.id}>See track</Link>
          
        </Modal>
    )
};