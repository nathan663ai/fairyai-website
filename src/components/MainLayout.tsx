import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './sections/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
