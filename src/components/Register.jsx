import decoration from '../assets/Decoration.svg'
import {Link} from 'react-router-dom';

export default function Register() {

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
                        <Link to='/' className="login_link">
                            <div className='header_nav_button'>O co chodzi?</div>
                        </Link>
                        <Link to='/' className="login_link">
                            <div className='header_nav_button'>O nas</div>
                        </Link>
                        <Link to='/' className="login_link">
                            <div className='header_nav_button'>Fundacja i Organizacje</div>
                        </Link>
                        <Link to='/' className="login_link">
                            <div className='header_nav_button'>Kontakt</div>
                        </Link>
                    </nav>
                </div>
                <div className='login_center_box'>
                    <h2 className="login_title">Załóż konto</h2>
                    <img src={decoration} alt="decoration" className='homepage_center_decoration login_decoration'/>
                    <div className="login_inputs register_inputs">
                        <div>
                            <label className="login_inputs_label" htmlFor="email">Email</label>
                            <input className="login_inputs_single_input" type="email" name="email" id="email"/>
                        </div>
                        <div>
                            <label className="login_inputs_label" htmlFor="password">Hasło</label>
                            <input className="login_inputs_single_input" type="password" name="password" id="password"/>
                        </div>
                        <div>
                            <label className="login_inputs_label" htmlFor="password-confirmation">Powtórz hasło</label>
                            <input className="login_inputs_single_input" type="password" name="password-confirmation"
                                   id="password-confirmation"/>
                        </div>
                    </div>
                    <div className="login_buttons">
                        <Link to='/logowanie' className="login_buttons_single">Zaloguj się</Link>
                        <div className="login_buttons_single">Załóż konto</div>
                    </div>
                </div>
            </div>
        </>
    )
}