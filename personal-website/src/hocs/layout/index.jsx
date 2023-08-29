import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import './index.css';

export default function Layout({ children }) {
  return (
    <div className='layout-container'>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <footer>
        <p>
          &#169; {new Date().getFullYear()} Crismael Bastos. All Rights
          Reserved.
        </p>
      </footer>
      {children}
    </div>
  );
}
