import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg";

export default function Logout() {

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
                <div className="logout">
                    <h2 className="logout_title">Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                    <img src={decoration} alt="decoration" className='homepage_center_decoration login_decoration'/>
                    <Link to="/" className="logout_button">Strona główna</Link>
                </div>
            </div>
        </>
    )
}