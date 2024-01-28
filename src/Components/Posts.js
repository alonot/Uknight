import PostCard from "./PostCard";
import "../style/Post.css"

/** 
    Shows all the data given to it in form of PostCard Component
     Data : the incoming content
     heading: Heading for the container
  getauthor: returns author object matching that id
  setCurrUser: sets the user to be displayed at /user page 
  handleClick: handles the click event on the post
  canClickUser: true or false -> whether userinfo is clickable or not
*/

const Posts = ({heading, data,getauthor, handleClick, setCurrUser,canClickUser}) => { 
    // console.log(Object.values(data))
    return(
        <div className="postCard bordered">
            <h4>{heading}</h4>
            <>{
                data.map((post) => {
                    return (<PostCard key={post.id} canClickUser={canClickUser} data={post} getauthor={getauthor} handleClick={handleClick} setCurrUser={setCurrUser}/>)
            })
            }
             </>
        </div>
)}
export default Posts;