import {BrowserRouter, NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

export function  NavBar (){
    let activeNavStyle = {
        textDecorationColor: "green",
        textDecorationLine: "line-through"
    }
    return(
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className="container-fluid">
              <NavLink className='navbar-brand ' id="navbarNav" to="/" style={({isActive}) => isActive ? activeNavStyle:undefined}>Logo</NavLink>
              <div>
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                      <li className="nav-item "><NavLink className='nav-link active' to="/">Home</NavLink></li>
                      <li className="nav-item "><NavLink className='nav-link' to="/about">About</NavLink></li>
                      <li className="nav-item"><NavLink className='nav-link' to="/login">Login</NavLink></li>
                  </ul>
              </div>

          </div>


      </nav>

    )
}

