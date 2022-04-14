import './Post.css'

const Post = props => {
    const title = props.title;
    const author = props.author;
    return (
        <div className="Post" onClick={props.setSelected}>
            <h1>{title}</h1>
            <h1>{author}</h1>
        </div>
    );
}

export default Post;