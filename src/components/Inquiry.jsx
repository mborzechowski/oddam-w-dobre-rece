import {useEffect, useState} from "react";
import decoration from "../assets/Decoration.svg";
import arrowDown from "../assets/Icon-Arrow-Down.svg";
import arrowUp from '../assets/Icon-Arrow-Up.svg';

export default function Inquiry() {
    const [currentPage, setCurrentPage] = useState(1);
    const [checkboxStateStep1, setCheckboxStateStep1] = useState({
        reusableClothes: false,
        discardClothes: false,
        toys: false,
        books: false,
        other: false,
    });
    const [selectedBags, setSelectedBags] = useState(null);
    const [optionsMenu, setOptionsMenu] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice' ]
    const handleCheckboxChange = (name) => {
        setCheckboxStateStep1((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
        setOptionsMenu(false);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
        setOptionsMenu(false);
    };

    const toggleOptions = () => {
        setOptionsMenu(!optionsMenu)
    }

    const selectBags = (bag) => {
        setSelectedBags(bag)
        setOptionsMenu(!optionsMenu)
    }

    const selectCity = (city) =>{
        setOptionsMenu(!optionsMenu)
        setSelectedCity(city)
    }

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return (
                    <div className="container inquiry">
                        <div className='inquiry_header'>
                            <h2 className='inquiry_header_title'>Ważne!</h2>
                            <p className='inquiry_header_text'>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                                będziemy wiedzieć komu najlepiej
                                je przekazać.</p>
                        </div>
                        <div className='inquiry_main'>
                            <div className='inquiry_main_step'>Krok 1/4</div>
                            <h2 className='inquiry_main_title'>Zaznacz co chcesz oddać:</h2>
                            <div className='inquiry_main_step1'>
                                <div className='inquiry_main_step1_option'>
                                    <div
                                        onClick={() => handleCheckboxChange('reusableClothes')}
                                        className='inquiry_main_step1_checkbox'
                                        style={{
                                            backgroundColor: checkboxStateStep1.reusableClothes ? '#FAD648' : 'transparent'
                                        }}
                                    ></div>
                                    <span className='inquiry_main_step1_text'>ubrania, które nadają się do ponownego użycia</span>
                                </div>

                                <div className='inquiry_main_step1_option'>
                                    <div
                                        onClick={() => handleCheckboxChange('discardClothes')}
                                        className='inquiry_main_step1_checkbox'
                                        style={{
                                            backgroundColor: checkboxStateStep1.discardClothes ? '#FAD648' : 'transparent'
                                        }}
                                    ></div>
                                    <span className='inquiry_main_step1_text'>ubrania, do wyrzucenia</span>
                                </div>

                                <div className='inquiry_main_step1_option'>
                                    <div
                                        onClick={() => handleCheckboxChange('toys')}
                                        className='inquiry_main_step1_checkbox'
                                        style={{
                                            backgroundColor: checkboxStateStep1.toys ? '#FAD648' : 'transparent'
                                        }}
                                    ></div>
                                    <span className='inquiry_main_step1_text'>zabawki</span>
                                </div>

                                <div className='inquiry_main_step1_option'>
                                    <div
                                        onClick={() => handleCheckboxChange('books')}
                                        className='inquiry_main_step1_checkbox'
                                        style={{
                                            backgroundColor: checkboxStateStep1.books ? '#FAD648' : 'transparent'
                                        }}
                                    ></div>
                                    <span className='inquiry_main_step1_text'>książki</span>
                                </div>

                                <div className='inquiry_main_step1_option'>
                                    <div
                                        onClick={() => handleCheckboxChange('other')}
                                        className='inquiry_main_step1_checkbox'
                                        style={{
                                            backgroundColor: checkboxStateStep1.other ? '#FAD648' : 'transparent'
                                        }}
                                    ></div>
                                    <span className='inquiry_main_step1_text'>Inne</span>
                                </div>

                            </div>
                            <div className='inquiry_buttons'>
                                <button className='inquiry_buttons_single' onClick={handleNextPage}>Dalej</button>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="container inquiry">
                        <div className='inquiry_header'>
                            <h2 className='inquiry_header_title'>Ważne!</h2>
                            <p className='inquiry_header_text'>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
                                instrukcję jak poprawnie
                                spakować rzeczy znajdziesz TUTAJ.</p>
                        </div>
                        <div className='inquiry_main'>
                            <div className='inquiry_main_step'>Krok 2/4</div>
                            <h2 className='inquiry_main_title'>Podaj liczbę 60l worków, w które spakowałeś/aś
                                rzeczy:</h2>
                            <div className='inquiry_main_step2'>
                                <p className='inquiry_main_step2_title'>Liczba 60l worków:</p>
                                <div>
                                    <div className='inquiry_main_select' onClick={toggleOptions} style={{cursor:"pointer"}}>
                                        <p className='inquiry_main_select_placeholder'> {selectedBags ? selectedBags : ' — wybierz — '} </p>
                                        <div><img src={optionsMenu ? arrowUp : arrowDown} alt='arrow up' /></div>
                                    </div>
                                    <ul className={`inquiry_main_select_options ${optionsMenu === false ? 'hidden' : '' } `}>
                                        {[1,2,3,4,5].map((option) => (
                                            <li key={option} onClick={() => selectBags(option)} className='inquiry_main_select_single_option'>
                                                {option}
                                            </li>

                                        ))}

                                    </ul>

                                </div>
                            </div>

                            <div className='inquiry_buttons'>
                                <button className='inquiry_buttons_single' onClick={handlePrevPage}>Wstecz</button>
                                <button className='inquiry_buttons_single' onClick={handleNextPage}>Dalej</button>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="container inquiry">
                        <div className='inquiry_header'>
                            <h2 className='inquiry_header_title'>Ważne!</h2>
                            <p className='inquiry_header_text'>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej
                                organizacji w wyszukiwarce. Możesz
                                też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                        </div>
                        <div className='inquiry_main'>
                            <div className='inquiry_main_step'>Krok 3/4</div>
                            <div>
                                <p className='inquiry_main_title'>Lokalizacja:</p>
                                <div className='inquiry_main_select' onClick={toggleOptions} style={{cursor:"pointer"}}>
                                    <p className='inquiry_main_select_placeholder'> {selectedCity ? selectedCity : ' — wybierz — '} </p>
                                    <div><img src={optionsMenu ? arrowUp : arrowDown} alt='arrow up' /></div>
                                </div>
                                <ul className={`inquiry_main_select_cities ${optionsMenu === false ? 'hidden' : '' } `}>
                                    {cities.map((city) => (
                                        <li key={city} onClick={() => selectCity(city)} className='inquiry_main_select_single_city'>
                                            {city}
                                        </li>

                                    ))}

                                </ul>

                                <p>Komu chcesz pomóc?</p>
                                <div>
                                    <div>dzieciom</div>
                                    <div>samotnym matkom</div>
                                    <div>bezdomnym</div>
                                    <div>niepełnosprawnym</div>
                                    <div>osobom starszym</div>
                                </div>
                                <label htmlFor="">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                                <input type="text"/>
                            </div>
                            <div className='inquiry_buttons'>
                                <button className='inquiry_buttons_single' onClick={handlePrevPage}>Wstecz</button>
                                <button className='inquiry_buttons_single' onClick={handleNextPage}>Dalej</button>
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="container inquiry">
                        <div className='inquiry_header'>
                            <h2 className='inquiry_header_title'>Ważne!</h2>
                            <p className='inquiry_header_text'>Podaj adres oraz termin odbioru rzeczy.</p>
                        </div>
                        <div className='inquiry_main'>
                            <span>Krok 4/4</span>
                            <div>
                                <p>Podaj adres oraz termin odbioru rzecz przez kuriera</p>
                                <div>
                                    <div>
                                        <p>Adres odbioru:</p>
                                        <label htmlFor="">Ulica<input type="text"/></label>
                                        <label htmlFor="">Miasto<input type="text"/></label>
                                        <label htmlFor="">Kod pocztowy<input type="text"/></label>
                                        <label htmlFor="">Numer telefonu<input type="text"/></label>
                                    </div>
                                    <div>
                                        <p>Termin odbioru</p>
                                        <label htmlFor="">Data<input type="text"/></label>
                                        <label htmlFor="">Godzina<input type="text"/></label>
                                        <label htmlFor="">Uwagi dla kuriera<textarea name="" id="" cols="30"
                                                                                     rows="10"></textarea></label>
                                    </div>
                                </div>
                            </div>
                            <div className='inquiry_buttons'>
                                <button className='inquiry_buttons_single' onClick={handlePrevPage}>Wstecz</button>
                                <button className='inquiry_buttons_single' onClick={handleNextPage}>Dalej</button>
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="container inquiry inquiry_main">
                        <h2>Podsumowanie Twojej darowizny</h2>
                        <div>
                            <p>Oddajesz:</p>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p>Adres odbioru:</p>
                            <p>Ulica</p>
                            <p>Miasto</p>
                            <p>Kod pocztowy</p>
                            <p>Numer telefonu</p>
                        </div>
                        <div>
                            <p>Termin odbioru:</p>
                            <p>Data</p>
                            <p>Godzina</p>
                            <p>Uwagi dla kuriera</p>
                        </div>
                        <div className='inquiry_buttons'>
                            <button className='inquiry_buttons_single' onClick={handlePrevPage}>Wstecz</button>
                            <button className='inquiry_buttons_single'>Potwierdzam</button>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <>
                        <div className="container inquiry inquiry_main">
                            Dziękujemy za przesłanie formularza <br/> Na maila prześlemy wszelkie <br/> informacje o
                            odbiorze.
                        </div>
                        <img src={decoration} alt="decoration" className='homepage_center_decoration'/>
                    </>
                )
        }
    }

    return (
        <>
            {renderPage()}
        </>
    )
}