import { Navbar, Banner } from '../../components';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />
    </div>
  );
};

export default Layout;
