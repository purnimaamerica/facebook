import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import ChatBox from "./components/ChatBox";
import ChatBar from "./components/ChatBar";
function App() {
  const[state, setState]=React.useState(false);
  const[current, setCurrent]=React.useState();
  const openChat =(user) =>{
    setState(true);
    setCurrent(user);
  }
  const closeChat =() =>{
    setState(false);
  }
  return (
    <div className="App">
<Navbar />
<div className='Facebook'>
  
  <Sidebar />
  <Posts />
  <ChatBar openChat={openChat}/>
  <ChatBox state={state} current={current} closeChat={closeChat}/>
</div>
    </div>
  );
}

export default App;
