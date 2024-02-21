import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";

const ShowPost = () => {
    const [posts, setPosts] = React.useState([
        { id: 1, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 2, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 3, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 4, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
    ]);

    return (
        <div className="show">
            {posts.map(post => (
                <div key={post.id} className="empty">
                    <div className="show__header">
                        <div className="show__header-img">
                            <img src={post.userImg} alt="User" />
                        </div>
                        <div className="show__header-name">{post.name}
                            <div className="date">{post.time}</div>
                        </div>
                    </div>
                    <div className="show__body">
                        <div className="show__body-text">
                            {post.text}
                        </div>
                        <div className="show__body-img">
                            <img src={post.postImg} alt="Post" />
                        </div>
                    </div>
                    <div className="show__reactions">
                        <span className="reactions">
                            <FaRegThumbsUp /> <span className="reactions-text">Like</span>
                        </span>
                        <span className="reactions">
                            <FaRegCommentAlt /> <span className="reactions-text">Comments</span>
                        </span>
                        <span className="reactions">
                            <FaShareAlt /> <span className="reactions-text">Share</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShowPost;
