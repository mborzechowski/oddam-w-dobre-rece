import decoration from "../assets/Decoration.svg";
import signature from '../assets/Signature.svg';
import peopleImg from '../assets/People.jpg';

export default function AboutUs(){
    return(
        <div className='container about_us'  >
            <div className='about_us_text_section'>
                <h2 className='about_us_title'>O nas</h2>
                <img src={decoration} alt="decoration" className='about_us_decoration'/>
                <p className='about_us_text'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className='about_us_signature'><img src={signature} alt="signature"/></div>
            </div>
            <div className='about_us_img'>
                <img src={peopleImg} alt="people smilling"/>
            </div>
        </div>
    )
}