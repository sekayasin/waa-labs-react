import './Post.css'

const Post = props => {
    const id = props.id;
    const title = props.title;
    const author = props.author;
    // const post_details = props.post_details;
    return (
        <div className="Post" onClick={props.setSelected}>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{author}</h1>
        </div>
    );
}

export default Post;