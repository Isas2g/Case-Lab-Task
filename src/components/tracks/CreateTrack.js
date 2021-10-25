import React from 'react';
import {createTrack} from "../../actions/tracks";
import { connect } from "react-redux";

class CreateTrack extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.handleInputs = this.handleInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            newTrack: {
                name: 'string',
                previewText: "string",
                previewPicture: "string",
                published: true,
                dateTimeStart: 0,
                dateTimeFinish: 0,
                mode: "free"
            }
        };
    }

    handleInputs(event) {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.type === 'file'
                ? 'url'//this.uploadImage(target.value)
                : target.type === 'datetime-local'
                    ? new Date(target.value).getTime() / 1000
                    : target.value;
        const name = target.name;

        this.setState({
            newTrack: {...this.state.newTrack,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        this.props.createTrack(this.state.newTrack)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h4>Create a new track!</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Название:
                        <input name="name" type="text" onChange={this.handleInputs} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Описание:
                        <textarea name="previewText" onChange={this.handleInputs} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Картинка:
                        <input name="previewPicture" type="file" onChange={this.handleInputs} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Опубликовать?&nbsp;
                        <input name="published" type="checkbox" checked={this.state.newTrack.published} onChange={this.handleInputs} />
                    </label>
                    <br />
                    <br />
                    <label>
                        dateTimeStart:
                        <input name="dateTimeStart" type="datetime-local" onChange={this.handleInputs} />
                    </label>
                    <br />
                    <br />
                    <label>
                        dateTimeFinish:
                        <input name="dateTimeFinish" type="datetime-local" onChange={this.handleInputs} />
                    </label>
                    <br />
                    <br />
                    <label>
                        mode:
                        <select onChange={this.handleInputs}>
                            <option value="free">free</option>
                            <option value="coconut">coconut</option>
                            <option value="mango">mango</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Отправить" />
                </form>
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
    createTrack
})(CreateTrack);