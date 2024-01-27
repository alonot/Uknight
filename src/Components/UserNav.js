import { useEffect } from "react";
import "../style/UserNav.css"
import { useNavigate } from "react-router-dom";
const UserNav = ({data,handleClick}) => {
    const navigate =useNavigate() 
    // console.log(Object.values(data))
    const clicked=(id)=>{
        handleClick(id)
    }
    useEffect(()=>{
        if(Object.keys(data)==0){
            navigate("/")
        }
    })
    return(
        <ul className="usernav">
                {
                    Object.keys(data).map(key =>(
                        <li key={key}><p onClick={()=>{
                            clicked(key)
                        }}>{data[key].name.split(' ')[0]}</p></li>
                    ))
                }
            </ul>
)}
export default UserNav;