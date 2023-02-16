import './form.scss';
import { FiSend } from 'react-icons/fi';
import { GrEmoji } from 'react-icons/gr';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState, useEffect } from 'react';

const Form = ({currentMessage, onChangeMessage, onSubmitMessage}) => {
  const [emoji, setEmoji] = useState(false);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (container && !container.contains(event.target)) {
        setEmoji(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [container]);

    return (
      <div className='footer-container' ref={(node) => setContainer(node)}>
        { emoji &&  <Picker className="picker" data={data}  onEmojiSelect={emoji => onChangeMessage(currentMessage + emoji.native)} />}
        <form className="chat-footer" onSubmit={(event) => {
            event.preventDefault()
            onSubmitMessage(currentMessage)
            setEmoji(false);
            onChangeMessage('')
        }}>
        <input
          type="text"
          placeholder="Your message..."
          value={currentMessage}
          onChange={(event) => onChangeMessage(event.target.value)}
        />
         <button type="button" onClick={() =>  setEmoji(!emoji)}>
         <GrEmoji />
        </button>
         <button type="submit" className="form-submit">
          <FiSend />
         </button>
      </form>
      </div>
    )
}

export default Form;