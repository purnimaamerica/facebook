import React from "react";
import { FaPhone, FaRegWindowClose, FaVideo } from "react-icons/fa";

const ChatBox = (props) => {
    const closeChat = ()=>{
        props.closeChat();
    }
    return (
        <>
        {props.state ? (   <div className="chat">
            <div className="chat__header">
                <div className="chat__first">
                    <div className="chat__header-img">
                        <img src={props.current.userImg ? props.current.userImg: ''} alt="user" />
                    </div>
                    <div className="chat__header-name">{props.current.name ? props.current.name: ''} </div>
                </div>
                <div className="chat__second">
                <FaVideo className="chat__header-icons"/>
                <FaPhone className="chat__header-icons"/>
                <FaRegWindowClose className="chat__header-icons" onClick={closeChat}/>
                </div>
            </div>
            <div className="chat__body">
                <div className="chat__left">
                    <p className="msg">
hat box interface with a user's name and profile image.
                    </p>
                </div>
                <div className="chat__right">
                    <p className="msg">
                    component appears
                    </p>
                </div>
                <div className="chat__left">
                    <p className="msg">
                    componeh a user's name and profile image.
                    </p>
                </div>
                <div className="chat__left">
                    <p className="msg">
hat box interface with a user's name and profile image.
                    </p>
                </div>
                <div className="chat__right">
                    <p className="msg">
                    component appears
                    </p>
                </div>
                <div className="chat__left">
                    <p className="msg">
                    componeh a user's name and profile image.
                    </p>
                </div>
            </div>
            <div className="chat__footer">
                <input type="text" className="chat__input" placeholder="An" />
            </div>
        </div>) : ''}
     
        </>
    );
}

export default ChatBox;
