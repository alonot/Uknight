import PostCard from "./PostCard";
import "../style/Post.css"
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