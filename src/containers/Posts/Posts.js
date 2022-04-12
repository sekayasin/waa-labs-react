import Post from "../../components/Post/Post";

const Posts = (props) => {
  const posts = props.posts.map((post) => {
    return (
      <Post
        id={"Id: " + post.id}
        title={"Title: " + post.title}
        author={"Author: " + post.author}
        post_details={post.post_details}
        key={post.id}
        setSelected={() => {
          props.setSelected(post.id);
        }}
      />
    );
  });

  return posts;
};

export default Posts;
