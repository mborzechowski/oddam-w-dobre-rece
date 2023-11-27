import {useEffect, useState} from "react";
import decoration from "../assets/Decoration.svg"

export default function Inquiry() {
    const [currentPage, setCurrentPage] = useState(2);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return (
                    <div>
                        <div>
                            <h2>Ważne!</h2>
                            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej
                                je przekazać.</p>
                        </div>
                        <div>
                            <span>Krok 1/4</span>
                            <div>
                                <p>Zaznacz co chcesz oddać:</p>
                                <label htmlFor=""><input type="checkbox"/>ubrania, które nadają się do ponownego użycia</label>
                                <label htmlFor=""><input type="checkbox"/>ubrania, do wyrzucenia</label>
                                <label htmlFor=""><input type="checkbox"/>zabawki</label>
                                <label htmlFor=""><input type="checkbox"/>książki</label>
                                <label htmlFor=""><input type="checkbox"/>Inne</label>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div>
                            <h2>Ważne!</h2>
                            <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie
                                spakować rzeczy znajdziesz TUTAJ.</p>
                        </div>
                        <div>
                            <span>Krok 2/4</span>
                            <div>
                                <p>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
                                <div>
                                    <p>Liczba 60l worków:</p>
                                    <select name="bags" id="bags">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <div>
                            <h2>Ważne!</h2>
                            <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz
                                też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                        </div>
                        <div>
                            <span>Krok 3/4</span>
                            <div>
                                <p>Lokalizacja:</p>
                                <select name="localization" id="localization">
                                    <option value="Poznań">Poznań</option>
                                    <option value="Warszawa">Warszawa</option>
                                    <option value="Kraków">Kraków</option>
                                    <option value="Wrocław">Wrocław</option>
                                    <option value="Katowice">Katowice</option>
                                </select>
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
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <div>
                            <h2>Ważne!</h2>
                            <p>Podaj adres oraz termin odbioru rzeczy.</p>
                        </div>
                        <div>
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
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div>
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
                    </div>
                );
            case 6:
                return (
                    <>
                        <div>
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
            <div>
                {currentPage > 1 && (
                    <button onClick={handlePrevPage}>Wstecz</button>
                )}
                {currentPage < 5 ? (
                    <button onClick={handleNextPage}>Dalej</button>
                ) : (
                    <button disabled={true}>Następna strona</button>
                )}
            </div>
        </>
    )
}