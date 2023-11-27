import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import Navigation from "./Navigation.jsx";
export default function Logout() {


    return (
        <>
            <div className='container main_section login'>
                <Navigation/>
                <div className="logout">
                    <h2 className="logout_title">Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                    <img src={decoration} alt="decoration" className='homepage_center_decoration login_decoration'/>
                    <Link to="/" className="logout_button">Strona główna</Link>
                </div>
            </div>
        </>
    )
}