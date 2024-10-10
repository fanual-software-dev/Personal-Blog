import {BrowserRouter,Route,Routes} from 'react-router-dom'
import NavLinks from './navigationPages/NavLinks';
import Home from '../src/navigationPages/Home'
import Blogs from '../src/navigationPages/Blogs'
import About from '../src/navigationPages/About'
import Contact from '../src/navigationPages/Contact'

function App() {
  return (

      <BrowserRouter>
      <NavLinks></NavLinks>
        <div className='App'>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}>Home</Route>
            <Route path='/Blogs' element={<Blogs/>}>Blogs</Route>
            <Route path='/About' element={<About/>}>About</Route>
            <Route path='/Contact' element={<Contact/>}>Contact</Route>
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
