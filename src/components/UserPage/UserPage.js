import React from 'react';
import {Routes,Route, useNavigate} from "react-router-dom";
import './UserPage.css';
import placeholder from '../../images/placeholderimage.png';

export function UserPage() {
    const navigate = useNavigate();

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
                <button className="button_create" onClick={createpost}> New Post</button>
            </div>
        </div>

    )
}