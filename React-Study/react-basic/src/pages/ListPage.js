import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { Link, useNavigate } from 'react-router-dom';

const ListPage = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = () => {
        axios.get('http://localhost:3001/posts').then((res) => {
            setPosts(res.data);
        });
    };

    const deleteBlog = (e, id) => {
        e.stopPropagation();
        console.log('delete');
        axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        });
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Blogs</h1>
                <div>
                    <Link to="/blogs/create" className="btn btn-success">
                        Create New
                    </Link>
                </div>
            </div>
            {posts.length > 0 ? (
                posts.map((post) => {
                    return (
                        <Card key={post.id} title={post.title} onClick={() => navigate('/blogs/edit')}>
                            <div>
                                <button className="btn btn-danger btn-sm" onClick={(e) => deleteBlog(e, post.id)}>
                                    Delete
                                </button>
                            </div>
                        </Card>
                    );
                })
            ) : (
                <div>No blogs posts found</div>
            )}
        </div>
    );
};

export default ListPage;
