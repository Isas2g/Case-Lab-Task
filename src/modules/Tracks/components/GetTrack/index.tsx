import store from '../../store'
import React from 'react'
import { Edit, StateList, Student, StudentBtn } from './style'
import { observer } from 'mobx-react-lite'
import { TrackDetailList } from '../../../TrackDetails/components/TrackDetailList'
import { TrackAssign } from '../TrackAssign'
import { ButtonGroup } from 'react-bootstrap'
import styled from 'styled-components'

const Back = styled.div`
  background-color: #ececec;
`

const H3 = styled.h3`
  font-size: large;
  background: #ececec;
`
const State = observer(() => <StateList track={store.track} />)

const EditButton = observer(() => <Edit track={store.track} />)

//TODO previewPicture

const StudentButton = observer(() => <Student track={store.track} />)

const GetTrack = (props: any) => {
  const query = store.getTrack(props.match.params.id)
  const role = localStorage.getItem('role')
  return (
    <>
      <Back className="container">
        <img src={props.match.params.previewPicture} />
        <H3> Трек [id:{props.match.params.id}] </H3>
        <State />
        {role === `teacher` ? (
          <ButtonGroup>
            {role === `teacher` ? <EditButton /> : ''}
            <StudentButton />
            {role === `teacher` ? (
              <TrackAssign trackId={props.match.params.id} />
            ) : (
              ''
            )}
          </ButtonGroup>
        ) : (
          ''
        )}
      </Back>
      <TrackDetailList trackId={props.match.params.id} />
    </>
  )
}

export default GetTrack
