import React , {useState , useEffect} from 'react';

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

// export function UserPage() {
//     const navigate = useNavigate();
//     const [authenticated, setAuthenticated] = useState(null);
//     const[name,setName] = useState('')

//     useEffect(() => {
//         const loggedInUser = localStorage.getItem("authenticated");
//         if (loggedInUser) {
//             setAuthenticated(loggedInUser);
//         }
//     }, []);

//     let username = localStorage.getItem("name").charAt(0).toUpperCase() +localStorage.getItem("name").slice(1);
//     let id = localStorage.getItem("id")
//     console.log(id)
//     const createPost = ()=>{
//         //navigate to /new post page
//         navigate(`/user/:${id}/postId`);
//     }
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

    let nameItem = localStorage.getItem("name");
    let username = nameItem ? nameItem.charAt(0).toUpperCase() + nameItem.slice(1) : '';
    let id = localStorage.getItem("id")
    console.log(id)
    const createPost = ()=>{
        //navigate to /new post page
        navigate(`/user/:${id}/postId`);
    }
    return(
        <div>
            <p className='name'>Welcome {username}</p>
            <button className='btn btn-secondary btn-outline-warning btn-lg logout' >Log out</button>
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
            </div>
        </div>
        <div className="new-experience">
            <h2 className="New-experience-title" >Enter a new experience</h2>
            <button className="button_create" onClick={createPost}> New Post</button>
        </div>
    </div>

    )
}     