import PostCard from "./PostCard";
import "../style/Post.css"
const Posts = ({heading, data}) => { 
    console.log(data)
    return(
        <div className="postCard bordered">
            <h4>{heading}</h4>
            <>{
                
                data.map((post) => (
                    (<PostCard data={post} />)
                ))
            }
             </>
            <button className="bordered">See All</button>
        </div>
)}
export default Posts;