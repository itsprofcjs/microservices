import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
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

export default App;
