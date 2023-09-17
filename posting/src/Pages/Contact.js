import './Contact.css';
import background_contact from'../Assets/Background_contact-min.webp'
import sculture_contact from '../Assets/Sculture_contact-min.webp'
import background_black from '../Assets/Background_black.webp';
import Sculture_image from '../Assets/Escultura-min.webp';
import facebook from '../Assets/Facebook-min.webp';
import tiktok from '../Assets/Tiktok-min.webp';
import instagram from '../Assets/Instagram-min.webp'
import Layout from './Layout';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
        <Layout showMenu={true} showLogo={true} /> 
          <img className="background_contact" src={background_contact} alt="Background Contact" /> 
            <div className='form_container'>
                <form className='form_'>
                    <label className='name' htmlFor="name"></label>
                        <input className='label_' type="text" id="nombre" name="nombre" required placeholder='Nombre ' />

                    <label className='phone' htmlFor="phone"> </label>
                        <input className='label_' type="text" id="phone" name="phone" required placeholder='Teléfono ' />

                    <label className='mail' htmlFor="mail"> </label>
                        <input className='label_' type="text" id="mail" name="mail" required placeholder='Correo electrónico'/>

                    <label className='message' htmlFor="message"> </label>
                        <input className='label_' type="text" id="message" name="message" required placeholder='Comentario' />
                        <Link to="/gratefull">
                            <button className='button_send' type="submit"> <strong>Enviar </strong> </button>
                        </Link>
                </form>
                <div className='Sculture_container_contact'>
                <img width='360px'  className="sculture_contact" src={sculture_contact} alt='Sculture contact' />
             </div>
            </div>
            <div className='footer_container container_contact'>
                <ul className='rrss_list'>
                <li className='facebook'>
                    <a href="https://www.facebook.com/postingccg?_rdc=1&_rdr" target='_blank'>
                    <img src={facebook} alt='facebook'className='rrss_img' />
                    </a>
                </li>
                <li className='instagram'>
                    <a href="https://www.instagram.com/posting_ccg_/" target='_blank'>
                    <img src={instagram} alt='instagram' className='rrss_img' />
                    </a>
                </li>
                <li className='instagram'>
                    <a href="https://www.tiktok.com/@posting_ccg" target='_blank'>
                    <img src={tiktok} alt='tiktok' className='rrss_img' />
                    </a>
                </li>
                </ul>
        </div>

        </div>
    );
};
export default Contact;