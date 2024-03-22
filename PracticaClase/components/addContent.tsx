import {FunctionComponent} from 'preact';

const AddContent: FunctionComponent = () => {
    return (
        <form class="AddForm" action="/add" method="post">
            <h1>Add new contact</h1>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="author" placeholder="Author" />
            <input type="text" name="content" placeholder="Content" />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddContent;