import React , {useState , useEffect} from 'react';
import axios from "axios";
import {
    Routes,
    Route,
    useNavigate,
    useParams,
    useLocation,
    useSearchParams,
    useRouteLoaderData
} from "react-router-dom";

import './UserPage.css';


export function UserPage() {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(null);
    const[name,setName] = useState('')

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);

    let username = localStorage.getItem("name").charAt(0).toUpperCase() +localStorage.getItem("name").slice(1);
    let id = localStorage.getItem("id")
    console.log(id)
    const createPost = ()=>{
        //navigate to /new post page
        navigate(`/user/:${id}/newPost`);
    }

    // let posts= []
    // const m = axios.get(`http://localhost:4011/author/:${id}`).then((response)=>{
    //         response.map(posts.push(response.postsArray))
    //
    // })
    // console.log(posts)

    return(
        <div>
            <p className='name'>Welcome {username}</p>
            <button className='btn btn-secondary btn-outline-warning btn-lg logout' >Log out</button>
            <div className='location'>
                <h2 className='location-title'>My Locations</h2>
            </div>
            <div className="location-list">

                <div className="location-card">
                    <h5>Location 1</h5>
                </div>
                <div className="location-card">
                    <h5>Location 2</h5>
                </div>
                <div className="location-card">
                    <h5>Location 3</h5>
                </div>
                <div className="location-card">
                    <h5>Location 4</h5>
                </div>
                <div className="location-card">
                    <h5>Location 5</h5>
                </div>
            </div>
            <div className="new-experience">
                <h2 className="new-experience-title" >Enter a new experience</h2>
                <button className="button_create" onClick={createPost}> New Post</button>
            </div>
        </div>

    )
}