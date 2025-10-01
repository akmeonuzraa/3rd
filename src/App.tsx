import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SecurityPage from './pages/SecurityPage';
// import GardeningPage from './pages/GardeningPage';
import StaffingPage from './pages/StaffingPage';
import ContactPage from './pages/ContactPage';
// import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/security" element={<SecurityPage />} />
            {/* <Route path="/gardening" element={<GardeningPage />} /> */}
            <Route path="/staffing" element={<StaffingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/blog" element={<BlogPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;