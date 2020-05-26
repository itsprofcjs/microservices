import React from 'react';

function CommentList({ comments }: any) {
    const renderedComments = () =>
        comments.map((comment: any) => {
            let content = comment.content;

            if (comment.status === 'pending') {
                content = 'Comment is awaiting approval';
            } else if (comment.status === 'rejected') {
                content = 'Comment is rejected';
            } else if (comment.status === 'pending') {
                content = 'Comment is awaiting moderation';
            }

            return <li key={comment.id}>{content}</li>;
        });

    return (
        <article className="content">
            <ul className="ul">{renderedComments()}</ul>
        </article>
    );
}

export default CommentList;
