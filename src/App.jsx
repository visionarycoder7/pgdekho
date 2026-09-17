import React from 'react';
import Home from './pages/Home';

/**
 * Main App Root
 * 
 * Future Routing Note:
 * When adding multi-page navigation (e.g. /properties, /login, /dashboard, /owner-portal),
 * you can easily wrap this in `react-router-dom` or similar router.
 * For now, it cleanly loads the startup landing page.
 */
export default function App() {
  return <Home />;
}
