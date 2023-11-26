import decoration from '../assets/Decoration.svg'
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from '../services/AuthContext.jsx';
import { useEffect } from 'react';
import supabase from "../services/supabase";
export default function Login() {
    const navigation = useNavigate();
    const {login } = useAuth();

    useEffect(() => {
        const checkUserSession = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                if (!error && data && data.session && data.session.user && data.session.user.id) {
                    login(data.session.user.id);
                }
            } catch (error) {
                console.error('Error checking user session:', error);
            }
        };
        checkUserSession();
    }, [login]);

    async function onSignIn(e) {
        e.preventDefault();

        const formElements = e.currentTarget.elements;

        let { data, error } = await supabase.auth.signInWithPassword({
            email: formElements[0].value,
            password: formElements[1].value,
        });

        if (!error) {
            const { data: { user } } = await supabase.auth.getUser()
            localStorage.setItem('jwtToken', data.session.access_token);
            login(user);
            navigation('/');
            return;
        }

        console.error('something went wrong', error);
    }

    const setPath = (path) =>{
        localStorage.setItem('path', path)
    }

    return (
        <>
            <div className='container main_section login'>
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
                        <Link to='/' className="login_link">
                            <div className='header_nav_button'>Start</div>
                        </Link>
                        <Link to='/' onClick={ () => setPath('o-co-chodzi')} className="login_link">
                            <div className='header_nav_button' >O co chodzi?</div>
                        </Link>
                        <Link to='/' onClick={ () => setPath('o-nas')} className="login_link" >
                            <div className='header_nav_button'>O nas</div>
                        </Link>
                        <Link to='/' onClick={ () => setPath('fundacje')} className="login_link">
                            <div className='header_nav_button'>Fundacja i Organizacje</div>
                        </Link>
                        <Link to='/' onClick={ () => setPath('kontakt')} className="login_link">
                            <div className='header_nav_button'>Kontakt</div>
                        </Link>

                    </nav>
                </div>
                <div className='login_center_box'>
                    <h2 className="login_title">Zaloguj się</h2>
                    <img src={decoration} alt="decoration" className='homepage_center_decoration login_decoration'/>
                    <form className="login_form" onSubmit={onSignIn}>
                    <div className="login_inputs">
                        <div>
                            <label className="login_inputs_label" htmlFor="email">Email</label>
                            <input className="login_inputs_single_input" type="email" name="email" id="email"/>
                        </div>
                        <div>
                            <label className="login_inputs_label" htmlFor="password">Hasło</label>
                            <input className="login_inputs_single_input error_border" type="password" name="password" id="password"/>
                        </div>
                    </div>
                    <div className="login_buttons">
                        <Link to='/rejestracja' className="login_buttons_single">Załóż konto</Link>
                        <button type='submit' className="login_buttons_single">Zaloguj się</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}