
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
