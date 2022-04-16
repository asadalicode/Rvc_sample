import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './modules/shared/components/navbar/navbar';
import Footer from './modules/shared/components/footer/footer';
import { useState } from 'react';
import SideNavbar from './modules/shared/components/sideNavbar/sideNavbar';
import { Style } from '@mui/icons-material';
import Dashboard from './modules/home/components/dashboard/dashboard';

function App() {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const handleMobileNavbar = (value: boolean) => {
    setIsMobileNavbarOpen(value)
  }

  return (
    <div className="App">
      <Navbar handleMobileNavbar={handleMobileNavbar} />
      {
        !isMobileNavbarOpen &&
        <>
          <div className="container-fluid">

            <div className="d-flex">
            
              <div className="ms-3 container-fluid">
             <Dashboard/>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default App;
