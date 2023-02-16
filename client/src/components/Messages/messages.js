import { useEffect, useState, useRef } from "react";
import Form from "../Form/form";
import Header from "../Header/header";
import Message from "./message";

const Messages = ({ socket, username, room }) => {
  const [isDark, setIsDark] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const refContainer = useRef(null);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        id: 0,
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      await socket.emit("send_message", messageData);
      setMessageList([...messageList, messageData]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList(prevMessageList => [...prevMessageList, data]);
    });
  }, [socket]);

  useEffect(() => {
    refContainer.current.scrollTo({
      top: refContainer.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [messageList]);

  const toggleTheme = () => {
    setIsDark(!isDark)
}

    return (
      <div className={`chat-window ${isDark ? 'dark-theme' : ''}`}>
        <Header onChangeTheme={toggleTheme} />
        <div className="chat-body" ref={refContainer}>
          {messageList.map((message) =>  <Message author={message.author} message={message.message} date={message.time} id={username === message.author ? "you" : "other" } key={message.id++} />)}
        </div>
        <Form currentMessage={currentMessage} onChangeMessage={setCurrentMessage} onSubmitMessage={sendMessage} />
     </div>
    )
}

export default Messages;