import Navbar from "./components/Navbar/Navbar"
import HorizontalSpace from "./components/HorizontalSpace/HorizontalSpace"
import { Routes,Route, BrowserRouter } from "react-router-dom"
import Registration from "./components/Registration/Registration"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import VotingDashboard from "./components/VotingDashboard/VotingDashboard"
import AdminDashboard from "./components/AdminDashboard/AdminDashboard"
import AddCandidate from "./components/AddCandidate/AddCandidate"
import { Logout } from "./components/Logout"
import Result from "./components/Result/Result"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UserProfile from "./components/UserProfile/UserProfile"
import ChangePassword from "./components/ChangePassword/ChangePassword"
function App() {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
      <Navbar/>
      < HorizontalSpace />
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/register" element={<Registration/>} />
         <Route path="/profile" element={<UserProfile/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/voter" element={<VotingDashboard/>}/>
         <Route path="/admin" element={<AdminDashboard/>}/>
         <Route path="/addcandidate" element={<AddCandidate/>}/>
         <Route path="/logout" element={<Logout/>}/>
         <Route path="/result" element={<Result/>}/>
         <Route path="/changepassword" element={<ChangePassword/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
