import './AddNewsUser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';


const AddNewsUser = () => {
    let navigate = useNavigate();
    let [heading, setHeading] = useState('');
    let [subheading, setSubheading] = useState('');
    let [content, setContent] = useState('');
    let addby = JSON.parse(localStorage.getItem('user'))._id;

    const addnewsHandler = async () => {
        console.log(heading, subheading, content);
        let result = await fetch(`http://localhost:4500/addnewsuser`, {
            method: 'post',
            body: JSON.stringify({ heading, subheading, content, addby }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/news');
    }
    return (
        <>
            <div className="row justify-content-center addnewsuser-base">
                <div className="col-md-8 text-center align-self-center addnewsuser-main">
                    <h1 className='addnewsuser-name'>Add New News</h1>
                    <input type="text" className="addnewsuser-input" placeholder="Enter Heading of news"
                        onChange={(e) => setHeading(e.target.value)} value={heading}
                    />
                    <input type="text" className="addnewsuser-input" placeholder="Enter Sub-Heading of news"
                        onChange={(e) => setSubheading(e.target.value)} value={subheading}
                    />
                    <textarea type="text" className="addnewsuser-input" placeholder="Enter Content of news"
                        onChange={(e) => setContent(e.target.value)} value={content}
                    />
                    <button className="addnewsuser-button" onClick={addnewsHandler}>Add News</button>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default AddNewsUser;