import home1 from '../../images/etc_pics/home1.jpg'
import home2 from '../../images/etc_pics/home2.jpg'
import home3 from '../../images/etc_pics/home3.jpg'
import home4 from '../../images/etc_pics/home4.jpg'

import './styles/home.css'

export default function Home(){
    return (

        <div className="container-home">
            <div className="left-container">
                <h1 className='left-home'>Vision to perfection, <br/> The best glass & aluminum installer.</h1>
                <p>Dealer. Fabricator. Estimator</p>
            </div>
            <div className="right-container">
                <div className='all-pictures'>
                <img src={home1} alt="Logo" className="home1-logo"/>
                <img src={home2} alt="Logo" className="home2-logo"/>
                <img src={home3} alt="Logo" className="home3-logo"/>
                <img src={home4} alt="Logo" className="home4-logo"/>
                </div>
            </div>

        </div>
    )
}