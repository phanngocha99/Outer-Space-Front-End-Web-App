import "../style/post-page.css"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../components/UserContext";
import { Link } from 'react-router-dom';
import GenerateRandomImage from "../components/RandomImage";

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://outer-space-api.vercel.app/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);
    if (!postInfo) return '';

    return (
        <div className="post-page-wrap">
            <h1>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">by <span>{postInfo.author.username}</span></div>
            {userInfo?.id === postInfo.author._id && (
                <div className="edit-row">
                    <Link to={`/edit/post/${postInfo._id}`} className="edit-btn" >
                        Edit this post
                    </Link>
                </div>
            )}


            <h2>{postInfo.summary}</h2>

            <div className="image">
                <GenerateRandomImage />
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    );
}