import React from 'react';

import PostCreate from './PostCreate';
import PostList from './PostList';

export default function App() {
    return (
        <article className="App container">
            <h1> Create Posts </h1>
            <PostCreate />
            <hr />
            <h1> Posts </h1>
            <PostList />
        </article>
    );
}
