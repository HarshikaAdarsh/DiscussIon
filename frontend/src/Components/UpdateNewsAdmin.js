import './UpdateNewsAdmin.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';

const UpdateNewsAdmin = () => {
    useEffect(() => {
        getNewsAdmin();
    }, []);
    let params = useParams();
    let navigate = useNavigate();
    let [heading, setTopic] = useState("");
    let [subheading, setSubtopic] = useState("");
    let [content, setContent] = useState("");
    let addby = "admin";
    const updateNewsHandler = async () => {
        console.log(heading, subheading, content, addby);
        let result = await fetch(`http://localhost:4500/updatenewsadmin/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ heading, subheading, content, addby }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result) {
            navigate('/viewnewsadmin');
        }
    }

    const getNewsAdmin = async () => {
        let result = await fetch(`http://localhost:4500/getallnewsadmin/${params.id}`);
        result = await result.json();
        setTopic(result.heading);
        setSubtopic(result.subheading);
        setContent(result.content);
    }

    return (
        <>
            <div className="row justify-content-center updatenewsadmin-base">
                <div className="col-md-8 text-center align-self-center updatenewsadmin-main">
                    <h1>Update News Admin</h1>
                    <input type="text" className="updatenewsadmin-input"
                        onChange={(e) => setTopic(e.target.value)} value={heading}
                    />
                    <input type="text" className="updatenewsadmin-input"
                        onChange={(e) => setSubtopic(e.target.value)} value={subheading}
                    />
                    <textarea type="text" className="updatenewsadmin-input"
                        onChange={(e) => setContent(e.target.value)} value={content}
                    />
                    <button className='updatenewsadmin-button' onClick={updateNewsHandler}>Update News</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UpdateNewsAdmin;