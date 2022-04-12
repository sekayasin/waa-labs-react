import './UpdateTitle.css';

const UpdateTitle = (props) => {

    return (
        <div>
            <input type="text" value={props.title} onChange={props.onChange}/>
            <button onClick={props.addButtonClicked}>Change Title</button>
        </div>
    );
}
export default UpdateTitle;