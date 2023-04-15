import { Fragment } from 'react';
import './App.css';
import Navbars from './Components/Nav/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <Fragment>
          <Navbars />
          <Home />
          </Fragment>
  );
}

export default App;
