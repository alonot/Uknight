import { useNavigate } from "react-router-dom";
import "../style/Comments.css"

/*
    Single Comment Component
    data: content to display
    getauthor: returns author object matching that id
    setUser: sets the user/author to be displayed at /user page 
 */
const Comment = ({data,getauthor,setUser}) => { 
    const navigate=useNavigate()
    const gotoUser= () => {
        setUser(data.author_id)
        navigate('/user')
    }
    return(
        <div className="commentBox rest">
            <div className="profilephoto pfphotoComm" onClick={gotoUser}><h3>{getauthor(data.author_id).profilephototxt}</h3></div>
            <div className="messagebox commmsgbox">
                        <p>{data.body}</p>
                    </div>
        </div>
)}
export default Comment;