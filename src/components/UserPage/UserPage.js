import {Routes,Route, useNavigate} from "react-router-dom";
import React , {useState , useEffect} from 'react';
import axios from "axios";
<<<<<<< HEAD
import {
    Routes,
    Route,
    useNavigate,
    useParams,
    useLocation,
    useSearchParams,
    useRouteLoaderData
} from "react-router-dom";
import PostCard from '../PostCards/PostCard';
=======

>>>>>>> refs/remotes/origin/server
import './UserPage.css';
import '../PostCards/PostCard.css';

export function UserPage() {
    const navigate = useNavigate();
<<<<<<< HEAD
    const [authenticated, setAuthenticated] = useState(null);
    const[name,setName] = useState('')
    const [posts, setPosts] = useState([]);
    const username = localStorage.getItem('name').charAt(0).toUpperCase() + localStorage.getItem('name').slice(1);
    const id = localStorage.getItem('id');
    console.log(id)
    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                // Redirect to login page if user is not logged in
                navigate('/login');
                return;
            }

            try {
                const id = localStorage.getItem('id'); // Make sure the ID is correct
                const response = await axios.get(`http://localhost:4011/posts/${id}`);
                setPosts(response.data.postsArray);
            } catch (error) {
                console.error('Error retrieving posts:', error);
            }
        };

        fetchData();
    }, [id, navigate,posts]);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('authenticated');
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }

        setName(username);
    }, [username]);

    const createPost = () => {
        // Navigate to /new post page
        navigate(`/user/${id}/newPost`);
    };

    const handleLogout = () => {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        navigate('/login');
    };

    return(
        <div>
            <p className='name'>Welcome {username}</p>
            <button className='btn btn-secondary btn-outline-warning btn-lg logout' onClick={handleLogout} >Log out</button>
            <div className="posts-container">
                {posts.length >0 ? <h1 className='location-title'> My Travel Experience</h1> : <></> }
                {posts &&
                    posts.slice(0,2).map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
            </div>
            <div className="new-experience">
                <h2 className="new-experience-title">Enter a new experience</h2>
                <button className="button_create" onClick={createPost}>
                    New Post
                </button>
=======

    const createpost = ()=>{
        //navigate to /new post page
        navigate('/login/userpage/newpost');
}

return(
    <div>
        <div className='location'>
            <h2 className='location-title'>My Locations</h2>    
        </div>
        <div className="location-list">

            <div class="location-card">
                <h5>Location 1</h5>
            </div>
            <div class="location-card">
                <h5>Location 2</h5>
            </div>
            <div class="location-card">
                <h5>Location 3</h5>
            </div>
            <div class="location-card">
                <h5>Location 4</h5>
            </div>
            <div class="location-card">
                <h5>Location 5</h5>
>>>>>>> refs/remotes/origin/server
            </div>
        </div>
        <div className="new-experience">
            <h2 className="New-experience-title" >Enter a new experience</h2>
            <button className="button_create" onClick={createpost}> New Post</button>
        </div>
    </div>

    )
}     