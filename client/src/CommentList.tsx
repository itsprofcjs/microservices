import React from 'react';

function CommentList({ comments }: any) {
    const renderedComments = () =>
        comments.map((comment: any) => (
            <li key={comment.id}>{comment.content}</li>
        ));

    return (
        <article className="content">
            <ul className="ul">{renderedComments()}</ul>
        </article>
    );
}

export default CommentList;
