import './App.css';
import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import About from '../src/components/About.js'
import { UserContextProvider } from './components/UserContext';
// import News from '../components/News.js';
// import Discover from '../components/Discover.js';
// import Event from '../components/Event.js';
// import Contact from '../components/Contact.js';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'#about'} element={<About />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider >

  );
}

export default App;


