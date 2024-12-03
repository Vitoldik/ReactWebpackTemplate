import {createRoot} from 'react-dom/client';
import App from './App';

const mountNode = document.getElementById('app') as HTMLElement
const root = createRoot(mountNode)
root.render(<App/>)