import decoration from "../assets/Decoration.svg";
import supabase from "../services/supabase.js";
import {useState,useEffect} from "react";


export default function Organizations() {
    const [selectedCategory, setSelectedCategory] = useState('fundacje');
    const [data, setData] = useState({
        fundacje: [],
        organizacje: [],
        lokalneZbiorki: [],
    });

    const getData = async () => {
        try {
            const {data,error} = await supabase.from('fundacje').select('*');
            if (error) {
                console.log(error)
                throw error;
            }
            data && setData(prevState => ({...prevState, fundacje:data}));

        } catch (error){
            console.error('Something went wrong', error);
        }
        try {
            const {data,error} = await supabase.from('organizacje').select('*');
            if (error) {
                console.log(error)
                throw error;
            }
            data && setData(prevState => ({...prevState, organizacje:data}));

        } catch (error){
            console.error('Something went wrong', error);
        }

        try {
            const {data,error} = await supabase.from('zbiorki').select('*');
            if (error) {
                console.log(error)
                throw error;
            }
            data && setData(prevState => ({...prevState, lokalneZbiorki:data}));

        } catch (error){
            console.error('Something went wrong', error);
        }
    }

    useEffect(()=>{
        getData()
    },[])


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