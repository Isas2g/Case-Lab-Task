import React from 'react';
import {getAllTracks} from "../../actions/tracks";
import { connect } from "react-redux";

class Tracks extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }

    componentDidMount() {
         this.props.getAllTracks();
    }

    render() {
        const { tracks } = this.props
        console.log(this.props)
        return (
            <div>
                <h4>Track List</h4>

                <ul className="list-group">
                    {tracks &&
                    tracks.map((track, index) => (
                        <li
                            className={"list-group-item "}
                            key={index}
                        >
                            {track.id}
                        </li>
                    ))}
                </ul>
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