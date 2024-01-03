/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import'./mydesign.css'
import"./all.css"
import"./hospitalPage.css"
import Footer from '../component/footer';


import trueImage from '../images/true.png';
import starImage from '../images/star.png';
import { useNavigate } from 'react-router-dom';
const LabPage = () => {
    const navigate = useNavigate();
  const fornext = () => {
    // navigate("/FeadBackData");
    navigate("/AppChat");
  };

    return (
         <>

<div className='myflex'>
<div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/doctor-performing-medical-research-lab_23-2149335726.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Al-Shorouk Medical Analysis Laboratory</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Experts laboratory</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/close-up-blurry-scientist-working-with-glass-slide_23-2148882101.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Nile Laboratory for Medical Analysis</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/biotechnology-specialist-laboratory-conducting-experiments_23-2150468704.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Denture Tech Laboratory</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/experiment-biotechnology-with-chemistry-science_23-2150365029.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Cam Dental Lab </h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/lab-technician-mask-examines-test-tubes-utilizes-microscope-analysis_157027-2325.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>London Medical Laboratory</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/virolog-coducting-experiment-course-coronavirus-pandemic-with-micropipette-chemist-modern-laboratory-doing-research-using-dispenser-during-global-epidemic-with-covid-19_482257-5737.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Health Services Laboratories</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/woman-working-laboratory-portrait_23-2148824195.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Halo Laboratories</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/experiment-biotechnology-with-chemistry-science_23-2150365009.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Direct Laboratory Services</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/doctor-holding-blood-test-tube_53876-94745.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Impulse Dental Laboratory</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/coronavirus-blood-samples-arrangement-lab_23-2149107259.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Underground Science Lab </h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/team-scientists-analyzing-liquid-modern-laboratory-with-equipment-generated-by-ai_24640-99961.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>DentalBiochemical</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-vector/vector-black-metal-optical-microscope-with-flasks-full-green-blue-liquid-chemical-compounds-isolated-background_1284-48424.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>Tower coefficient</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/coronavirus-vaccine-composition-lab_23-2148920820.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>The Based Serologic Chronicles</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/free-vector/flat-biotechnology-concept-with-scientist_52683-59401.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>The Metallurgical Chemist Chronicles</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="header"></div>
          <div className="img">
            <img
              src="https://img.freepik.com/premium-photo/examination-sample-microscope-laboratory_222464-4.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>National Chemist International</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available 24 hours</b>
    </h2>
  </div>
  <br />
  <div class='starImage'>
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
    <img src={starImage} />
  </div>
            
          </div>
        </div>
        <div className="flip-card-back">
          <br />
          <div><i class="fa-solid fa-location-dot fa-2xl"></i> Manfalut, Manfalut Center, Assiut </div>
          <div><i class="fa-duotone fa-phone fa-2xl"></i>011 21705930</div>
          
          <button onClick={fornext} class="btn btn-info">
      Send Your Questions
    </button>
        </div>
      </div>
    </div>


    </div>












   <Footer/>
    </> );
}
 
export default LabPage;