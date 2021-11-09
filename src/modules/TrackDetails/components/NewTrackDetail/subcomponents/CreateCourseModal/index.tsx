import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ModalComponent } from "../../../../../../shared/components/Modal"
import store from "../../../../store";
import style from "../../style/index.module.css";

interface Props {
    show: boolean;
    onHide: ModalFunc;
    trackId: number;
    setEntityId: setEntityIdFunc; 
}

type setEntityIdFunc = (num: number) => void;

export const CreateCourseModal = observer(({show, onHide, trackId, setEntityId}: Props): JSX.Element => {
    
    const [courses, setCourses]: any = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    
    useEffect(() => {
      store.getTrackDetailCourses(searchQuery);
      setCourses(store.courses);
    }, [searchQuery])
      
    
    
    return <ModalComponent title="Добавить курс" heading="" show={show} onHide={onHide} remove={false} track={undefined}>
        <input type="text" onChange={({target}) => setSearchQuery(target.value)} />
        
        {courses.map((course: Course) => 
          <p className={style.searchItem} onClick={() => {setEntityId(course.id); onHide();}}>{course.id} {course.name} {course.duration}</p>
        )}
        
    </ModalComponent> 
})