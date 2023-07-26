import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { NavBar } from './components/Navbar/Navbar';
import {HomePage} from './components/HomePage/HomePage'
import {Footer} from './components/Footer/Footer';
import {LoginForm} from './components/LoginForm/LoginForm';
import {About} from './components/About/AboutUs';
import {RegisterPage} from './components/Register/Register';
import "./App.css"
function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginForm />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/register" element={<RegisterPage />}/>
            {/*<Route path="/about" element={<Outlet />}>*/}
            {/*  <Route index element={<AboutPage />} />*/}
            {/*  <Route path="contact" element={<ContactPage />} />*/}
            {/*</Route>*/}
          </Routes>
            <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
