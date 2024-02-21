import React from 'react';
import Stories from "./Stories";
import Create from './Create';
import ShowPost from './ShowPost';
import ChatBar from './ChatBar';


const Posts = () =>{
    return(
        <div className='posts'>
            <Stories />
            <Create />
            <ShowPost />
            <ChatBar />
         
        </div>
    )
}
export default Posts;
