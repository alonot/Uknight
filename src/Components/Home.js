import "../style/Home.css"
import Finder from "./Finder";
import Posts from "./Posts";
import { useState } from 'react';
import { useLocation } from "react-router-dom";

const Home = () => { 
    const [ postsData , setPosts ] = useState([])

  const getTrending= async () => {
    await fetch("http://localhost:5000/trending")
    .then(res => res.json())
    .then(res => {
      if(res){
        console.log(typeof(res))
        setPosts(res)
      }
      console.log("posr"+postsData)
    }).catch(err=>console.log(err))
  }

  const getPosts= async () => {
    await fetch("http://localhost:5000/posts").then(res => res.json())
    .then(res => {
      console.log(res)
      if(res){
        setPosts(res)
      }
    })
  }

    const screewidth=document.documentElement.clientWidth
    const location = useLocation()
    console.log(location.pathname)
  if(location.pathname==="/"){
    if(postsData == "")
        getTrending()
  }else if(location.pathname === '/posts'){
    if(postsData == "")
        getPosts()
  }
    console.log(screewidth)
    return(
        <>
        {(screewidth > 900) ? 
        <table className="home">
        <tr>
            <td id="posts">
                <Posts heading={location.pathname==="/"?"Trending":"Posts"} data={postsData}/>
            </td>
            <td id="finder">
                <Finder />
            </td>
        </tr>
            </table> : 
            
            <div className="home">
            <div id="posts">
                <Posts data={postsData}/>
            </div>
            <div id="finder">
                <Finder />
            </div>
            </div>
            
            }
        </>
        
        
)}
export default Home;