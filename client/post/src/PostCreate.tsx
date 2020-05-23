import React, { useState, FormEvent } from 'react';

import axios from 'axios';

export default function PostCreate() {
    const [title, setTitle] = useState('');

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.post('http://localhost:4000/posts', { title });

        setTitle('');
    };

    return (
        <article className="PostCreate is-flex">
            <form onSubmit={onSubmit}>
                <section className="field">
                    <fieldset className="">
                        <legend className="label"> Title </legend>

                        <section className="control">
                            <input
                                className="input"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </section>
                    </fieldset>
                </section>

                <button className="button is-info"> Submit </button>
            </form>
        </article>
    );
}
