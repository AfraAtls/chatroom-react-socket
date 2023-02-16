import './app.scss';
import Messages from '../Messages/messages';
import Home from '../Home/home';
import io from "socket.io-client";
import { useState } from 'react';

const socket = io.connect("http://localhost:3001");

const App = () => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        console.log('ok')
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
          setShowChat(true);
        }
      };
    return (
        <div className="app">
        {!showChat ?
            <Home onJoin={joinRoom} onChangeUsername={setUsername} onChangeRoom={setRoom} /> :(
                <div className='chat'>
                    <Messages socket={socket} username={username} room={room} />
                </div>
            )
        }
        </div>
    )
}

export default App;