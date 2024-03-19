import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Registration from './Components/Registration';
import Footer from './Components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Dashboard from './Components/Dashboard';

function App() {
  
  return (
    <Router>
      <div>
        <Header />
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
