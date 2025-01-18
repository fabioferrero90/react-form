import Post from './partials/Post';

const PostList = ({posts, removeFunc}) => {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Lista Articoli</h2>
      <ul id="articleList" className="list-group">
      {posts.map((post, index) => (
        <Post key={"post-"+index} id={post.id} title={post.titolo} content={post.contenuto} date={post.data} author={post.autore} removeFunc={removeFunc}/>
      ))}
      </ul>
    </div>
  )
}

export default PostList