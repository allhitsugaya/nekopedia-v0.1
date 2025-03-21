import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from '../components/route/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
          <App />
      </Router>
  </StrictMode>,
)
