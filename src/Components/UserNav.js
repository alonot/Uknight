import { useEffect } from "react";
import "../style/UserNav.css"
import { useNavigate } from "react-router-dom";

/** 
    Side Navigation meu on Home page
    Data : the incoming content
  handleClick: handles the click event on the post
*/
const UserNav = ({data,handleClick}) => {
    const navigate =useNavigate() 
    // console.log(Object.values(data))
    const clicked=(id)=>{
        handleClick(id)
        navigate('/user')
    }
    useEffect(()=>{
        if(Object.keys(data)===0){
            navigate("/")
        }
    })
    return(
        <ul className="usernav">
                {
                    Object.keys(data).map(key =>(
                        <li key={key} onClick={()=>{
                            clicked(key)
                        }}><p >{data[key].name.split(' ')[0]}</p></li>
                    ))
                }
            </ul>
)}
export default UserNav;