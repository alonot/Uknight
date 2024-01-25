import "../style/UserNav.css"
import Cube from "./Cube";
const UserNav = () => { 
    return(
        // <div className="usernav">
        //     <Cube />
        //     <Cube />
        // </div>
        // <div className="usernav">
        <>
        <ul className="usernav">
                <li style={{"--i":4}}><a href="#">Priyanshu</a></li>
                <li style={{"--i":3}}><a href="#">Sarthak</a></li>
                <li style={{"--i":2}}><a href="#">Himanshu</a></li>
                <li style={{"--i":1}}><a href="#">Hemant</a></li>
            </ul>
        </>
            
        // </div>
)}
export default UserNav;