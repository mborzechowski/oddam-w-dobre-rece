import {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import FB from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    };

    const [formSent,setFormSent] = useState(false)

    const validateForm = () => {
        let valid = true;
        const newErrors = {...errors};

        if (!formData.name.trim()){
            valid = false;
            newErrors.name = 'Imię nie może być puste';
        } else if (!/^\S+$/.test(formData.name)) {
            valid = false;
            newErrors.name = 'Imię powinno być jednym wyrazem';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            valid = false;
            newErrors.email = 'Email nie może być pusty';
        } else if (!emailRegex.test(formData.email)) {
            valid = false;
            newErrors.email = 'Email powinien mieć postać: example@wp.pl';
        }
        if (formData.message.length < 120) {
            valid = false;
            newErrors.message = 'Wiadomość musi mieć co najmniej 120 znaków';
        }
        setErrors(newErrors);
        return valid;
    }
    const submitForm = async (event) => {
        event.preventDefault()
        if (!validateForm()) {
            return;
        }
        try {
            let response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)

            });

            if (!response.ok) {
                throw new Error(`Błąd HTTP! kod: ${response.status}`)
            }

            let data = await response.json()
            if (data.status === "success") {
                setFormSent(true)
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
            } else {
                alert(`Błąd serwera: ${data.errors}`)
                console.error("Błąd serwera:", data.errors);
            }

        } catch (error) {
            console.error("Błąd wysyłania żądania:", error.message);
        }
    }

    return (
        <div className='container contact'>
            <h2 className='contact_title'>Skontaktuj się z nami</h2>
            <img src={decoration} alt="decoration" className='contact_decoration'/>
            {formSent && <span className='success_msg'>Wiadomość została wysłana! <br/> wktórce się skontaktujemy.</span>}
            <form className='contact_form' onSubmit={(e) => submitForm(e)}>
                <div className='contact_form_first_row'>
                    <div className='contact_form_question'>
                        <label htmlFor="name" className='contact_form_label'>Wpisz swoje imię</label>
                        <input className={`contact_form_small_input ${errors.name ? 'error_border' : ''}`} type="text" id="name" name="name"
                               placeholder='Krzysztof' value={formData.name} onChange={handleChange}/>
                        {errors.name && <span className='error_message'>{errors.name}</span>}
                    </div>
                    <div className='contact_form_question'>
                        <label htmlFor="email" className='contact_form_label'>Wpisz swój email</label>
                        <input className={`contact_form_small_input ${errors.email ? 'error_border' : ''}`} type="email" id="email" name="email"
                               placeholder='abc@xyz.pl'  value={formData.email} onChange={handleChange}/>
                        {errors.email && <span className='error_message'>{errors.email}</span>}
                    </div>
                </div>
                <label htmlFor="message" className='contact_form_label'>Wpisz swoją wiadomość</label>
                <textarea className={`contact_form_textarea ${errors.message ? 'error_border' : ''}`} name="message" id="message" cols="30" rows="10"
                          placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                          value={formData.message} onChange={handleChange}></textarea>
                {errors.message && <span className='error_message'>{errors.message}</span>}
                <button type="submit" className='contact_form_button'>Wyślij</button>
            </form>
            <div className='contact_footer'><p className='contact_footer_text'>Copyright by Coders Lab</p>
                <div className='contact_footer_icons'><img src={FB} alt="Facebook icon"/>
                    <img src={Instagram} alt=""/></div>
            </div>
        </div>
    )
}