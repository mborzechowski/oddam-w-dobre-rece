import homeHeroImage from '../assets/Home-Hero-Image.jpg'
import decoration from '../assets/Decoration.svg'
import {Link} from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import {useEffect, useState} from "react";
import supabase from "../services/supabase.js";
import {useAuth} from "../services/AuthContext.jsx";

export default function MainSection() {
    const {user, logout, login} = useAuth();
    const [email, setEmail] = useState('')
    const scrollPath = localStorage.getItem('path')


    useEffect(() => {
        const checkUserSession = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();

                if (!error && data && data.session && data.session.user && data.session.user.id) {
                    login(data.session.user.id);
                    setEmail(data.session.user.email);
                }
            } catch (error) {
                console.error('Error checking user session:', error);
            }
        };

        checkUserSession();
    }, [login]);

    useEffect(()=>{
        if (scrollPath) {
            scroller.scrollTo(scrollPath, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            })
            localStorage.setItem('path', null)
        }
    },[])


    return (
        <>
            <div className='container main_section'>
                <div className='hero_img'><img src={homeHeroImage} alt="things to give away"/></div>
                <div>
                    <div className='header_top'>
                        {!user && <div className='header_buttons'>
                            <Link to='/logowanie' className='header_single_button'>
                                Zaloguj
                            </Link>
                            <Link to='/rejestracja' className='header_single_button'>
                                Załóż konto
                            </Link>
                        </div>}
                        {user && <div className='header_buttons'>
                            <div className="header_greeting"> Cześć {email}</div>
                            <Link to='/oddaj-rzeczy' className='header_single_button'>
                                Oddaj rzeczy
                            </Link>
                            <Link to='/wylogowano' onClick={logout} className='header_single_button'>
                                Wyloguj
                            </Link>
                        </div>}
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
                        <h1 className='homepage_center_title'>Zacznij pomagać!<br/>
                        Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={decoration} alt="decoration" className='homepage_center_decoration'/>
                        <div className='homepage_center_buttons'>
                            <Link to={user ? '/oddaj-rzeczy' : '/logowanie'} className='homepage_center_buttons_one'>ODDAJ <br/>RZECZY</Link>
                            <Link to={user ? '/zorganizuj-zbiorke' : '/logowanie'} className='homepage_center_buttons_two'>ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}