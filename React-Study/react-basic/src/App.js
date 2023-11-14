import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogForm from './components/BlogForm';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';

function App() {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blogs" element={<ListPage />} />
                    <Route path="/blogs/create" element={<CreatePage />} />
                    <Route path="/blogs/edit" element={<EditPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
