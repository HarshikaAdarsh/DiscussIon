import './AllNewsUser.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../Common/Footer';


const AllNewsUser = () => {
    let [news, setNews] = useState([]);

    const getallnewsuser = async () => {
        let result = await fetch(`http://localhost:4500/allnewsuser`);
        result = await result.json();
        setNews(result);
    }
    useEffect(() => {
        getallnewsuser();
    }, []);

    const searchNewsUser = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:4500/searchnews-user/${key}`);
            result = await result.json();
            if (result) {
                setNews(result);
            } else {
                getallnewsuser();
            }
        }
    }

    return (
        <>
            <div className="row justify-content-center allnewsuser-base">
                <div className="col-md-8">
                    <div className="allnewsuser-main">
                        <h1 align="center">All News</h1>
                        <input type="search" className='allnewsuser-search' onChange={searchNewsUser}
                            placeholder="Search News by topic and sub-topic" />
                        {
                            news.length > 0 ? news.map((item, index) =>
                                <div className='allnewsuser-news'>
                                    <div className='allnewsuser-heading1'>{index + 1}. </div>
                                    <div className='allnewsuser-heading2'>{item.heading}</div>
                                    <div className='allnewsuser-subheading'>{item.subheading}</div>
                                    <div className='allnewsuser-content'>{item.content}</div>
                                </div>
                            )
                                :
                                <h1 align="center">No Data Matched</h1>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AllNewsUser;