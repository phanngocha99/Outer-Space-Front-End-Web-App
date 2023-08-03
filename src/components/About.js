import '../style/about.css'
import { aboutData } from '../data/data-about'

export default function Banner() {
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

                <AboutContent title={aboutData[0].title} details={aboutData[0].details} />
                <AboutContent title={aboutData[1].title} details={aboutData[1].details} />
                <AboutContent title={aboutData[2].title} details={aboutData[2].details} />

            </div >
        </div >
    )
}

function AboutContent({ title, details }) {
    return (
        <div className="flip-box card ">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <div>
                        <img src="./img/about-sumenh.jpg" alt="about-sumenh" />
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