import React from 'react';
import './Home.css';
import background_black from '../Assets/Background_black.webp';
import Sculture_image from '../Assets/Escultura-min.webp';
import facebook from '../Assets/Facebook-min.webp';
import tiktok from '../Assets/Tiktok-min.webp';
import instagram from '../Assets/Instagram-min.webp';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  return (
    <div> 
    <Layout showMenu={true} showLogo={true} /> 
      <img className="background_black" src={background_black} alt="Background Black" /> 
        <div className='Sculture_container'>
            <img className="Sculture_image" src={Sculture_image} alt='Sculture image' />
        </div>
        <div className='footer_container'>
                <ul className='rrss_list'>
                <div className='button_contact'>
                    <li>  <Link  className='button_contact_text' to="/contact"> <strong>Contáctanos</strong> </Link></li>
                </div>
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
}

export default Home;
