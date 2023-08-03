import React , {useState , useEffect} from 'react';
import {LoginForm} from '../LoginForm/LoginForm';
import {
    Routes,
    Route,
    useNavigate,
    useParams,
    useLocation,
    useSearchParams,
    useRouteLoaderData
} from "react-router-dom";
import { AxiosRequestConfig } from "axios";
import './UserPage.css';
import placeholder from '../../images/placeholderimage.png';
import axios from "axios";
import idObj from "identity-obj-proxy/src/test-redirections/idObjES6Export";

let name = LoginForm.name;
console.log(name)
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

    let username = localStorage.getItem("name").charAt(0).toUpperCase() +localStorage.getItem("name").slice(1); ;
    const createPost = ()=>{
        //navigate to /new post page
        navigate('/login/user/:id/postId');
    }



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