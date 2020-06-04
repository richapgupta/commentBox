import React  from "react";
import { connect } from "react-redux";
import {deleteComment} from "../actions";


const handleDeleteClick = (item, deleteComment) => {
    
    deleteComment(item);
}

const CommentList = (props) => {
    return (
        <div>
            <h3>Comment List</h3>
            <ul>{props.comment.map((item,index) => {
                return (
                    <li key={index}>{item}
                     <button onClick={ () => handleDeleteClick( item, props.deleteComment)}>Delete</button></li> 
                )
            })}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('[state inside comment box]', state.comment);
    return {
        comment: state.comment
    };
}

const mapDispatchToProps = {
    deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);

