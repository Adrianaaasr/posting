import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Gratefull from './Pages/Gratefull';
import Error from './Pages/Error'
import BurgerMenu from '../src/Components/BurgerMenu';

function App() {
  return (
    <div>
        <Routes>
            {/* <Route path='/' element={<Layout/>}/> */}
            <Route path='/' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Gratefull' element={<Gratefull/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
