import "./PostDetails.css";
const PostDetails = (props) => {
  let postDetailsDisplay = null;

  if (props.postId !== 0) {
    const filterPost = props.posts.filter((post) => post.id === props.postId);
    postDetailsDisplay = filterPost.map((post) => {
      return (
        <div className="PostDetailsContent" key={post.id}>
          <h1>{post.title}</h1>
          <h2>{post.author}</h2>
          <p>{post.post_details}</p>
          <a href="#edit">edit</a>
          <a href="#delete">delete</a>
        </div>
      );
    });
  }
  return postDetailsDisplay;
};

export default PostDetails;
