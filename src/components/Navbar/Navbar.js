import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

export function  NavBar (){
    return(
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className="container-fluid">
              <NavLink className='navbar-brand ' id="navbarNav" to="/">Logo</NavLink>
              <div>
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                      <li className="nav-item "><NavLink className='nav-link active' to="/about">About</NavLink></li>
                      <li className="nav-item "><NavLink className='nav-link' to="/projects">Log-in</NavLink></li>
                      <li className="nav-item"><NavLink className='nav-link' to="/about/contact">Search</NavLink></li>
                  </ul>
              </div>

          </div>


      </nav>

    )
}

