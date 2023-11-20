import MainSection from './MainSection.jsx'
import Statistics from './Statistics.jsx'
import Explanation from './Explanation.jsx';
import AboutUs from './AboutUs.jsx'
import Contact from "./Contact.jsx";
import Organizations from "./Organizations.jsx";
import {Element} from 'react-scroll';

export default function HomePage() {

    return (
        <div className='home_page'>
            <Element name="start"><MainSection/></Element>
            <Statistics/>
            <Element name="o-co-chodzi"><Explanation/></Element>
            <Element name="o-nas"><AboutUs/></Element>
            <Element name="fundacje"><Organizations/></Element>
            <Element name="kontakt"><Contact/></Element>
        </div>
    )
}