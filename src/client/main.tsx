import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

export default () => (
  <BrowserRouter basename={import.meta.env.PUBLIC_APP_BASE || '/seo'}>
    <App />
  </BrowserRouter>
);
