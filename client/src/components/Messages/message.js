import './messages.scss';

function Message({ author, message, date, id }) {
  return (
    <div
    className="message"
    id={id}
  >
    <div className='message-container'>
      <div className="message-content">
        <p>{message}</p>
      </div>
      <div className="message-meta">
        <p id="author">{author}</p>
        <p id="time">{date}</p>
      </div>
    </div>
  </div>
  );
}

export default Message;