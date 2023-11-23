import decoration from "../assets/Decoration.svg";
import supabase from "../services/supabase.js";
import {useState} from "react";

export default function Organizations() {
    const [selectedCategory, setSelectedCategory] = useState('fundacje');

    const data = {
        fundacje: [
            { id: 1, nazwa: 'Fundacja 1', opis: 'Opis fundacji 1', cechy: 'Egestas, sed, tempus'},
            { id: 2, nazwa: 'Fundacja 2', opis: 'Opis fundacji 2', cechy: 'Egestas, sed, tempus' },
            { id: 3, nazwa: 'Fundacja 3', opis: 'Opis fundacji 3', cechy: 'Egestas, sed, tempus' },
            { id: 4, nazwa: 'Fundacja 4', opis: 'Opis fundacji 4', cechy: 'Egestas, sed, tempus' },
            { id: 5, nazwa: 'Fundacja 5', opis: 'Opis fundacji 5', cechy: 'Egestas, sed, tempus' },
            { id: 6, nazwa: 'Fundacja 6', opis: 'Opis fundacji 6', cechy: 'Egestas, sed, tempus' },
            { id: 7, nazwa: 'Fundacja 7', opis: 'Opis fundacji 7', cechy: 'Egestas, sed, tempus' },
            { id: 8, nazwa: 'Fundacja 8', opis: 'Opis fundacji 8', cechy: 'Egestas, sed, tempus'},
        ],
        organizacje: [
            { id: 9, nazwa: 'Organizacja 1', opis: 'Opis organizacji 1', cechy: 'Egestas, sed, tempus' },
            { id: 10, nazwa: 'Organizacja 2', opis: 'Opis organizacji 2', cechy: 'Egestas, sed, tempus' },
        ],
        lokalneZbiorki: [
            { id: 11, nazwa: 'Lokalna zbiórka 1', opis: 'Opis lokalnej zbiórki 1', cechy: 'Egestas, sed, tempus' },
            { id: 12, nazwa: 'Lokalna zbiórka 2', opis: 'Opis lokalnej zbiórki 2', cechy: 'Egestas, sed, tempus' },
            { id: 13, nazwa: 'Lokalna zbiórka 3', opis: 'Opis lokalnej zbiórki 3', cechy: 'Egestas, sed, tempus' },
        ],
    };

    const ListOfOrganizations = ({ category }) => {
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 3;

        const totalItems = data[category].length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        const paginatedData = data[category].slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );

        const numberOfPages = Array.from({length: totalPages}, (_,index) => index + 1);
        const changePage = (pageNumber) => {
            setCurrentPage(pageNumber);
        };

        return (
            <>
            <div className="organizations_summary">
                {selectedCategory === 'fundacje' && 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.'}
                {selectedCategory === 'organizacje' && 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'}
                {selectedCategory === 'lokalneZbiorki' && 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'}
            </div>
                <div>
                {paginatedData.map((item) =>(
                    <div key={item.id} className='organizations_list_item'>
                        <div>
                            <h3 className='organizations_list_item_title'>{item.nazwa}</h3>
                            <p className='organizations_list_item_descryption'>{item.opis}</p>
                        </div>
                        <div>
                            {item.cechy}
                        </div>

                    </div>
                ))}
                </div>
                <div className='organizations_list_pagination'>
                {totalPages > 1 && numberOfPages.map((pageNumber) =>(
                    <div key={pageNumber} className='organizations_list_page' onClick={()=>changePage(pageNumber)}>
                        {pageNumber}
                    </div>
                ))}
                </div>
            </>
        )
    }


    return (
        <div className="container organizations">
            <div className="organizations_header">
                <h2 className="organizations_header_title">Komu pomagamy?</h2>
                <img src={decoration} alt="decoration" className='homepage_center_decoration'/>
                <div className="organizations_header_buttons">
                    <div className="organizations_header_buttons_single" onClick={() => setSelectedCategory('fundacje')}>Fundacjom</div>
                    <div className="organizations_header_buttons_single" onClick={() => setSelectedCategory('organizacje')}>Organizacjom pozarządowym</div>
                    <div className="organizations_header_buttons_single" onClick={() => setSelectedCategory('lokalneZbiorki')}>Lokalnym zbiórkom</div>
                </div>
                <ListOfOrganizations category={selectedCategory}/>
            </div>
        </div>
    )
}