import React from "react";

const ChatBar = ({ openChat }) => { // Destructure openChat from props
    const [state, setUsers] = React.useState([
        { id: 1, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 2, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 3, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 4, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 5, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 6, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 7, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 8, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 9, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
        { id: 10, userImg: '/images/mans.jpg', name: "shubham kumar", time: "21h", text: 'This component likely renders a list of stories or posts from some data source,', postImg: '/images/man.jpg' },
    ]);

    const handleOpenChat = (user) => {
        openChat(user); // Call the openChat function passed via props
    };

    return (
        <div className="chatBar">
            {state.map(user => (
                <div key={user.id} className="chatBar__list" onClick={() => handleOpenChat(user)}>
                    <div className="chatBar__list-img">
                        <img src={user.userImg} alt="user" />
                        <span className="status"></span> {/* Assuming you'll add online/offline status */}
                    </div>
                    <div className="chatBar__list-name">{user.name}</div>
                </div>
            ))}
        </div>
    );
}

export default ChatBar;
