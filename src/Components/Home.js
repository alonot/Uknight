import "../style/Home.css"
import Finder from "./Finder";
import Posts from "./Posts";
import { useLocation } from "react-router-dom";

const Home = ({postData, getauthor, handleClick , setCurrUser, getauthorbyName,getTrending}) => {
  const screewidth = document.documentElement.clientWidth
  const location = useLocation()
  let data = []
  if (location.pathname === "/") {
    data=getTrending()
  } else{
    data=Object.values(postData)
  }
  
  // console.log(screewidth)
  return (
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
            <Finder getauthorbyId={getauthor} setauthor={setCurrUser}/>
          </div>
        </div>

      }
    </>


  )
}
export default Home;