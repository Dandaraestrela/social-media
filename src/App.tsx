import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { posts } from "./utils/mock";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
