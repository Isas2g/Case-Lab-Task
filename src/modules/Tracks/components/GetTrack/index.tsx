import store from "../../store"
import React from "react";
import {Edit, StateList} from "./style";
import {observer} from "mobx-react-lite";
import {Button, ButtonGroup} from "react-bootstrap";
import styled from "styled-components";

const H3 = styled.h3`
    font-size: large;
    background: yellowgreen;
`

const State = observer(() => <StateList track={store.track} />);

const EditButton = observer(() => <Edit track={store.track} />);

//TODO

// const StudentButton = observer(() => <Student track={store.student}/>);
// previewPicture and progress

const GetTrack = (props: any) => {
    const query = store.getTrack(props.match.params.id);
    const token = localStorage.getItem('role');
    return (
        <div className="container">
            <img src={props.match.params.previewPicture} />
            <H3> Трек [id:{props.match.params.id}] </H3>
            <State/>
            {token === `teacher` ?
                <ButtonGroup>
                    <EditButton />
                    <Button>
                        Ученики трека
                    </Button>
                    {/*<StudentButton />*/}
                </ButtonGroup> :
                <div> Прогресс прохождения трека: {props.match.params.progress} </div>
            }
        </div>)
}

export default GetTrack;