import decoration from "../assets/Decoration.svg";


export default function Organizations() {

    return (
        <div className="container organizations">
            <div className="organizations_header">
                <h2 className="organizations_header_title">Komu pomagamy?</h2>
                <img src={decoration} alt="decoration" className='homepage_center_decoration'/>
                <div className="organizations_header_buttons">
                    <div className="organizations_header_buttons_single">Fundacjom</div>
                    <div className="organizations_header_buttons_single">Organizacjom pozarządowym</div>
                    <div className="organizations_header_buttons_single">Lokalnym zbiórkom</div>
                </div>
            </div>
        </div>
    )
}