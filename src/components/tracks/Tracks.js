import React from 'react';
import {getAllTracks} from "../../actions/tracks";
import { connect } from "react-redux";

import store from "../../store/store";
import Track from "../../classes/Track";

class Tracks extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }

    componentDidMount() {
         this.props.getAllTracks();
    }

    render() {
        const { tracks } = this.props;
        //console.log(tracks);
        return (
            <div>
                <h4>Track List</h4>
                {<ul className="list-group">
                    {tracks &&
                    tracks.map((track, index) => (
                        <li
                            className={"list-group-item "}
                            key={index}
                        >
                            {track.data.name ? track.data.name : "[Empty]"}
                        </li>
                    ))}
                </ul>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.tracks
    };
}

export default connect(mapStateToProps, {
    getAllTracks
})(Tracks);