import PostCard from "./PostCard";
import "../style/Post.css"
const Posts = ({ data}) => { 
    return(
        <div className="postCard bordered">
            <h4>Trending</h4>
            {
                data.forEach(post => (
                    <PostCard data={post} />
                ))
            }
            <button className="bordered">See All</button>
        </div>
)}
export default Posts;