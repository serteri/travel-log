
import {Routes,Route, useNavigate} from "react-router-dom";
import './HomePage.css';
import view from '../../images/nice_view.jpeg'

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
            <div className='second-part'>
                <div className='description'><p className='description'>Embark on a virtual adventure across the globe through
                    our vibrant and user-friendly.
                    </p> </div>
                <div className='image'><img src={view} alt="image"/> </div>

            </div>

            <div className='social'>
                <p>Join Us</p>
                <div>
                    <button>App Store</button>
                    <button>Google Play</button>
                </div>


            </div>

        </div>

    )

}

