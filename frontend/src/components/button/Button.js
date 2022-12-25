import { GiKnockedOutStars, GiDeathStar } from 'react-icons/gi';
import '../button/Button.css';
import { Navbar } from 'react-bootstrap';

export default function ButtonTheme ({theme, changeTheme}) {
    return (
        // Button switch for theme change
            <Navbar className="button-container" expand="lg">                
                <div className='container-fluid button-comp' id='button-comp'>
                    <div className='theme-change' onClick={changeTheme}>
                {theme === "carbon"
                ?
                (<p className='space-theme-icon'><GiDeathStar size={30}/></p>)
                :
                (<p className='carbon-theme-icon'><GiKnockedOutStars size={30}/></p>)}
                    </div>
                </div>
            </Navbar>
    )
}