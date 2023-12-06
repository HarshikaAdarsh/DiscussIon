import './EditProfile.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';

const EditProfile = () => {
    let navigate = useNavigate();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [contact, setContact] = useState("");
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let user = JSON.parse(localStorage.getItem('user'));
    let userId = user._id;
    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        let result = await fetch(`http://localhost:4500/getuser/${userId}`);
        result = await result.json();
        setName(result.name); setEmail(result.email); setContact(result.contact); setCity(result.city); setPassword(result.password);
    }


    const updateUser = async () => {
        if (!name || !email || !contact || !password || !city) {
            setError(true);
            return false;
        }
        let result = await fetch(`http://localhost:4500/updateuser/${userId}`, {
            method: 'put',
            body: JSON.stringify({ name, email, password, contact, city }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (result) {
            navigate('/home');
        }
    }
    return (
        <>
            <div className="row justify-content-center editprofile-main">
                <div className="col-md-7 editprofile-profile">
                    <h1 align="center">Edit Your Profile</h1>
                    <input type="text" className="editprofile-input"
                        onChange={(e) => setName(e.target.value)} value={name} />
                    {error && !name && <span className='editprofile-error'><i class="fa-solid fa-triangle-exclamation"></i> Enter Valid Name</span>}

                    <input type="text" className="editprofile-input"
                        onChange={(e) => setEmail(e.target.value)} value={email} readOnly />
                    {error && !email && <span className='editprofile-error'>Enter Valid Email</span>}

                    <input type="text" className="editprofile-input" placeholder='Enter New Password'
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    {error && !password && <span className='editprofile-error'><i class="fa-solid fa-triangle-exclamation"></i> Enter Valid Password</span>}

                    <input type="text" className="editprofile-input"
                        onChange={(e) => setContact(e.target.value)} value={contact} />
                    {error && !contact && <span className='editprofile-error'><i class="fa-solid fa-triangle-exclamation"></i> Enter Valid Contact</span>}

                    <input type="text" className="editprofile-input"
                        onChange={(e) => setCity(e.target.value)} value={city} />
                    {error && !city && <span className='editprofile-error'><i class="fa-solid fa-triangle-exclamation"></i> Enter Valid City</span>}

                    <button onClick={updateUser} className="editprofile-button">Update Profile</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default EditProfile;