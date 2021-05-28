import React from 'react';
import PostCard from './PostCard';


const PostsList = (props) => {
    const deletePostHandler=(id)=>{
        props.getPostId(id);
    };
    const renderPostsList = props.posts.map((post) => {
       return(
           <PostCard post={post} clickHandler={deletePostHandler} key={post.id}></PostCard>
       );
    })
    return (
        <div className="ui celled list"> {renderPostsList}</div>
    )
}

export default PostsList;