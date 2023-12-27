import {useEffect, useState} from "react";
import supabase from "../services/supabase.js";
import {useAuth} from "../services/AuthContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import heroForm from '../assets/Form-Hero-Image.jpg'
import Inquiry from "./Inquiry.jsx";
import Contact from "./Contact.jsx";

export default function FormPage() {
    const {user, logout, login} = useAuth();
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const checkUserSession = async () => {
            try {
                const {data, error} = await supabase.auth.getSession();

                if (!user) {
                    navigate('/')
                }
                if (!error && data && data.session && data.session.user && data.session.user.id) {
                    login(data.session.user.id);
                    setEmail(data.session.user.email)
                }
            } catch (error) {
                console.error('Error checking user session:', error);
            }
        };

        checkUserSession();
    }, []);

    const setPath = (path) => {
        localStorage.setItem('path', path)
    }

    return (
        <>
            <div className='container'>
                <div className='form_page'>
                    <div className='hero_img_form'><img src={heroForm} alt="clothes to give away"/></div>
                    <div>
                        <div className='header_top'>
                            <div className='header_buttons'>
                                <div className="header_greeting"> Cześć {email}</div>
                                <Link to='/oddaj-rzeczy' className='header_single_button'>
                                    Oddaj rzeczy
                                </Link>
                                <Link to='/wylogowano' onClick={logout} className='header_single_button'>
                                    Wyloguj
                                </Link>
                            </div>
                            <nav className='header_nav'>
                                <Link to='/' className="login_link">
                                    <div className='header_nav_button'>Start</div>
                                </Link>
                                <Link to='/' onClick={() => setPath('o-co-chodzi')} className="login_link">
                                    <div className='header_nav_button'>O co chodzi?</div>
                                </Link>
                                <Link to='/' onClick={() => setPath('o-nas')} className="login_link">
                                    <div className='header_nav_button'>O nas</div>
                                </Link>
                                <Link to='/' onClick={() => setPath('fundacje')} className="login_link">
                                    <div className='header_nav_button'>Fundacja i Organizacje</div>
                                </Link>
                                <Link to='/' onClick={() => setPath('kontakt')} className="login_link">
                                    <div className='header_nav_button'>Kontakt</div>
                                </Link>
                            </nav>
                        </div>

                        <div className='form_page_center'>
                            <h1 className='form_page_center_title'>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM
                            </h1>
                            <img src={decoration} alt="decoration" className='homepage_center_decoration'/>
                            <h2 className='form_page_center_subtitle'>Wystarczą 4 proste kroki:</h2>
                            <div className='form_page_center_steps'>
                                <div className='form_page_center_steps_single'>1 <p
                                    className='form_page_center_steps_text'>Wybierz rzeczy</p></div>
                                <div className='form_page_center_steps_single'>2 <p
                                    className='form_page_center_steps_text'>Spakuj je w worki</p></div>
                                <div className='form_page_center_steps_single'>3 <p
                                    className='form_page_center_steps_text'>Wybierz fundację</p></div>
                                <div className='form_page_center_steps_single'>4 <p
                                    className='form_page_center_steps_text'>Zamów kuriera</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Inquiry/>
                <Contact/>
            </div>
        </>
    )
}

