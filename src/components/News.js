import '../style/news.css'
import { formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import GenerateRandomImage from './RandomImage'

export default function News() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://outer-space-api.vercel.app/news')
            .then(response => {
                response.json().then(news => {
                    setNews(news);
                });
            });
    }, [setNews]);

    return (
        <div id="news-home" className="news">
            <div className="title">
                <div>TIN TỨC</div>
                {/* <div>
                    <a href="#banner-home">
                        <span className="btn">
                            XEM TẤT CẢ
                        </span>
                    </a>
                </div> */}
            </div>

            <p className="detail">
                OuterSpace luôn mong muốn phần nào đó đưa mọi người đến gần với
                thiên văn học nghiệp dư và các kiến thức khoa học thường thức. OuterSpace cập nhật những tin tức - thông tin
                mới và chính xác về tất cả những lĩnh vực liên quan đến thiên văn trong và ngoài nước .
            </p>

            <div className="news-card-contain">
                <div className="news-card-wrap">
                    <>
                        {
                            news.length > 0
                            && news.map((news, index) => (
                                <NewsContent key={index} {...news} />
                            ))
                        }

                    </>
                </div>

            </div >
        </div >
    )
}

function NewsContent({ _id, title, summary, author, createdAt }) {
    return (
        <Link to={`/news/${_id}`} className="news-card-box" >
            <div className='news-card-inner'>
                <div className="news-card-behind"></div>
                <GenerateRandomImage />
                <div className="news-card-front">
                    <p className='news-card-details'>{summary}</p>
                    <i className='bx bx-right-arrow-alt'></i>
                </div>
            </div>
            <div className="news-card-text">
                <p className="news-card-title">{title}</p>
                <div className="news-card-info">
                    <div className="news-card-author">{author.username}</div>
                    <div className="news-card-date">{formatISO9075(new Date(createdAt))}</div>
                </div>
            </div>
        </Link>
    )
}