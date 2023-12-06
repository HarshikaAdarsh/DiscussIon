import './AddNews.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';


const AddNews = () => {
    let [heading, setTopic] = useState("");
    let [subheading, setSubtopic] = useState("");
    let [content, setContent] = useState("");
    let [error, setError] = useState(false);
    let navigate = useNavigate();

    let addby = "admin";
    const addnewsHandler = async () => {
        if (!heading || !subheading || !content) {
            setError(true);
            return false;
        }
        console.log(heading, subheading, content, addby);
        let result = await fetch(`http://localhost:4500/addnews`, {
            method: 'post',
            body: JSON.stringify({ heading, subheading, content, addby }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/viewnewsadmin');
    }
    return (
        <>
            <div className="row justify-content-center add-news-base">
                <div className='col-md-7 text-center align-self-center add-news-main'>
                    <h1>Add New News</h1>
                    <input type="text" placeholder="Enter Topic" className="add-news-input"
                        onChange={(e) => setTopic(e.target.value)} value={heading}
                    />
                    {error && !heading && <span className='addnews-set-error'>Enter Valid Topic</span>}
                    <input type="text" placeholder="Enter Title" className="add-news-input"
                        onChange={(e) => setSubtopic(e.target.value)} value={subheading}
                    />
                    {error && !subheading && <span className='addnews-set-error'>Enter Valid Sub-Topic</span>}
                    <textarea type="text" placeholder="Enter Contect" className="add-news-input"
                        onChange={(e) => setContent(e.target.value)} value={content}
                    />
                    {error && !content && <span className='addnews-set-error'>Enter Valid Contect</span>}<br />
                    <button className="add-news-button" onClick={addnewsHandler}>Add News</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddNews;