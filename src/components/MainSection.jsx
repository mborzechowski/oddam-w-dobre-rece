import homeHeroImage from '../assets/Home-Hero-Image.jpg'
import decoration from '../assets/Decoration.svg'
import {Link} from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';

export default function MainSection() {

    return (
        <>
            <div className='container main_section'>
                <div className='hero_img'><img src={homeHeroImage} alt="things to give away"/></div>
                <div>
                    <div className='header_top'>
                        <div className='header_buttons'>
                            <Link to='/logowanie' className='header_single_button'>
                                Zaloguj
                            </Link>
                            <Link to='/rejestracja' className='header_single_button'>
                                Załóż konto
                            </Link>
                        </div>
                        <nav className='header_nav'>
                            <ScrollLink to='start' smooth={true} duration={500}>
                                <div className='header_nav_button'>Start</div>
                            </ScrollLink>
                            <ScrollLink to='o-co-chodzi' smooth={true} duration={500}>
                                <div className='header_nav_button'>O co chodzi?</div>
                            </ScrollLink>
                            <ScrollLink to='o-nas' smooth={true} duration={500}>
                                <div className='header_nav_button'>O nas</div>
                            </ScrollLink>
                            <ScrollLink to='fundacje' smooth={true} duration={500}>
                                <div className='header_nav_button'>Fundacja i Organizacje</div>
                            </ScrollLink>
                            <ScrollLink to='kontakt' smooth={true} duration={500}>
                                <div className='header_nav_button'>Kontakt</div>
                            </ScrollLink>
                        </nav>
                    </div>
                    <div className='homepage_center'>
                        <h1 className='homepage_center_title'>Zacznij pomagać!</h1>
                        <h1 className='homepage_center_title'>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={decoration} alt="decoration" className='homepage_center_decoration'/>
                        <div className='homepage_center_buttons'>
                            <Link to='/logowanie' className='homepage_center_buttons_one'>ODDAJ <br/>RZECZY</Link>
                            <Link to='/logowanie' className='homepage_center_buttons_two'>ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}