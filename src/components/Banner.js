import '../style/banner.css'

export default function Banner() {
    return (
        <div id="banner-home" className="banner">
            <div className='banner-img'>
                <img className="img-banner-1st" src="../public/img/banner-1.png" alt="banner" />
                <img className="img-banner-2nd" src="./img/banner-2.png" alt="banner" />
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