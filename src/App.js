import './App.css';
import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import About from '../src/components/About.js'
import { UserContextProvider } from './components/UserContext';
import News from '../src/components/News.js';
import Discover from '../src/components/Discover.js';
import Event from '../src/components/Event.js';
import Contact from '../src/components/Contact.js';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/outer-space" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'#about-home'} element={<About />} />
          <Route path={'#news-home'} element={<News />} />
          <Route path={'/outer-space/#discover-home'} element={<Discover />} />
          <Route path={'/outer-space/#event-home'} element={<Event />} />
          <Route path={'/outer-space/#contact-home'} element={<Contact />} />
          <Route path={'/outer-space/login'} element={<LoginPage />} />
          <Route path={'/outer-space/register'} element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider >

  );
}

export default App;


