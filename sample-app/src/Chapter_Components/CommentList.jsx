import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "임승현",
        comment: "안녕하세요.",
    },
    {
        name: "김윤주",
        comment: "안녕하세요.",
    },
    {
        name: "박세진",
        comment: "안녕하세요.",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList