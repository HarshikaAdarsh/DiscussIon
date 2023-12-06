import './MyNews.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';



const MyNews = () => {
    let [news, setNews] = useState([]);
    let addby = JSON.parse(localStorage.getItem('user'))._id;
    const getnewsuser = async () => {
        let result = await fetch(`http://localhost:4500/usernews/${addby}`);
        result = await result.json();
        if (result) { setNews(result); }
        else { setNews("No News Added By You"); }

    }
    getnewsuser();
    const deleteNews = async (id) => {
        let result = await fetch(`http://localhost:4500/deletenews/${id}`, {
            method: 'delete'
        })
        result = await result.json();
        if (result) { getnewsuser(); }
    }

    return (
        <>
            <div className='row justify-content-center mynews-base'>
                <div className='col-md-9 align-self-center mynews-main'>
                    <h1 align="center">My News</h1>
                    {
                        news.length > 0 ? news.map((item, index) =>
                            <div className='mynews-news'>
                                <div className='mynews-index'>{index + 1}. </div>
                                <div className='mynews-heading'> {item.heading}
                                    <Link to={"/editenwsuser/" + item._id} className='mynews-edit'><i class="fa-solid fa-pen-to-square"></i></Link>
                                    <span className='mynews-delete' onClick={() => deleteNews(item._id)}><i class="fa-solid fa-trash"></i></span>
                                </div>
                                <div className='mynews-subheading'> {item.subheading}</div>
                                <div className='mynews-content'> {item.content}</div>
                            </div>
                        )
                            :
                            <h1>No News Added By You</h1>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyNews;