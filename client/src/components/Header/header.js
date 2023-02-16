import './header.scss';
import MaterialUISwitch from './switchButton';

const Header = ({ onChangeTheme }) => {
    return (
        <header className="chat-header">
            <span className="point red-point"></span>
            <span className="point yellow-point"></span>
            <span className="point green-point"></span>
            <button className='theme-button' onClick={() => onChangeTheme()}>
              <MaterialUISwitch />
            </button>
        </header>
    )
}

export default Header;