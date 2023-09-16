import './Home.css';
import background_black from '../Assets/Background_black.webp';
import Sculture_image from '../Assets/Escultura-min.webp';

const Home = () => {
    return (
            <div>
                    <img className="background_black" src={background_black} alt="Background Black" /> 
                    <div className='Sculture_container' >
                        <img className="Sculture_image" src={Sculture_image} alt='Sculture image' />
                    </div>

            </div>
            
    )
}


export default Home;