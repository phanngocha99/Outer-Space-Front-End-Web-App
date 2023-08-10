import './App.css';
import { Route, Routes } from "react-router-dom"
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './components/UserContext';
import CreatePost from './pages/CreatePage';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import NewsPage from './pages/NewsPage';
import EventPage from './pages/EventPage';
import EditEvent from './pages/EditEvent';
import EditNews from './pages/EditNews';


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/create-post'} element={<CreatePost />} />
          <Route path={'/post/:id'} element={<PostPage />} />
          <Route path={'/news/:id'} element={<NewsPage />} />
          <Route path={'/event/:id'} element={<EventPage />} />
          <Route path={'/edit/post/:id'} element={<EditPost />} />
          <Route path={'/edit/event/:id'} element={<EditEvent />} />
          <Route path={'/edit/news/:id'} element={<EditNews />} />
        </Route>
      </Routes>
    </UserContextProvider >

  );
}

export default App;


