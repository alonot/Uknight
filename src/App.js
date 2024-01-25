import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import './App.css';
import UserNav from './Components/UserNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './Components/User';
import About from './Components/About';



function App() {

  const screewidth=document.documentElement.clientWidth
  
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact Component={()=>(
          <>
          {(screewidth > 900)?
            <div className='Mainarena'>
              <Home />
              <UserNav />
            </div>
            :
            <div className='Mainarena'>
              <UserNav />
              <Home />
            </div>
          }
          </>
        )} />
        <Route path='/posts' exact Component={()=>(
          <>
          {(screewidth > 900)?
            <div className='Mainarena'>
              <Home />
              <UserNav />
            </div>
            :
            <div className='Mainarena'>
              <UserNav />
              <Home />
            </div>
          }
          </>
        )} />
        <Route path='/user' Component={User} />
        <Route path='/about' Component={About} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
