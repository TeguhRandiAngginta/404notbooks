import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Header from './component/Navbar';

function AppContent() {
  const location = useLocation()
  //tanpa navbar
  const hideNavbarRoutes = ['/signin', '/signup'];

  return (
    <>
      <Toaster position="top-center" />
      {!hideNavbarRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}