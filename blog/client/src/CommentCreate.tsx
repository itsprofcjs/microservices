import React, { useState, FormEvent } from 'react';

import axios from 'axios';

function CommentCreate({ postId }: any) {
    const [content, setContent] = useState('');

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
        });

        setContent('');
    };

    return (
        <article className="is-flex">
            <form onSubmit={onSubmit} className="form">
                <section className="field">
                    <label className="label"> New Comment</label>
                    <section className="control">
                        <input
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="input"
                        />
                    </section>
                </section>

                <button type="submit" className="button is-info">
                    Post Comment
                </button>
            </form>
        </article>
    );
}

export default CommentCreate;
