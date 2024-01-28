import "../style/Header.css";
import { Link, useLocation } from "react-router-dom";


/** 
    Fixed Header component
*/
const Header = () => {
    let currentPage = "Home"
    let location = useLocation()
    if (location.pathname === '/user')
        currentPage = "User"
    else if (location.pathname === "/about")
        currentPage = "About"
    else if (location.pathname === "/posts")
        currentPage = "Posts"
    else if (location.pathname === "/post")
        currentPage = "Post"

    return (
        <header>
            <div id="navbar">
                <section>
                    <Link to="/">
                        <span>
                            <h1 id="U">U</h1>
                            <h1 id="knight">KNIGHT</h1>
                            <div id="knightLogo"  alt="w"></div>
                        </span>
                    </Link>
                </section>
                <div id="navholder">
                    <ul className="options">
                        <li className="items" id="home">
                            <Link to="/">Home</Link></li>
                        <li className="items" id="home">
                            <Link to="/posts">Posts</Link>
                        </li>
                        <li className="items" id="About">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="belownav">
                <h1>{currentPage}</h1>
            </div>

        </header>
    )
}
export default Header;