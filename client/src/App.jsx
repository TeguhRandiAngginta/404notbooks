import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS Bootstrap
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
      <BrowserRouter>
      <Toaster position="top-center"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
  );
}