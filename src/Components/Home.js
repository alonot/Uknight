import "../style/Home.css"
import Finder from "./Finder";
import Posts from "./Posts";
import { useState } from 'react';
import { useLocation } from "react-router-dom";

const Home = () => { 
    const [ postsData , setPosts ] = useState([])

  const getTrending= async () => {
    await fetch("../db.json").then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.trending){
        setPosts(res.trending)
      }
    }).catch(err=>console.log(err))
  }

  const getPosts= async () => {
    await fetch("../db.json").then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.posts){
        setPosts(res.posts)
      }
    })
  }

    const screewidth=document.documentElement.clientWidth
    const location = useLocation()
    console.log(location.pathname)
  if(location.pathname==="/"){
    getTrending()
  }else if(location.pathname === '/posts'){
    getPosts()
  }
    console.log(screewidth)
    return(
        <>
        {(screewidth > 900) ? 
        <table className="home">
        <tr>
            <td id="posts">
                <Posts data={postsData}/>
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