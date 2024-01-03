import React, { useState } from 'react';
import './footer.css'
import faceBookImage from '../component/assets/facebook.png';
import twitterImage from '../component/assets/twitter.png';
import googleImage from '../component/assets/google.png';
import instagramImage from '../component/assets/instagram.jpg';
import linkedinImage from '../component/assets/linkedin.png';
import arrowTopImage from '../images/arrowTop.png';


const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div class="container my-5" id='contact'>
        <section class="d-flex justify-content-between p-4 text-white" >
          <div class="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" class="text-white me-4">
              <img src={faceBookImage} width='20px' /> 
            </a>
           <a href="" class="text-white me-4" >
            <img src={twitterImage} width='30px' /> 
            </a>
            <a href="" class="text-white me-4">
            <img src={googleImage} width='50px' /> 
            </a>
            <a href="" class="text-white me-4">
            <img src={instagramImage} width='20px' /> 
                   </a>
            <a href="" class="text-white me-4">
            <img src={linkedinImage} width='20px' /> 
                 </a>
        
          </div>
         
        </section>

        <section class="section">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Company name</h6>
                <div className="underline"></div>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                 />
                 
                <p>
                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Products</h6>
                <div className="underline"></div>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                />
                <p>
                  <a href="#!" class="text-white">Doctor's</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Lab</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Pharmacy</a>
                </p>

               
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <div className="underline"></div>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                   />
                <p>
                  <a href="#!" class="text-white">Our Account</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Our GitHub</a>
                </p>
             
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <div className="underline"></div>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                   />
                <p><i class="fas fa-home mr-3"></i> egypt , Asyut</p>
                <p><i class="fas fa-envelope mr-3"></i> yallahelp@gmail.com</p>
                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              </div>
            </div>
          </div>
          <div class="text-center p-3"  >
            <p class="d-flex1"> Copy Right by © Yala Help</p>
        </div>
        </section>

        <div className='arrow'>
  <img src={arrowTopImage} width={'100px'} onClick={scrollToTop} />
</div>
      </div>
  )
}

export default Footer;