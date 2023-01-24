import ReactDoM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const root=ReactDoM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter><App/></BrowserRouter>
);