import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './components/loginComponent/SignIn';
import SignUp from './components/loginComponent/SignUp';
import Home from './components/homeComponent/Home';

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
