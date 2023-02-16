import { useState, useEffect } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const EmojiPicker = ({ currentMessage, onChangeMessage }) => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (container && !container.contains(event.target)) setEmojiOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [container]);

  return (
    <div ref={(node) => setContainer(node)}>
      {emojiOpen && (
        <Picker
          className="emoji-picker"
          data={data}
          onEmojiSelect={(emoji) => onChangeMessage(currentMessage + emoji.native)}
        />
      )}
      <button type="button" onClick={() => setEmojiOpen(!emojiOpen)}>
        Open Emoji Picker
      </button>
    </div>
  );
};

export default EmojiPicker;
