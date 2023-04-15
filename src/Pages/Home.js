import React from 'react';
import headerimg from '../Assets/doctor.7c2bc96d.png';
import './Home.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
const Home =  ()=>{
    return(
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                        <h4>We Provide All Health Care Solutions and life  policies</h4>
                        <h2>Protect Your Health And Take Care Of Your Health</h2>
                        <button><a href='#'>Read More</a></button>
                        <span>+</span>
                    </div>
                    <div className='col-lg-6 col-md-6 '>
                    <div className="header-box">
                        <img src={headerimg} />
                         <FontAwesomeIcon icon={faSquare}/>
                    </div>
                         
                    </div>
                 </div>
            </div>
        </header>
    )
}
export default Home;