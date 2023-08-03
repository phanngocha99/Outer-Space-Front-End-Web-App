import '../style/banner.css'
import banner1 from '../img/banner-1.png'
import banner2 from '../img/banner-2.png'

export default function Banner() {
    return (
        <div id="banner-home" className="banner">
            <div className='banner-img'>
                <img className="img-banner-1st" src={banner1} alt="banner" />
                <img className="img-banner-2nd" src={banner2} alt="banner" />
            </div>
            <div className="banner-text">
                <i>
                    " OuterSpace
                    <i className='bx bx-atom'></i>
                    - Astronomy Knowledge and News "
                </i>
            </div>
        </div>
    )
}