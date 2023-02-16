import { useState } from 'react';
import './home.scss'

const Home = ({ onJoin, onChangeUsername, onChangeRoom }) => {
    const [showInputs, setShowInputs] = useState(false);
    return (
        <div className="home-container">
        <button className='display-form' onClick={() =>setShowInputs(!showInputs)}>Let's chat</button>
        {showInputs && (
            <form onSubmit={(event) => {
                event.preventDefault()
                onJoin()
            }}>
                <input
                type="text"
                placeholder="John..."
                onChange={(event) => {
                    onChangeUsername(event.target.value);
                  }}
                />
              <select onChange={(event) => onChangeRoom(event.target.value)}>
                <option value="">Select a room...</option>
                <option value="bedRoom">Bedroom</option>
                <option value="bathRoom">Bathroom</option>
                <option value="livingRoom">Living Room</option>
              </select>
              <button type='submit' className='join-button'>&#10003;</button>
            </form>
            )
        }
    </div>
  )
}

export default Home;