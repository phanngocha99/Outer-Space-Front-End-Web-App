import '../style/about.css'
import aboutMission from '../img/about-sumenh.jpg'
import aboutActivity from '../img/about-hoatdong.jpg'
import aboutHistory from '../img/about-lichsu.jpg'



export default function About() {
    return (
        <div id="about-home" className="bg-grey about">
            <div className="title">
                <div>VỀ OUTERSPACE</div>
            </div>
            <p className="detail">Thế giới của chúng ta ấm áp, thoải mái và thân quen. Nhưng khi
                nhìn lên bầu trời cao và rộng kia, ta tự hỏi: "Liệu chúng ta ở 1 vị trí đặc biệt trong vũ trụ hay chỉ là
                thoáng qua? Vũ trụ chào đón ta hay chống lại ta? Phía bên ngoài không gian xa xôi kia có gì?"
                Chúng ta có thể đứng một chỗ và mãi mãi tự hỏi? Hoặc chúng ta có thể cùng nhau
                khởi hành 1 chuyến thám hiểm. Hãy cùng bước vào không gian ngoài kia với OuterSpace.
            </p>

            <div className="about-card-contain">

                <AboutContent title="MỤC TIÊU"
                    details="OuterSpace là trang web thiên văn học nghiệp dư với mục đích giúp cho kiến thức và tin tức thiên văn học được tiếp cận một cách dễ dàng nhất nhằm lan tỏa niềm đam mê khoa học."
                    img={aboutMission} />
                <AboutContent title="HOẠT ĐỘNG"
                    details="OuterSpace Webdite bao gồm: Chuyên mục Tin tức và chuyên mục Kiến thức thiên văn: được nghiên cứu hoặc dịch từ các website nước ngoài uy tín và được trích dẫn cụ thể. Chuyên mục Sự kiện: Cung cấp thông tin về các sự kiện thiên văn nổi bật sắp diễn ra."
                    img={aboutActivity} />
                <AboutContent title="LỊCH SỬ"
                    details="OuterSpace Website: - Được tạo ra từ 19/01/2021- Đang được tiếp tục phát triển."
                    img={aboutHistory} />

            </div >
        </div >
    )
}

function AboutContent({ title, details, img }) {
    return (
        <div className="flip-box card ">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <div>
                        <img src={img} alt="about-sumenh" />
                        <div className="contain-about" href="#banner-home">
                            <div className="text-card">{title}</div>
                        </div>
                    </div>
                </div>
                <div className="flip-box-back">
                    <div className="contain-about">
                        <div className="text-card">{title}</div>
                        <div className="text-contain-about">{details}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}