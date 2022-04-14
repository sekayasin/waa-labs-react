import axios from 'axios';
import { useState } from 'react';
import './NewPost.css';

const NewPost = (props) => {

    const [postState, setPostState] = useState(
        {
            title: "",
            author: "",
            content: ""
        }
    )

    const onChange = (event) => {
        const updatedPosts = { ...postState, [event.target.name]: event.target.value}
        setPostState(updatedPosts);
    }

    const addButtonClicked = () => {
        axios.post('http://localhost:8080/api/v1/posts', postState)
        .then(response => {
            setPostState({title:"", author:"", content:""})
            // re-load
            props.changeFetchFlag()
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="newPost">
            <h1>Add a Post</h1>

            <label htmlFor="#">Title</label>
            <input type="text" label={'title'} name={'title'} onChange={onChange} value={postState.title}/>

            <label htmlFor="#">Author</label>
            <input type="text" label={'author'} name={'author'} onChange={onChange} value={postState.author}/>

            <label htmlFor="#">Content</label>
            <textarea name={'content'} rows="4" cols="50" onChange={onChange} value={postState.content}></textarea>

            <button onClick={addButtonClicked}>Add Post</button>
        </div>
    );
}

export default NewPost;