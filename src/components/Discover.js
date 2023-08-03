import '../style/discover.css'
import { discoverData } from '../data/data-discover'

export default function Discover() {
    return (
        <div id="discover-home" className="bg-grey discover">
            <div className="title">
                <div>KHÁM PHÁ</div>
                <div>
                    <a href="#banner-home">
                        <span className="btn">
                            XEM TẤT CẢ
                        </span>
                    </a>
                </div>
            </div>

            <p className="detail">Với tiêu chí “khoa học cho mọi người”, OuterSpace luôn mong muốn
                được đồng hành với cộng đồng thiên văn học Việt Nam. Lan tỏa kiến thức ở tất cả lĩnh vực liên quan đến thiên
                văn.
            </p>


            <div className="discover-card-contain">

                <div className='discover-card-wrap'>
                    <DiscoverContent title={discoverData[0].title} details={discoverData[0].details}
                        author={discoverData[0].title} date={discoverData[0].title} />
                    <DiscoverContent title={discoverData[1].title} details={discoverData[1].details}
                        author={discoverData[1].author} date={discoverData[1].date} />
                </div>
                <div className='discover-card-wrap'>
                    <DiscoverContent title={discoverData[2].title} details={discoverData[2].details}
                        author={discoverData[2].author} date={discoverData[2].date} />
                    <DiscoverContent title={discoverData[3].title} details={discoverData[3].details}
                        author={discoverData[3].author} date={discoverData[3].date} />
                </div>

            </div>

        </div>
    )
}

function DiscoverContent({ title, details, author, date }) {
    return (
        <a className="discover-card" href="#banner-home">
            <div className='discover-card-img'>
                <img src="./img/dcv-muatrenhanhtinh.png" alt="discover" />
            </div>
            <div className="discover-text">
                <h1 className='discover-text-title'>{title}</h1>
                <div className='card-dicover-info'>
                    <div className="card-discover-author">{author}</div>
                    <div className="card-discover-date">{date}</div>
                </div>
                <div className="card-discover-details">{details} </div>
            </div>
        </a>
    )
}