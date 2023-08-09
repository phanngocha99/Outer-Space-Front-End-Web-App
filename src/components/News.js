import '../style/news.css'
import { newsData } from '../data/data-news'
import news from '../img/news-mua-sao-bang-delta-quaris.jpg'


export default function News() {
    return (
        <div id="news-home" className="news">
            <div className="title">
                <div>TIN TỨC</div>
                <div>
                    <a href="#banner-home">
                        <span className="btn">
                            XEM TẤT CẢ
                        </span>
                    </a>
                </div>
            </div>

            <p className="detail">
                OuterSpace luôn mong muốn phần nào đó đưa mọi người đến gần với
                thiên văn học nghiệp dư và các kiến thức khoa học thường thức. OuterSpace cập nhật những tin tức - thông tin
                mới và chính xác về tất cả những lĩnh vực liên quan đến thiên văn trong và ngoài nước .
            </p>

            <div className="news-card-contain">
                <div className='news-card-wrap'>
                    <NewsContent title={newsData[0].title} details={newsData[0].details}
                        author={newsData[0].title} date={newsData[0].title} />
                    <NewsContent title={newsData[1].title} details={newsData[1].details}
                        author={newsData[1].author} date={newsData[1].date} />
                </div>
                <div className='news-card-wrap'>
                    <NewsContent title={newsData[2].title} details={newsData[2].details}
                        author={newsData[2].author} date={newsData[2].date} />
                    <NewsContent title={newsData[3].title} details={newsData[3].details}
                        author={newsData[3].author} date={newsData[3].date} />
                </div>
            </div >
        </div >
    )
}

function NewsContent({ title, details, author, date }) {
    return (
        <a className="news-card-box" href="#banner-home">
            <div className='news-card-inner'>
                <div className="news-card-behind"></div>
                <img src={news} alt="news" />
                <div className="news-card-front">
                    <p className='news-card-details'>{details}</p>
                    <i className='bx bx-right-arrow-alt'></i>
                </div>
            </div>
            <div className="news-card-text">
                <p className="news-card-title">{title}</p>
                <div className="news-card-info">
                    <div className="news-card-author">{author}</div>
                    <div className="news-card-date">{date}</div>
                </div>
            </div>
        </a>
    )
}