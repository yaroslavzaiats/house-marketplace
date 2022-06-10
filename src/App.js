import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SingIn from './pages/SignIn'
import SingUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/profile' element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/sign-in' element={<SingIn/>}/>
        <Route path='/sign-up' element={<SingUp/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
      <Navbar/>
    </Router>
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </>
  );
}

export default App;
