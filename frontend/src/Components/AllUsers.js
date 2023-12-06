import './AllUsers.css';
import Footer from '../Common/Footer';
import { useState } from 'react';

const AllUsers = () => {
    let [user,setUser] = useState([]);
    const getUser =async () =>{
        let result = await fetch(`http://localhost:4500/alluser`);
        result =await result.json();
        setUser(result);
    }
    getUser();

    return (
        <>
            <div className='row justify-content-center allusers-base'>
                <div className='col-md-6 text-center allusers-main'>
                    <h1 align="center">All User</h1>
                    {
                        user.map((item,index)=>
                        <div className='alluser-user'>
                            <div>{ index+1 }</div>
                            <div>{ item.name }</div>
                            <div>{ item.email }</div>
                            <div>{ item.contact }</div>
                            <div>{ item.city }</div>
                        </div>
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AllUsers;