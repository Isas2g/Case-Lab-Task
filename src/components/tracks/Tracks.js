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
        const { tracksList } = this.props;
        console.log(tracksList);
        return (
            <div>
                <h4>Track List</h4>
                {<ul className="list-group">
                    {tracksList &&
                    tracksList.map((tracks, index) => (
                        <li
                            className={"list-group-item "}
                            key={index}
                        >
                            <ul className="list-group">

                                {tracks.map((track, indexx) => (
                                    <li
                                        className={"list-group-item"}
                                        key={indexx}
                                    >
                                        {track.data.name}
                                    </li>
                                ))}
                            </ul>
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