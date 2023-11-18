import MainSection from './MainSection.jsx'
import Statistics from './Statistics.jsx'
import Explanation from './Explanation.jsx';
import AboutUs from './AboutUs.jsx'
import Contact from "./Contact.jsx";

export default function HomePage() {

    return (
        <div className='home_page'>
            <MainSection/>
            <Statistics/>
            <Explanation/>
            <AboutUs/>
            <Contact/>
        </div>
    )
}