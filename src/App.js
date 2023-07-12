import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { NavBar } from './components/Navbar/Navbar';
import {HomePage} from './components/HomePage/HomePage'
function App() {
  return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/*<Route path="/projects" element={<Projects />}/>*/}
            {/*<Route path="/about" element={<Outlet />}>*/}
            {/*  <Route index element={<AboutPage />} />*/}
            {/*  <Route path="contact" element={<ContactPage />} />*/}
            {/*</Route>*/}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
