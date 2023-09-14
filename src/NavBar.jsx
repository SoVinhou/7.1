import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return(
    <nav className = "nav">
        <a href="/" className="Site-title">
            <img src = {require("./images/logo.png")} alt="logo" width={300} height={100} />
        </a>
        <ul>
            <li>
            <Link to="/FindDev">Find Dev</Link>
            </li>
            <li>
                <a href="/">Find Jobs</a>
            </li>
            <li>
                <Link to="/LogIn">Log In</Link>
            </li>
            <li>
                <Link to="/CreateAccount"> Create Account</Link>
            </li>
        </ul>
    </nav>
    )
}   

export default NavBar;

// import React from 'react'
// import './App.css'
// import { Link } from 'react-router-dom';

// function NavBar() {
//     return(
//     <nav className = "nav">
//         <a href="/" className="Site-title">
//             <img src = {require("./images/logo.png")} alt="logo" width={300} height={100} />
//         </a>
//         <ul>
//             <li>
//                 <Link to="/FindDev">Find DEV</Link>
//             </li>
//             <li>
//                 <Link to="/FindJob">Find Job</Link>
//             </li>
//             <li>
//                 <Link to="/LogIn">Log In</Link>
//             </li>
//             <li>
//                 <Link to="/SignUp">Create Account</Link>
//             </li>
//         </ul>
//     </nav>
//     )
// }   

// export default NavBar;