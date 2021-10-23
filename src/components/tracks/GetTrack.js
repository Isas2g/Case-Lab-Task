import React from 'react';
import {getTrack} from "../../actions/tracks";
import { connect } from "react-redux";

class GetTrack extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getTrack(id);
    }

    render() {
        const { track } = this.props.track;
        console.log(track);
        return (
            <div>
                <h4>Track {track && track.id}</h4>
                {/*track && track.data.name ? track.data.name : "[Empty]"*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        track: state.track
    };
}

export default connect(mapStateToProps, {
    getTrack
})(GetTrack);