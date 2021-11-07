import React from "react";
import { Button } from "react-bootstrap";

import {useHistory} from "react-router-dom";


export const NewTrack: React.FC = () => {
    const history = useHistory();
    return(
        <Button variant="light" onClick={() => history.push('/tracks/new')}><b>+</b></Button>
    )
}