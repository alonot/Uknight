import "../style/User.css"
import { useEffect, useState } from "react";
import Posts from "./Posts";
import { useNavigate } from "react-router-dom";

/** 
    Single User Component
  getauthor: returns author object matching that id
  getpost: returns post object matching that id
  setCurrUser: sets the user to be displayed at /user page 
  handleClick: handles the click event on the post
  currentUser: content to be shown
*/

const User = ({getauthor,currentUser,getpost,handleClick,setCurrUser}) => { 
    const [ Loading , setLoading ] = useState(true)
    const [allposts,setallposts] = useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        let posts={}
        setLoading(true)
        console.log()
        if(currentUser.posts===undefined){
            navigate("/")
        }else{
        for(let i=0; i<currentUser.posts.length;i++){
            posts[currentUser.posts[i]]=getpost(currentUser.posts[i])
        }
        setallposts(posts)
    }
        setLoading(false)
    },[])
    return(
        <>
        {!Loading &&
            <div className="UserPage">
            <div className="UserInfo">
                <div className="profilephoto avatar"><h3>{currentUser.profilephototxt}</h3></div>
                <div className="profileusername username" ><h2>{currentUser.name}</h2></div>
            </div>

            <div className="activites">
                <Posts heading="Activity" canClickUser={false} getauthor={getauthor} data={Object.values(allposts)} handleClick={handleClick} setCurrUser={setCurrUser}/>
            </div>
        </div>
        }
        </>
)}
export default User;