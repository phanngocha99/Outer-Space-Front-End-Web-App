import '../style/event.css'
import { eventData } from '../data/data-event'
import event from '../img/event-moon.jpg'

export default function Event() {
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
                    <EventContent title={eventData[0].title} details={eventData[0].details}
                        author={eventData[0].author} date={eventData[0].date}
                        status={eventData[0].status}
                    />
                    <EventContent title={eventData[1].title} details={eventData[1].details}
                        author={eventData[1].author} date={eventData[1].date}
                        status={eventData[1].status}
                    />
                </div>
                <div className='event-card-wrap'>
                    <EventContent title={eventData[2].title} details={eventData[2].details}
                        author={eventData[2].author} date={eventData[2].date}
                        status={eventData[2].status}
                    />
                    <EventContent title={eventData[3].title} details={eventData[3].details}
                        author={eventData[3].author} date={eventData[3].date}
                        status={eventData[3].status}
                    />
                </div>
            </div>
        </div>
    )
}

function EventContent({ title, details, author, date, status }) {
    return (
        <a className="event-card-box" href="#banner-home">
            <div className="event-card-inner">
                <img src={event} alt='event' />
                <div className={status === 'SẮP DIỄN RA' ? "event-card-info" : "event-card-info disable-event-card"}>
                    <div className="event-card-title">
                        {title}
                    </div>
                    <div className="event-card-audit">
                        <div className="event-card-author">
                            {author}
                        </div>
                        <div className="event-card-date">
                            {date}
                        </div>
                    </div>
                    <p className="event-card-status">
                        {status}
                    </p>
                    <div className="event-card-date-left"> Còn <span>0</span> ngày</div>
                    <i className='bx bx-minus'></i>
                    <p className="event-card-detail">
                        {details}
                    </p>
                </div>
            </div>
        </a>
    )
}