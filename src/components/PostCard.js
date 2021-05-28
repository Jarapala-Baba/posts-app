import React from 'react';

const PostCard = (props) => {
    const { userId, id, title, body } = props.post
    return (
        <div className="column-layout" key={id}>
            <div className="sidebar-one">
                <h3>UserId</h3>
                <p>{userId}</p>
            </div>
            <div className="main-layout">
                <h2>Title:</h2>
                {title}<br />
                <h3>Body:</h3>
                {body}
            </div>
            <div className="sidebar-two">
                <i className="trash alternate inline right icon" style={{ color: "red", cursor: "pointer" }} onClick={() => props.clickHandler(id)}></i>
            </div>
        </div>

    )
}

export default PostCard;