import './Signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';

const Signup = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [contact, setContact] = useState("");
    let [city, setCity] = useState("");
    let navigate = useNavigate();

    const signupHandler = async () => {
        console.log(name, email, password, contact, city);
        let result = await fetch(`http://localhost:4500/signup`, {
            method: 'post',
            body: JSON.stringify({ name, email, password, contact, city }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/home');
        } else {
            alert("Enter Correct Detail");
        }
    }
    return (
        <>
            <div className='row justify-content-center signup-page-base'>
                <div className='col-md-6 align-self-center text-center signup-main'>
                    <h1>Registration For New User</h1>
                    <input type="text" placeholder='Enter Full Name' className='signup-input-box'
                        onChange={(e) => setName(e.target.value)} value={name}
                    />
                    <input type="email" placeholder='Enter Unique Email' className='signup-input-box'
                        onChange={(e) => setEmail(e.target.value)} value={email}
                    />
                    <input type="password" placeholder='Enter Password' className='signup-input-box'
                        onChange={(e) => setPassword(e.target.value)} value={password}
                    />
                    <input type="number" placeholder='Enter Contact Number' className='signup-input-box'
                        onChange={(e) => setContact(e.target.value)} value={contact}
                    />
                    <input type="text" placeholder='Enter Your City' className='signup-input-box'
                        onChange={(e) => setCity(e.target.value)} value={city}
                    />
                    <input type="file" placeholder='Choose Your DP' className='signup-input-box'
                    />
                    <button onClick={signupHandler} className='signup-button'>Register</button>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Signup;