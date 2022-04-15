import { useContext } from 'react';
import { PostContext } from '../../store/PostContext';
import './Post.css'

const Post = props => {

    const { setSelected } = useContext(PostContext);

    const title = props.title;
    const author = props.author;
    return (
        <div className="Post" onClick={() => {setSelected(props.id)}}>
            <h1>{title}</h1>
            <h1>{author}</h1>
        </div>
    );
}

export default Post;