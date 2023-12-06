import './EditNewsUser.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../Common/Footer';


const EditNewsUser = () => {
    let navigate = useNavigate();
    let params = useParams();
    let [heading, setHeading] = useState("");
    let [subheading, setSubheading] = useState("");
    let [content, setContent] = useState("");
    let addby = JSON.parse(localStorage.getItem('user'))._id;
    useEffect(() => {
        getNewsUser();
    }, []);


    const getNewsUser = async () => {
        let result = await fetch(`http://localhost:4500/getallnewsuser/${params.key}`);
        result = await result.json();
        setHeading(result.heading);
        setSubheading(result.subheading);
        setContent(result.content);
    }


    const editNewsHandler = async () => {
        console.log(heading, subheading, content, addby);
        let result = await fetch(`http://localhost:4500/updatenewsuser/${params.key}`, {
            method: 'put',
            body: JSON.stringify({ heading, subheading, content, addby }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result) {
            navigate('/mynews');
        }
    }


    return (
        <>
            <div className="row justify-content-center editnewsuser-main2">
                <div className="col-md-8 align-self-center text-center editnewsuser-main">
                    <h1>Update News User</h1>
                    <input type="text" className="editnewsuser-input"
                        onChange={(e) => setHeading(e.target.value)} value={heading}
                    />
                    <input type="text" className="editnewsuser-input"
                        onChange={(e) => setSubheading(e.target.value)} value={subheading}
                    />
                    <textarea type="text" className="editnewsuser-input"
                        onChange={(e) => setContent(e.target.value)} value={content}
                    />
                    <button className='editnewsuser-button' onClick={editNewsHandler}>Update News</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default EditNewsUser;