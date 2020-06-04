import React, {Component}  from "react";
import { connect } from "react-redux";
import {addComment} from "../actions";

class CommentBox extends Component {

    state = {
        name: '',
        comment: ''
    };

    handleChange = (event) => {
        this.setState({comment: event.target.value})
    };

    
    handleSubmit = (event) => {
        event.preventDefault();

        // TODO
        // Call the action creator
        // And save the comment

        this.props.addComment(this.state.comment)

        this.setState({comment: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Comment :</h3>
                <input type="text" value={this.state.name} />
                <br/>
                <textarea 
                value={this.state.comment}
                onChange={this.handleChange} />
                
                <br/>
                <button>Submit Comment</button>

            </form>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('[state inside comment box]', state.comment);
    return {
        comment: state.comment
    };
}

const mapDispatchToProps = {
    addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);

