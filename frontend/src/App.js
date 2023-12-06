import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from "./Common/Header";
import Login from "./Components/Login";
import Signup from './Components/Signup';
import AdminLogin from './Components/AdminLogin';
import Home from './Components/Home';
import PrivatiComponent from './Components/PrivateComponent';
import PrivatiComponent2 from './Components/PrivateComponent2';
import AddNews from './Components/AddNews';
import AllNewsAdmin from './Components/AllNewsAdmin';
import UpdateNewsAdmin from './Components/UpdateNewsAdmin';
import AllNewsUser from './Components/AllNewsUser';
import AddNewsUser from './Components/AddNewsUser';
import MyNews from './Components/MyNews';
import EditNewsUser from './Components/EditNewsUser';
import EditProfile from './Components/EditProfile';
import HomePage from './Components/HomePage';
import AdminHome from './Components/AdminHome';
import AllUsers from './Components/AllUsers';



const App = () =>{
    return(
        <div>
            <Header />
            <Routes>

                <Route element={ <PrivatiComponent /> }>
                    <Route path='/home' element={ <Home /> } />
                    <Route path='/news' element={ <AllNewsUser /> } />
                    <Route path='/addnewsuser' element={ <AddNewsUser /> } />
                    <Route path='/mynews' element={ <MyNews /> } />
                    <Route path='/editprofile' element={ <EditProfile /> } />
                    <Route path='/editenwsuser/:key' element={ <EditNewsUser /> } />
                    <Route path='/logout' element={ <h1>Logout Component</h1> } />          
                </Route>

                <Route element={ <PrivatiComponent2 /> }>
                    <Route path='/adminhome' element={ <AdminHome /> } />
                    <Route path='/addnews' element={ <AddNews /> } />
                    <Route path='/viewnewsadmin' element={ <AllNewsAdmin /> } />
                    <Route path='/updatenewsadmin/:id' element={ <UpdateNewsAdmin /> } />
                    <Route path='/users' element={ <AllUsers /> } />
                    <Route path='/logout' element={ <h1>Logout Component</h1> } />          
                </Route>

                <Route path='/' element={ <HomePage /> } />
                <Route path='/signup' element={ <Signup /> } />
                <Route path='/adminlogin' element={ <AdminLogin /> } />
                <Route path='/login' element={ <Login /> } />
            </Routes>
        </div>
    );
}


export default App;