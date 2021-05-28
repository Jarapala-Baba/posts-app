import React, { Component } from 'react';

class AddPost extends Component {
    state = {
        userId:"1",
        title: "",
        body: ""
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.title === "" || this.state.body === "") {
            alert("All the Fields Are Mandetory")
            return;
        }
        else {
            this.props.addPostHandler(this.state);
            this.setState({userId:"1",title:"",body:""})
        }
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Post</h2>
                <form className="ui form" onSubmit={this.add}>
                <div className="field">
                        <label>UserId</label>
                        <input type="text" name="userId" placeholder="user-id" value={this.state.userId} onChange={(e) => this.setState({ userId: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="Title" placeholder="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Body</label>
                        <input type="text" name="Body" value={this.state.body} placeholder="body"  style={{ height: 100, borderColor: 'gray', borderWidth: 1 }} onChange={(e) => this.setState({ body: e.target.value })} />
                    </div>
                    <button className="ui button white" style={{alignItems:'center'}}>Add Post</button>
                </form>
            </div>
        );
    }
}

export default AddPost;