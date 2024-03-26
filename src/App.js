import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/user/Login';
import Register from './components/user/Register';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import Home from './Home';
import Header from './components/layouts/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
        <Header/>
                <div className='container container-fluid'>
                  <ToastContainer theme='dark' />
                  <Routes>
                  <Route path='/' element={<Login/>} />
                      <Route path='/register' element={<Register/>} />
                      <Route path='/password/forgot' element={<ForgotPassword/> } />
                      <Route path='/password/reset/:token' element={<ResetPassword/> } />
                      <Route path='/home' element={<Home/>}/>
                  </Routes>
                  </div>
                  </HelmetProvider>
      </div>
    </Router>
    
    )
}
export default App;
