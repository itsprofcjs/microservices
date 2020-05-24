import React, { useState, useEffect } from 'react';

import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

function PostList() {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');

        setPosts(res.data);
    };

    const renderedPosts = Object.values(posts).map((post: any) => {
        return (
            <article
                key={post.id}
                className="card"
                style={{ width: '30%', margin: '1rem' }}
            >
                <section className="card-content">
                    <h3> {post.title} </h3>

                    <hr />

                    <CommentList comments={post.comments} />

                    <hr />

                    <CommentCreate postId={post.id} />
                </section>
            </article>
        );
    });

    return (
        <article className="content is-flex" style={{ flexWrap: 'wrap' }}>
            {renderedPosts}
        </article>
    );
}

export default PostList;
