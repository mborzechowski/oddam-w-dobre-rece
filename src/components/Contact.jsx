import {Element} from 'react-scroll';
import decoration from "../assets/Decoration.svg";
import FB from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg"

export default function Contact() {
    return (
        <Element name='kontakt'>
            <div className='container contact'>
                <h2 className='contact_title'>Skontaktuj się z nami</h2>
                <img src={decoration} alt="decoration" className='contact_decoration'/>
                <form className='contact_form'>
                    <div className='contact_form_first_row'>
                    <div className='contact_form_question'>
                        <label htmlFor="name" className='contact_form_label'>Wpisz swoje imię</label>
                        <input className='contact_form_small_input' type="text" id="name" name="name" placeholder='Krzysztof' required/>
                    </div>
                    <div className='contact_form_question'>
                        <label htmlFor="email" className='contact_form_label'>Wpisz swój email</label>
                        <input className='contact_form_small_input' type="email" id="email" name="email" placeholder='abc@xyz.pl' required/>
                    </div>
                    </div>
                    <label htmlFor="message" className='contact_form_label'>Wpisz swoją wiadomość</label>
                    <textarea className='contact_form_textarea' name="message" id="message" cols="30" rows="10" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'></textarea>
                    <button className='contact_form_button'>Wyślij</button>
                </form>
                <div className='contact_footer'><p className='contact_footer_text'>Copyright by Coders Lab</p><div className='contact_footer_icons'><img src={FB} alt="Facebook icon"/>
                    <img src={Instagram} alt=""/></div></div>
            </div>
        </Element>
)
}