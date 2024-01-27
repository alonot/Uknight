import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import './App.css';
import UserNav from './Components/UserNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './Components/User';
import About from './Components/About';
import Post from './Components/Post';
import { AUTHOR, BASE_URL, POST, POSTS } from "./util";
import { useEffect, useState } from 'react';

function App() {
  const [singlepostData, setsinglepostdata] = useState({})
  const [currentUser, setcurrentUser] = useState({})
  const [ Loading , setLoading ] = useState(true)
  const [Allposts, setPosts] = useState({})
  const [Allauthors, setauthors] = useState({})
  const trending = {}
  const authors = {}
  const posts = {}

  const getauthor = (author_id) =>{
    return Allauthors[author_id]
  }

  const setCurrUser = (user_id) => {
    let author=getauthor(user_id)
    setcurrentUser(author)
  }

  const getpost=(post_id)=> Allposts[post_id]

  const gettrending = async()=>{
    
  }

  const getEachPost = async (post) => {
    await fetch(BASE_URL + POST + post.id)
      .then(res => res.json())
      .then(async (res) => {
        // console.log("pii")
        post.author_id=res.author_id
        let newpost = res
        posts[post.id] = newpost
        if (y++ < 5) {
          trending[post.id] = newpost
        }
      })
      .then(async()=>{
        // console.log("piii")
      })
      // .catch(err => console.log(err))
  }
  let y = 0
  //to use /posts and then /post
  const getAllposts = async () => {
    let allposts
    setLoading(true)
    // console.log("hi")

    await fetch(BASE_URL + POSTS)
      .then(res => res.json())
      .then(res => {
        allposts = res.posts
        // console.log("hii")
      })
      .then(async () => {
        // console.log("hiii")
        for(var i=0;i<allposts.length;i++){
          await getEachPost(allposts[i])
        }
        // console.log(posts)  
        // console.log("hiiii")
      })
      .then(async () =>{
        // console.log("eee")
        for(let key in posts){
          await getauthors(posts[key])
        }
        // console.log("pppp")
        // console.log(authors)
      })
      .then(async()=>{
        setauthors(authors)
        setPosts(posts)
        // console.log("bye")
        setLoading(false)
      })

      // .catch(err => console.log(err))
  }

  const getauthors=async(post)=>{
    // console.log("yii")
    // if (authors[post.author_id]) {
    //   authors[post.author_id].posts.push(post.id)
    //   setauthors(authors)
    //   return
    // }
    await fetch(BASE_URL + AUTHOR + post.author_id)
      .then(res => res.json())
      .then(res => {
        // console.log("qq")
        let brname = res.name.split(' ')
        let profilephototxt
        if (brname.length == 1) {
          profilephototxt = brname[0].charAt(0) + brname[0].charAt(0)
        } else {
          profilephototxt = brname[0].charAt(0) + brname[1].charAt(0)
        }
        authors[post.author_id] = { "name": res.name, "profilephototxt": profilephototxt, "posts": [post.id] }
      })
      // .catch(err => console.log(err))
  }


  useEffect(() => {
    getAllposts()

  }, [])


  const screewidth = document.documentElement.clientWidth
  const setpostData = (data) => {
    setsinglepostdata(data)
  }
  // console.log(Loading)
  return (
    <Router>
      <div className="App">
        <Header />
        {!Loading && 
        <>
        <Routes>
          <Route path='/' exact Component={() => (
            <>
              {(screewidth > 1000) ?
                <div className='Mainarena'>
                  <Home postData={Allposts} getauthor={getauthor} handleClick={setpostData} setCurrUser={setCurrUser} />
                  <UserNav data={Allauthors} handleClick={setCurrUser}/>
                </div>
                :
                <div className='Mainarena'>
                  <UserNav data={Allauthors} handleClick={setCurrUser}/>
                  <Home postData={Allposts} getauthor={getauthor} handleClick={setpostData} setCurrUser={setCurrUser} />
                </div>
              }
            </>
          )} />
          <Route path='/posts' exact Component={() => (
            <>
              {(screewidth > 1000) ?
                <div className='Mainarena'>
                  <Home canClickUser={true} postData={Allposts} getauthor={getauthor} handleClick={setpostData} setCurrUser={setCurrUser} />
                  <UserNav data={Allauthors} handleClick={setCurrUser}/>
                </div>
                :
                <div className='Mainarena'>
                  <UserNav data={Allauthors} handleClick={setCurrUser}/>
                  <Home canClickUser={true} postData={Allposts} getauthor={getauthor} handleClick={setpostData} setCurrUser={setCurrUser} />
                </div>
              }
            </>
          )} />
          <Route path='/user' Component={() => (
            <User getauthor={getauthor} currentUser={currentUser} getpost={getpost} handleClick={setpostData} setCurrUser={setCurrUser}/>
          )} />
          <Route path='/about' Component={About} />
          <Route path='/post' Component={() => (
            <Post data={singlepostData} getauthor={getauthor} setCurrUser={setCurrUser}  />
          )} />

        </Routes>
        <Footer />
        </>
          }
      </div> 
    </Router>
  );
}

export default App;
