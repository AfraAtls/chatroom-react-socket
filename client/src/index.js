import App from './components/App/app';
import { createRoot } from 'react-dom/client';;

const rootReactElement = <App />;

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);