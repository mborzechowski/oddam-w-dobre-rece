import decoration from '../assets/Decoration.svg'
import {Link} from 'react-router-dom';
import supabase from "../services/supabase";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Register() {
    const navigation = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!email || !password || !passwordConfirmation) {
            setError('Wszystkie pola są wymagane.');
            return false;
        }
        if (password.length < 6) {
            setError('Hasło musi mieć conajmniej 6 znaków.');
            return false;
        }

        if (password !== passwordConfirmation) {
            setError('Hasła nie są identyczne.');
            return false;
        }

        return true;
    };

    async function onRegister(e) {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        const formElements = e.currentTarget.elements;

        let {data, error} = await supabase.auth.signUp({
            email: formElements[0].value,
            password: formElements[1].value,
        });

        if (!error) {
            console.log('Registration successful');
            console.log(data);
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
                    <h2 className="login_title">Załóż konto</h2>
                    <img src={decoration} alt="decoration" className='homepage_center_decoration login_decoration'/>
                    <form onSubmit={onRegister} className="login_form">
                    <div className="login_inputs register_inputs">
                        <div>
                            <label className="login_inputs_label" htmlFor="email">Email</label>
                            <input className="login_inputs_single_input" type="email" name="email" id="email" onChange={(e) =>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label className="login_inputs_label" htmlFor="password">Hasło</label>
                            <input className="login_inputs_single_input" type="password" name="password" id="password" onChange={(e) =>setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <label className="login_inputs_label" htmlFor="password-confirmation">Powtórz hasło</label>
                            <input className="login_inputs_single_input" type="password" name="password-confirmation"
                                   id="password-confirmation" onChange={(e) => setPasswordConfirmation((e.target.value))}/>
                        </div>
                    </div>
                    <div className="login_buttons">
                        <Link to='/logowanie' className="login_buttons_single">Zaloguj się</Link>
                        <button type='submit' className="login_buttons_single">Załóż konto</button>
                    </div>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </>
    )
}