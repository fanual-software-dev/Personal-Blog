import {BrowserRouter,Route,Routes} from 'react-router-dom'
import NavLinks from './navigationPages/NavLinks';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLinks></NavLinks>
        <div className='main-body'>
          <Main/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
