import "../style/User.css"
import Posts from "./Posts";
const User = () => { 
    return(
        <div className="UserPage">
            <div className="UserInfo">
                <div className="profilephoto avatar"><h3>PP</h3></div>
                <div className="profileusername username" ><h2>Priyanshu Pandey</h2></div>
            </div>
            <Posts />
        </div>
)}
export default User;