import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Layout from './hocs/layout';
import { useContext } from 'react';
import { ThemeContext } from './contexts/themeContext';
import './global.css';
import { About } from './pages/about';
import { Projects } from './pages/projects';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
