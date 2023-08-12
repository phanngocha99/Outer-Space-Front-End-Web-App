import "../style/post-page.css"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../components/UserContext";
import { Link } from 'react-router-dom';
import GenerateRandomImage from "../components/RandomImage";


export default function EventPage() {
    const [eventInfo, setEventInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://outer-space-api.vercel.app/event/${id}`)
            .then(response => {
                response.json().then(eventInfo => {
                    setEventInfo(eventInfo);
                });
            });
    }, [setEventInfo]);
    if (!eventInfo) return '';

    return (
        <div className="post-page-wrap">
            <h1>{eventInfo.title}</h1>
            <time>{formatISO9075(new Date(eventInfo.createdAt))}</time>
            <div className="author">by <span>{eventInfo.author.username}</span></div>
            {userInfo?.id === eventInfo.author._id && (
                <div className="edit-row">
                    <Link to={`/edit/event/${eventInfo._id}`} className="edit-btn" >
                        Chỉnh sửa bài viết này
                    </Link>
                </div>
            )}

            <h2>{eventInfo.summary}</h2>

            <div className="image">
                <GenerateRandomImage />
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: eventInfo.content }} />
        </div>
    );
}