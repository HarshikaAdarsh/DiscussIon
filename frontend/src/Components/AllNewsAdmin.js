import './AllNewsAdmin.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';


const AllNewsAdmin = () => {
    let [news, setNews] = useState([]);

    const getNewsAdmin = async () => {
        let result = await fetch(`http://localhost:4500/allnewsadmin`);
        result = await result.json();
        setNews(result);
    }
    useEffect(() => {
        getNewsAdmin();
    }, []);
    const deleteNews = async (id) => {
        let result = await fetch(`http://localhost:4500/deletenews/${id}`, {
            method: 'delete'
        })
        result = await result.json();
        if (result) { getNewsAdmin(); }
    }

    const newSearchAdmin = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:4500/searchnews-admin/${key}`);
            result = await result.json();
            console.log(result);
            if (result) {
                setNews(result);
            }
        } else {
            getNewsAdmin();
        }
    }


    return (
        <>
            <div className='row justify-content-center allnewsadmin-base2'>
                <div className='col-md-9 allnewsadmin-base'>
                    <h1>All News</h1>
                    <input type="search" placeholder='Search News by Topic and Sub-Topic' className='allnewsadmin-search'
                        onChange={newSearchAdmin} />
                    {
                        news.length > 0 ? news.map((item, index) =>
                            <div key={item._id} className='allnewsadmin-single-new'>
                                <li className='allnewsadmin-heading'>{index + 1}.</li>
                                <li className='allnewsadmin-heading'>{item.heading}</li>
                                <li className='allnewsadmin-heading allnewsadmin-edit'><Link to={"/updatenewsadmin/" + item._id}><i class="fa-solid fa-pen-to-square"></i></Link></li>
                                <li className='allnewsadmin-heading allnewsadmin-delete'>
                                    <button onClick={() => deleteNews(item._id)} className="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                                </li>
                                <li className='allnewsadmin-subheading'>{item.subheading}</li>
                                <li className='allnewsadmin-content'>{item.content}</li>
                            </div>
                        )
                            : <th colSpan="4"> <h1>No data Found</h1></th>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AllNewsAdmin;