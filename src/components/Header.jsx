import homeHeroImage from '../assets/Home-Hero-Image.jpg'
import decoration from '../assets/Decoration.svg'
export default function Header(){

    return (
        <>
        <div className='container'>
            <div><img src={homeHeroImage} alt="things to give away" className='hero_img'/></div>
            <div className='header_top'>
                <div className='header_buttons'>
                    <button className='header_single_button'>Zaloguj</button>
                    <button className='header_single_button'>Załóż konto</button>
                </div>
                <nav className='header_nav'>
                    <div className='header_nav_button'>Start</div>
                    <div className='header_nav_button'>O co chodzi?</div>
                    <div className='header_nav_button'>O nas</div>
                    <div className='header_nav_button'>Fundacja i Organizacje</div>
                    <div className='header_nav_button'>Kontakt</div>
                </nav>
            </div>
            <div className='homepage_center'>
                <h1 className='homepage_center_title'>Zacznij pomagać!</h1>
                <h1 className='homepage_center_title'>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt="decoration" className='homepage_center_decoration'/>
                <div className='homepage_center_buttons'>
                    <div>ODDAJ RZECZY</div>
                    <div>ZORGANIZUJ ZBIÓRKĘ</div>
                </div>
            </div>
        </div>
        </>
    )
}