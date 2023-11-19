import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import shirtIcon from '../assets/Icon-1.svg';
import bagIcon from '../assets/Icon-2.svg';
import  mgGlassIcon from '../assets/Icon-3.svg';
import pickUpIcon from '../assets/Icon-4.svg';


export default function Explanation(){

return (
    <div className='container explanation'>
        <h2 className='explanation_title'>Wystarczą 4 proste kroki</h2>
        <img src={decoration} alt="decoration" className='explanation_decoration'/>
        <div className='explanation_items'>
            <div className='explanation_single_item'><img src={shirtIcon} alt="T-shirt" className='explanation_single_item_img'/><p className='explanation_single_item_title'>Wybierz rzeczy</p><p className='explanation_single_item_decoration'></p><p className='explanation_single_item_text'>ubrania, zabawki, sprzęt i inne</p></div>
            <div className='explanation_single_item'><img src={bagIcon} alt="Bag" className='explanation_single_item_img'/><p className='explanation_single_item_title'>Spakuj je</p><p className='explanation_single_item_decoration'></p><p className='explanation_single_item_text'>skorzystaj z worków na śmieci</p></div>
            <div className='explanation_single_item'><img src={mgGlassIcon} alt="Magnifying Glass" className='explanation_single_item_img'/><p className='explanation_single_item_title'>Zdecyduj komu chcesz pomóc</p><p className='explanation_single_item_decoration'></p><p className='explanation_single_item_text'>wybierz zaufane miejsce</p></div>
            <div className='explanation_single_item'><img src={pickUpIcon} alt="Recycle Icon" className='explanation_single_item_img'/><p className='explanation_single_item_title'>Zamów kuriera</p><p className='explanation_single_item_decoration'></p><p className='explanation_single_item_text'>kurier przyjedzie w dogodnym terminie</p></div>
        </div>
        <Link to='/login' className='homepage_center_buttons_one'>ODDAJ <br/>RZECZY</Link>
    </div>
)
}