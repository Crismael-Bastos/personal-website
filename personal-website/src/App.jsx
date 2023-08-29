import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Avatar from './components/avatar';
import Home from './pages/home';
import Layout from './hocs/layout';
import { useContext } from 'react';
import { ThemeContext } from './contexts/themeContext';
import './global.css'
import { About } from './pages/about';
import { Projects } from './pages/projects';


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
