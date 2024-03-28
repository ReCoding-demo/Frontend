import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <div className="h-16" /> {/* Footer 임시 대체용  */}
    </>
  );
};

export default Layout;
