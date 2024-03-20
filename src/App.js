import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Registration from './Components/Registration';
import Footer from './Components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Dashboard from './Components/Dashboard';
import DashboardHeader from './Components/DashboardHeader';

function App() {
  
  return (
    <Router>
      <div>
        {/* <Header /> */}
        {/* {window.location.pathname !== '/dashboard' && <Header />} */}
        <Routes>
          <Route path="/dashboard/*" element={<DashboardHeader />} />
          <Route path="/*" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
