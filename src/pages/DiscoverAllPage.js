import '../style/all-page.css'
import { formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function DiscoverAllPage() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://outer-space-api.vercel.app/post')
            .then(response => {
                response.json().then(post => {
                    setPost(post);
                });
            });
    }, [setPost]);

    return (
        <div className='all-page'>
            <div id="post-home" className="post">
                <div className="title">
                    <div>KHÁM PHÁ</div>
                </div>

                <p className="detail">
                    OuterSpace luôn mong muốn phần nào đó đưa mọi người đến gần với
                    thiên văn học nghiệp dư và các kiến thức khoa học thường thức. OuterSpace cập nhật những tin tức - thông tin
                    mới và chính xác về tất cả những lĩnh vực liên quan đến thiên văn trong và ngoài nước .
                </p>

                <div className="card-contain">
                    <>
                        {
                            post.length > 0
                            && post.map((post, index) => (
                                <PostContent key={index} {...post} />
                            ))}
                    </>

                </div >
            </div >
        </div>
    )
}

function PostContent({ _id, title, summary, author, createdAt, cover }) {
    return (
        <Link to={`/post/${_id}`} className="card-box" >
            <div className='img-wrap'>
                <img src={'https://outer-space-api.vercel.app/' + cover} alt="image" />
            </div>
            <div className="text">
                <p className="text-title">{title}</p>
                <div className="text-info">
                    <div className="text-author">{author.username}</div>
                    <div className="text-date">{formatISO9075(new Date(createdAt))}</div>
                </div>
                <p className='text-details'>{summary}</p>
            </div>
        </Link>
    )
}

