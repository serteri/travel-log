
import {Routes,Route, useNavigate} from "react-router-dom";
import './HomePage.css';


export function  HomePage(){

    const navigate = useNavigate();

    const navigatetoLogin = ()=>{
        //navigate to /login
        navigate('/login');

    }

    return(
        <div>
            <div className='travel'>
                <h2>TravelLog</h2>
                <p>Journey Beyond Boundaries: Connect, Inspire, Explore
                </p>
                <button onClick={navigatetoLogin}> Log In</button>

            </div>







        </div>






    )



}

