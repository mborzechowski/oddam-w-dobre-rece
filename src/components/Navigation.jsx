import {Link} from "react-router-dom";

export default function Navigation(){
    const setPath = (path) =>{
        localStorage.setItem('path', path)
    }

    return (
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
    )
}