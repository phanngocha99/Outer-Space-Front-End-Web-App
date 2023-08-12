import "../style/post-page.css"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../components/UserContext";
import { Link } from 'react-router-dom';
import GenerateRandomImage from "../components/RandomImage";

export default function NewsPage() {
    const [newsInfo, setNewsInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://outer-space-api.vercel.app/news/${id}`)
            .then(response => {
                response.json().then(newsInfo => {
                    setNewsInfo(newsInfo);
                });
            });
    }, [setNewsInfo]);
    if (!newsInfo) return '';

    return (
        <div className="post-page-wrap">
            <h1>{newsInfo.title}</h1>
            <time>{formatISO9075(new Date(newsInfo.createdAt))}</time>
            <div className="author">by <span>{newsInfo.author.username}</span></div>
            {userInfo?.id === newsInfo.author._id && (
                <div className="edit-row">
                    <Link to={`/edit/news/${newsInfo._id}`} className="edit-btn" >
                        Chỉnh sửa bài viết này
                    </Link>
                </div>
            )}

            <h2>{newsInfo.summary}</h2>

            <div className="image">
                <GenerateRandomImage />
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: newsInfo.content }} />
        </div>
    );
}