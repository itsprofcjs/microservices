import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentList({ postId }: any) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchCommentsList();
    }, []);

    const fetchCommentsList = async () => {
        const res = await axios.get(
            `http://localhost:4001/posts/${postId}/comments`
        );

        setComments(res.data);
    };

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
