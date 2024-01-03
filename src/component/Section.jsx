/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import './design.css'

import { useNavigate } from 'react-router-dom';


const Section = () => {
  const navigate = useNavigate();
  const handleNeur = () => {
    navigate("/neurology");
  };
  const handleOpth = () => {
    navigate("/ophthalmology");
  };
  const handlDerm = () => {
    navigate("/Dermatology");
  };
  const handlGas = () => {
    navigate("/Gastroenterology");
  };
  const handlPed = () => {
    navigate("/Pediatrics");
  };
  const handlNeph = () => {
    navigate("/Nephrology");
  };
  const handlCard = () => {
    navigate("/Cardiology");
  };
  const handlGen = () => {
    navigate("/Gynecology");
  };
  const handlOral = () => {
    navigate("/Oral_dental");
  };

  return (
    <React.Fragment>

      <div className="container_gallary text-center">
        {/* <h1 class="text-center " ></h1> */}
        <div className='row '>
          <div className='gallary col-sm-12 col-lg-4 align-self-start'>
            <img className='my_photo  m-2 rounded'
              src="https://img.freepik.com/free-photo/abstract-glowing-blue-brain-with-color-lines_587448-4813.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="" />
            <br></br>
            <button type="button" className="btn btn-primary btn-lg p-0" onClick={handleNeur} >
              Neurology
            </button>
          </div>

          <div>
            <div className='gallary col-sm-12 col-lg-4 align-self-center align-self-end'>
              <img className='my_photo  m-2 rounded'
                src="https://img.freepik.com/free-photo/retinal-biometrics-technology-with-man-s-eye-digital-remix_53876-108518.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
                alt="" />
              <br></br>
              <button type="button" className="btn btn-primary btn-lg p-0" onClick={handleOpth}>
                Ophthalmology
              </button>
            </div>


          </div>
          <br></br>
          <div className='gallary col-sm-12 col-lg-4'>

            <img className='my_photo  m-2 rounded'
              src="https://img.freepik.com/free-photo/young-beautiful-girl-lies-beautician-s-table-receives-procedures_343596-4231.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="" />
            <button type="button" className="btn btn-primary btn-lg p-0" onClick={handlDerm} >
              Dermatology
            </button>
          </div>
        </div>
        <br /><br /><br />
        <div >
          <div className='gallary col-sm-12 col-lg-4'>
            <img className='my_photo  m-2 rounded'
              src="https://img.freepik.com/premium-photo/bowel-holographic-projection-scan-with-vital-signs-medical-data_99433-5659.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="" />
            <br></br>
            <button type="button" className="btn btn-primary btn-lg p-0" onClick={handlGas}>
              Gastroenterology
            </button>
          </div>
          <br></br>
          <div>
            <div className="row">
              <div className='gallary col-sm-12 col-lg-4 ' >

                <img className='my_photo  m-2 rounded'
                  src="https://img.freepik.com/free-photo/doctor-holding-cute-baby-front-view_23-2149728885.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
                  alt="" />
                <button type="button" className="btn btn-primary btn-lg mx-5" onClick={handlPed}>
                  Pediatrics
                </button>
                <br></br>

              </div>
            </div>


          </div>
          <br></br>
          <div className='gallary col-sm-12 col-lg-4'>

            <img className='my_photo  m-2 rounded'
              src="https://img.freepik.com/premium-photo/doctor-looks-kidney-hologram-checks-test-result-virtual-interface-analyzes-data-kidney-disease-stones-innovative-technologies-medicine-future_99433-6534.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="" />
            <button type="button" className="btn btn-primary btn-lg mx-5" onClick={handlNeph}>
              Nephrology
            </button>
          </div>
        </div>
        <br /><br /><br />
        <div className='row align-items-start'>
          <div className='gallary col-sm-12 col-lg-4'>
            <img className='my_photo  m-2 rounded'
              src="https://img.freepik.com/premium-photo/man-s-hands-showing-anatomical-heart-model-mixed-media_641298-21724.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="" />
            <br></br>
            <button type="button" className="btn btn-primary btn-lg mx-5" onClick={handlCard}>
              Cardiology
            </button>
          </div>
          <br></br>
          <div>
            <div className='gallary col-sm-12 col-lg-4'>
              <img className='my_photo  m-2 rounded'
                src="https://img.freepik.com/premium-vector/gynecology-medicine-concept-women-s-health-doctor-holding-hand-hologram-female-reproductive-system-medical-icons-network-connection-virtual-screen-vector-illustration_127544-2087.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
                alt="" />
              <br></br>
              <button type="button" className="btn btn-primary btn-lg mx-5" onClick={handlGen}>
                Gynecology
              </button>
            </div>


          </div>
          <br></br>
          <div className='gallary col-sm-12 col-lg-4'>

            <img className='my_photo  m-2 rounded'
              src="https://img.freepik.com/free-photo/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-10421.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=ais"
              alt="" />
            <button type="button" className="btn btn-primary btn-lg mx-5" onClick={handlOral} >
              Oral & Dental
            </button>
          </div>
        </div>




      </div>

    </React.Fragment>
  );
}

export default Section;