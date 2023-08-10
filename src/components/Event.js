import '../style/event.css'
import { formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Event() {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/event').then(response => {
            response.json().then(event => {
                setEvent(event);
            });
        });
    }, [setEvent]);
    return (
        <div id="event-home" className="event">
            <div className="title">
                <div>SỰ KIỆN</div>
                <div>
                    <a href="#banner-home">
                        <span className="btn">
                            XEM TẤT CẢ
                        </span>
                    </a>
                </div>


            </div>
            <p className="detail">
                OuterSpace là nơi đem đến cho bạn những thông tin về các sự kiện thiên văn nổi bật sắp diễn ra.
                OuterSpace - nơi chia sẻ kiến thức hữu ích về thiên văn.
            </p>

            <div className="event-card-contain">
                <div className='event-card-wrap'>
                    <>
                        {
                            event.length > 0
                            && event.map((event, index) => (
                                <EventContent key={index} {...event} />
                            ))}

                    </>
                </div>
            </div>
        </div>
    )
}

function EventContent({ _id, title, summary, author, createdAt, cover }) {
    const oneDay = 24 * 60 * 60 * 1000;
    const remain = Math.round(Math.abs((new Date(createdAt) - new Date()) / oneDay))
    return (
        <Link to={`/event/${_id}`} className="event-card-box">
            <div className="event-card-inner">
                <img src={'https://outer-space-api.vercel.app/' + cover} alt='event' />
                <div className="event-card-info">
                    <div className="event-card-title">
                        {title}
                    </div>
                    <div className="event-card-audit">
                        <div className="event-card-author">
                            {author.username}
                        </div>
                        <div className="event-card-date">
                            {formatISO9075(new Date(createdAt))}
                        </div>
                    </div>
                    <i className='bx bx-minus'></i>
                    <p className="event-card-detail">
                        {summary}
                    </p>
                </div>
            </div>
        </Link>
    )
}