import "../style/Home.css"
import Finder from "./Finder";
import Posts from "./Posts";
import { useLocation } from "react-router-dom";

const Home = ({postData, getauthor, handleClick , setCurrUser}) => {
  const screewidth = document.documentElement.clientWidth
  const location = useLocation()
  console.log(postData)
  if (location.pathname === "/") {
    // setToshowposts(trending)
  } else if (location.pathname === '/posts') {
    // setToshowposts(Allposts)
  }
  
  // console.log(screewidth)
  return (
    <>
      {(screewidth > 1000) ?
        <table className="home">
          <tr>
            <td id="posts">
              <Posts heading={location.pathname === "/" ? "Trending" : "Posts"} data={postData} canClickUser={true} getauthor={getauthor} handleClick={handleClick} setCurrUser={setCurrUser}/>
            </td>
            <td id="finder">
              <Finder />
            </td>
          </tr>
        </table> :

        <div className="home">
          <div id="posts">
            <Posts heading={location.pathname === "/" ? "Trending" : "Posts"} data={postData} canClickUser={true} getauthor={getauthor} handleClick={handleClick} setCurrUser={setCurrUser} />
          </div>
          <div id="finder">
            <Finder />
          </div>
        </div>

      }
    </>


  )
}
export default Home;