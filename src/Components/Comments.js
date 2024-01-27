import "../style/Comments.css"
const Comment = ({data,getauthor}) => { 
    return(
        <div className="commentBox rest">
            <div className="profilephoto pfphotoComm"><h3>{getauthor(data.author_id).profilephototxt}</h3></div>
            <div className="messagebox commmsgbox">
                        <p>{data.body}</p>
                    </div>
        </div>
)}
export default Comment;