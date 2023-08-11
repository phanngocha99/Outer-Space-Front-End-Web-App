import '../style/discover.css'
import { formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import GenerateRandomImage from './RandomImage';

export default function Discover() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://outer-space-api.vercel.app/post')
            .then(response => {
                response.json().then(posts => {
                    setPosts(posts);
                });
            });
    }, [setPosts]);
    return (
        <div id="discover-home" className="bg-grey discover">
            <div className="title">
                <div>KHÁM PHÁ</div>
                {/* <div>
                    <a href="#banner-home">
                        <span className="btn">
                            XEM TẤT CẢ
                        </span>
                    </a>
                </div> */}
            </div>

            <p className="detail">Với tiêu chí “khoa học cho mọi người”, OuterSpace luôn mong muốn
                được đồng hành với cộng đồng thiên văn học Việt Nam. Lan tỏa kiến thức ở tất cả lĩnh vực liên quan đến thiên
                văn.
            </p>


            <div className="discover-card-contain">

                <div className='discover-card-wrap'>
                    <>
                        {
                            posts.length > 0
                            && posts.map((post, index) => (
                                <DiscoverContent key={index} {...post} />
                            ))}

                    </>
                </div>

            </div>

        </div>
    )
}

function DiscoverContent({ _id, title, summary, author, createdAt }) {
    return (
        <Link to={`/post/${_id}`
        } className="discover-card" >
            <div className='discover-card-img'>
                <GenerateRandomImage />
            </div>
            <div className="discover-text">
                <h1 className='discover-text-title'>{title}</h1>
                <div className='card-dicover-info'>
                    <div className="card-discover-author">{author.username}</div>
                    <div className="card-discover-date">{formatISO9075(new Date(createdAt))}</div>
                </div>
                <div className="card-discover-details">{summary} </div>
            </div>
        </Link >
    )
}
