import NewPost from "./components/NewPost";
import PostList from "./components/PostList";
import postList from "./data/posts";
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState(postList);

  function addPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(postId) {
    console.log(postId)
    setPosts(posts.filter((post) => post.id !== postId));
  }

  return (
    <div className="container mt-4">
      <NewPost addFunc={addPost} posts={posts}/>
      <PostList posts={posts} removeFunc={removePost} />
    </div>
  )
}

export default App
