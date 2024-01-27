import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Comment from "./Comments";
import { BASE_URL,COMMENTS } from "../util";

const Post = ({setCurrUser, data ,getauthor}) => {
    const [ Loading , setLoading ] = useState(true)
    const [postdata, setpostData] = useState({})
    const [comments, setcomments] = useState([])
    const navigate = useNavigate()
    const getComments=async(post_id)=>{
        await fetch(BASE_URL+COMMENTS+post_id)
        .then(res => res.json())
        .then(res => {
            if(res){
                setcomments(res)
            }
        })
        .finally(()=>{
            setLoading(false)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        setLoading(true)
        if (!data.profilephototxt) {
            navigate('/')
            // console.log("p")
            // data = JSON.parse(localStorage.getItem('data'))
            // console.log(data)
            // if (!data.profilephototxt) {
            //     navigate('/')
            // } else {
            //     localStorage.setItem('data', JSON.stringify(data))
            // }
        }
        setpostData(data)
        getComments(data.id)
    }, [])

    const clicked =()=>{
        setCurrUser(data.author_id)
        navigate('/user')
    }
    return (
        <>
        { !Loading &&
            <div className="postBox">
            <div className="postcontainer boxpost postcont">
                <div className="profilephoto" onClick={clicked}><h3>{postdata.profilephototxt}</h3></div>
                <div className="rest boxpost">
                    <div className="info">
                        <div className="profileusername  pfnamePost" ><p onClick={clicked}>{postdata.author_name}</p></div>
                        <center style={{overflow:"hidden"}}><div className="profileusername">{postdata.name}</div></center>
                    </div>
                    <div className="messagebox boxpost">
                        <p>{postdata.body}</p>
                    </div>
                    <div className="bottombar">
                        <span className="spbuttons">
                            <svg className="bottombardim" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.2699 16.265L20.9754 12.1852C21.1516 11.1662 20.368 10.2342 19.335 10.2342H14.1539C13.6404 10.2342 13.2494 9.77328 13.3325 9.26598L13.9952 5.22142C14.1028 4.56435 14.0721 3.892 13.9049 3.24752C13.7664 2.71364 13.3545 2.28495 12.8128 2.11093L12.6678 2.06435C12.3404 1.95918 11.9831 1.98365 11.6744 2.13239C11.3347 2.29611 11.0861 2.59473 10.994 2.94989L10.5183 4.78374C10.3669 5.36723 10.1465 5.93045 9.86218 6.46262C9.44683 7.24017 8.80465 7.86246 8.13711 8.43769L6.69838 9.67749C6.29272 10.0271 6.07968 10.5506 6.12584 11.0844L6.93801 20.4771C7.0125 21.3386 7.7328 22 8.59658 22H13.2452C16.7265 22 19.6975 19.5744 20.2699 16.265Z" fill="#1C274C" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z" fill="#1C274C" />
                            </svg>
                            {postdata.likes}
                        </span>
                        <span className="spbuttons">
                            <svg className="bottombardim" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.2694 8.48505L20.9749 12.5648C21.1511 13.5838 20.3675 14.5158 19.3345 14.5158H14.1534C13.6399 14.5158 13.2489 14.9767 13.332 15.484L13.9947 19.5286C14.1024 20.1857 14.0716 20.858 13.9044 21.5025C13.7659 22.0364 13.354 22.465 12.8123 22.6391L12.6673 22.6856C12.3399 22.7908 11.9826 22.7663 11.6739 22.6176C11.3342 22.4539 11.0856 22.1553 10.9935 21.8001L10.5178 19.9663C10.3664 19.3828 10.146 18.8195 9.8617 18.2874C9.44634 17.5098 8.80416 16.8875 8.13663 16.3123L6.69789 15.0725C6.29223 14.7229 6.07919 14.1994 6.12535 13.6656L6.93752 4.27293C7.01201 3.41139 7.73231 2.75 8.59609 2.75H13.2447C16.726 2.75 19.697 5.17561 20.2694 8.48505Z" fill="#1C274C" />
                                <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M2.96767 15.2651C3.36893 15.2824 3.71261 14.9806 3.74721 14.5804L4.71881 3.34389C4.78122 2.6221 4.21268 2 3.48671 2C2.80289 2 2.25 2.55474 2.25 3.23726V14.5158C2.25 14.9174 2.5664 15.2478 2.96767 15.2651Z" fill="#1C274C" />
                            </svg>
                            {postdata.dislikes}
                        </span>
                    </div>
                </div>
            </div>
            <div className="commentContainer bordered">
                <p>Comments</p>
                <div className="commentSection">
                    {comments.length >0?
                        <>
                        {
                            comments.map(comment =>(
                                <Comment key={comment.author_id} data={comment} getauthor={getauthor}/>
                            ))
                        }
                        </>:
                        <center>No Comments on this post</center>
                    }
                </div>
            </div>
        </div>
        }
        </>        
    )
}
export default Post;