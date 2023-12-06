import {Link,useNavigate} from 'react-router-dom';
import './Header.css';


const Header = () =>{
    const auth = localStorage.getItem('user');
    var Name="";
    try{var Name = JSON.parse(auth).name.split(' ');}
    catch{console.log("Can not get Name")}
    const admin = localStorage.getItem('admin');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/login');
    }
    return(
        <div className='row header-menu-logo'>
            <div className='col-2'>
                <i class="fa-solid fa-book-open-reader"></i>
            </div>
            <div className='col-10'>
                <ul className='header-menu'>
                     {
                        auth ?
                        <>
                            <li><Link className='header-menu-list' to="/home" title='Home'><i class="fa-solid fa-house-user"></i></Link></li>
                            <li><Link className='header-menu-list' to="/news">News</Link></li>
                            <li><Link className='header-menu-list' to="/addnewsuser">Add News</Link></li>
                            <li><Link className='header-menu-list' to="/mynews">My News</Link></li>
                            <li><Link className='header-menu-list' to="/editprofile" title='Edit Profile'><i class="fa-solid fa-user-pen"></i></Link></li>
                            <li><Link onClick={ logout } className='header-menu-list' to="/login" title='Logout'><i class="fa-solid fa-right-from-bracket"></i> ({ Name[0] })</Link></li>
                        </>   :

                                admin ?
                                            <>
                                                <li><Link className='header-menu-list' to="/adminhome">Home</Link></li>
                                                <li><Link className='header-menu-list' to="/addnews">Add News</Link></li>
                                                <li><Link className='header-menu-list' to="/viewnewsadmin">View News</Link></li>
                                                <li><Link className='header-menu-list' to="/users">Users</Link></li>
                                                <li><Link onClick={ logout } className='header-menu-list' to="/login">Logout</Link></li>
                                            </>:
                                            <> 
                                                <li> <Link to="/" className='header-menu-list'>Home</Link></li> 
                                                <li> <Link to="/adminlogin" className='header-menu-list'>Admin Login</Link></li> 
                                                <li> <Link to="/login" className='header-menu-list'>User Login</Link></li> 
                                                <li><Link className='header-menu-list' to="/signup">Signup</Link></li>
                        </>                           
                     }

                </ul>
            </div>    
         </div>
    );
}

export default Header;