import {createRoot} from 'react-dom/client';
import {AppWithRoute} from './App';


test('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container as HTMLElement);
    root.render(AppWithRoute())
    root.unmount();
});
