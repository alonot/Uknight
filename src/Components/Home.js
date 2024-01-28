import "../style/Home.css"
import Finder from "./Finder";
import Posts from "./Posts";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/** 
  *   Main display Home component for / and /posts pages,
  *   postData : the incoming content,
  *   getauthor: returns author object matching that id,
  *    setCurrUser: sets the user to be displayed at /user page ,
  *   getTrending : gets the top 5 posts ,
  *   handleClick: handles the click event on the post,
  *   getauthorbyName: returns author object matching that name,
*/

const Home = ({postData, getauthor, handleClick , setCurrUser, getauthorbyName ,getTrending}) => {
  const [Loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const screewidth = document.documentElement.clientWidth
  const location = useLocation()
  useEffect(()=>{
    if (location.pathname === "/") {
      setLoading(true)
      setData(getTrending())
      setLoading(false)
    } else{
      setData(Object.values(postData))
    }
  },[])
  
  // console.log(screewidth)
  return (
    <>
      {!Loading && 
        <>
          {(screewidth > 1000) ?
        <table className="home">
          <tbody>
          <tr>
            <td id="posts">
              <Posts heading={location.pathname === "/" ? "Trending" : "Posts"} data={data} canClickUser={true} getauthor={getauthor} handleClick={handleClick} setCurrUser={setCurrUser}/>
            </td>
            <td id="finder">
              <Finder getauthorbyId={getauthor} setauthor={setCurrUser} getauthorbyName={getauthorbyName}/>
            </td>
          </tr>
          </tbody>
        </table> :

        <div className="home">
          <div id="posts">
            <Posts heading={location.pathname === "/" ? "Trending" : "Posts"} data={data} canClickUser={true} getauthor={getauthor} handleClick={handleClick} setCurrUser={setCurrUser} />
          </div>
          <div id="finder">
            <Finder getauthorbyId={getauthor} setauthor={setCurrUser}  getauthorbyName={getauthorbyName}/>
          </div>
        </div>

      }
        </>
      }
    </>


  )
}
export default Home;
