import React, { useState } from "react";

const Sidebar = () => {
    const [state, setState] = useState([
        { id: 1, image: '/images/man.jpg', name: 'Flutter Development' },
        { id: 2, image: '/images/man2.jpg', name: 'PHP Development' },
        { id: 3, image: '/images/man3.jpg', name: 'React Native Development' },
        { id: 4, image: '/images/man4.jpg', name: 'Node.js Development' },
        { id: 5, image: '/images/mans.jpg', name: 'Vue Development' },
        { id: 6, image: '/images/man.jpg', name: 'React Development' }
    ]);

    return (
        <div className="sidebar">
            {state.map(info => (
                <div className="sidebar__list" key={info.id}>
                    <div className="sidebar__list-img">
                        <img src={info.image} alt="group-images" />
                    </div>
                    <div className="sidebar__list-name">{info.name}</div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
