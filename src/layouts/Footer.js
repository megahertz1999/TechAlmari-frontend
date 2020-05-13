import React from 'react';
import Image01 from '../img/instagram/Image01.jpg';
import Image02 from '../img/instagram/Image02.jpg';
import Image03 from '../img/instagram/Image03.jpg';
import Image04 from '../img/instagram/Image04.jpg';
import Image05 from '../img/instagram/Image05.jpg';
import Image06 from '../img/instagram/Image06.jpg';
import Image07 from '../img/instagram/Image07.jpg';
import Image08 from '../img/instagram/Image08.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      <footer className='footer-area section_gap'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h6 className='footer_title'>About Us</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h6 className='footer_title'>Newsletter</h6>
                <p>Stay updated with our latest trends</p>
                <div id='mc_embed_signup'>
                  <form
                    action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01'
                    method='get'
                    className='subscribe_form relative'
                  >
                    <div className='input-group d-flex flex-row'>
                      <input
                        name='EMAIL'
                        placeholder='Email Address'
                        required=''
                        type='email'
                      />
                      <button className='btn sub-btn'>
                        <span className='lnr lnr-arrow-right'></span>
                      </button>
                    </div>
                    <div className='mt-10 info'></div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-footer-widget instafeed'>
                <h6 className='footer_title'>Instagram Feed</h6>
                <ul className='list instafeed d-flex flex-wrap'>
                  <li>
                    <img src={Image01} alt='' />
                  </li>
                  <li>
                    <img src={Image02} alt='' />
                  </li>
                  <li>
                    <img src={Image03} alt='' />
                  </li>
                  <li>
                    <img src={Image04} alt='' />
                  </li>
                  <li>
                    <img src={Image05} alt='' />
                  </li>
                  <li>
                    <img src={Image06} alt='' />
                  </li>
                  <li>
                    <img src={Image07} alt='' />
                  </li>
                  <li>
                    <img src={Image08} alt='' />
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-6'>
              <div className='single-footer-widget f_social_wd'>
                <h6 className='footer_title'>Follow Us</h6>
                <p>Let us be social</p>
                <div className='f_social'>
                  <a href='#'>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href='#'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href='#'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href='#'>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row footer-bottom d-flex justify-content-between align-items-center'>
            <p className='col-lg-12 footer-text text-center'></p>
          </div>
        </div>
      </footer>
    </>
  );
}
