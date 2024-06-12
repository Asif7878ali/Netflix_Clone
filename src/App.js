import Navbar from './Components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar/>
         <Outlet/>  
      <Footer/>        
    </>
  );
}

export default App;
