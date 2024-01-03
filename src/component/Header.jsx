/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';





export const Header = () => {
  const navigate = useNavigate();
  const [selectedLogin, setSelectedLogin] = useState('');
  const [selectedRegister, setSelectedRegister] = useState('');

  const handleLoginChange = (event) => {
    setSelectedLogin(event.target.value);
  };

  const handleRegisterChange = (event) => {
    setSelectedRegister(event.target.value);
  };

  const handleLogin = () => {
    if (selectedLogin === 'Doctor') {
      navigate('/Doc_log');
    } else if (selectedLogin === 'Lab') {
      navigate('/Lab_log');
    } else if (selectedLogin === 'Pharmacy') {
      navigate('/Pharmacy_log');
    } else if (selectedLogin === 'patient') {
      navigate('/Patient_log');
    }
  };

  const handleRegister = () => {
    if (selectedRegister === 'Doctor') {
      navigate('/Doc_SignUp');
    } else if (selectedRegister === 'Lab') {
      navigate('/Lab_SignUp');
    } else if (selectedRegister === 'Pharmacy') {
      navigate('/Pharmacy_SignUp');
    } else if (selectedRegister === 'patient') {
      navigate('/Patient_SignUp');
    }
  };

  // const navigate = useNavigate();
  // const logpat = () => {
  //   navigate("/Patient_log ");
  // };
  // const loglab = () => {
  //   navigate("/Lab_log");
  // };
  // const logpharm = () => {
  //   navigate("/Pharmacy_log");
  // };
  // const logdoc = () => {
  //   navigate("/Doc_log");
  // };
  // const signpat = () => {
  //   navigate("/Patient_SignUp");
  // };
  // const signlab = () => {
  //   navigate("/Lab_SignUp");
  // };
  // const signpharm = () => {
  //   navigate("/Pharmacy_SignUp");
  // };
  // const signdoc = () => {
  //   navigate("/Doc_SignUp");
  // };
  return (

    <div id='header_container'>
      <div className='text-left text-dark ' style={{ paddingTop: "140px", paddingLeft: "100px", fontFamily: "Pacifico" }}>
        <h1 style={{ fontSize: "80px", color: "#5353d7" }}>Welcome</h1>
        <br></br>
        <h3>“For he who has health has hope;
          <br></br>
          and he who has hope, has everything.” </h3>
        <br></br>


        <h5>
          “Public health is a powerful tool to level that playing field,
          <br></br>
          to bend the arc of our country away from distrust
          <br></br>
          and disparities
          and back towards equity and justice.”
        </h5>
        <br></br>
    
      

       {/* <span style={{color:"#5353d7" ,}}>LogIn</span> 
       <select onChange={handleLogin} name="login" size="0" className="btn btn-primary dropdown-toggle m-2" data-bs-toggle="dropdown"  >
                        
                          <option value="Doctor"> Doctor</option>
                          <option value="Lab"> Lab</option>
                          <option value="Pharmacy"> Pharmacy</option>
                          <option value="patient" >patient</option>
                        
                        </select>
                
                       

                        <span style={{color:"#5353d7" ,}}>Register</span> 
                        <select onChange={handleRegister} name="register" size="0" className="btn btn-primary dropdown-toggle m-2" data-bs-toggle="dropdown" >
                          
                        <option value="Doctor"> <button >Doctor</button></option>
                          <option value="Lab"> <button >Lab</button></option>
                          <option value="Pharmacy"> <button >Pharmacy</button></option>
                          <option value="patient" ><button >patient</button></option>
                        </select> */}
       
      </div>
    
      <br></br><br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>

  );
};

export default Header;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const Header = () => {
//   const navigate = useNavigate();
//   const [selectedLogin, setSelectedLogin] = useState('');
//   const [selectedRegister, setSelectedRegister] = useState('');

//   const handleLoginChange = (event) => {
//     setSelectedLogin(event.target.value);
//   };

//   const handleRegisterChange = (event) => {
//     setSelectedRegister(event.target.value);
//   };

//   const handleLogin = () => {
//     if (selectedLogin === 'Doctor') {
//       navigate('/Doc_log');
//     } else if (selectedLogin === 'Lab') {
//       navigate('/Lab_log');
//     } else if (selectedLogin === 'Pharmacy') {
//       navigate('/Pharmacy_log');
//     } else if (selectedLogin === 'patient') {
//       navigate('/Patient_log');
//     }
//   };

//   const handleRegister = () => {
//     if (selectedRegister === 'Doctor') {
//       navigate('/Doc_SignUp');
//     } else if (selectedRegister === 'Lab') {
//       navigate('/Lab_SignUp');
//     } else if (selectedRegister === 'Pharmacy') {
//       navigate('/Pharmacy_SignUp');
//     } else if (selectedRegister === 'patient') {
//       navigate('/Patient_SignUp');
//     }
//   };

//   return (
//     <div id='header_container'>
//       <div className='text-left text-dark ' style={{ paddingTop: '140px', paddingLeft: '100px', fontFamily: 'Pacifico' }}>
//         {/* ... */}
//         <span style={{ color: '#5353d7' }}>LogIn</span>
//         <select name='login' className='btn btn-primary dropdown-toggle m-2' onChange={handleLoginChange}>
//           <option value='' disabled selected>Select an option</option>
//           <option value='Doctor'>Doctor</option>
//           <option value='Lab'>Lab</option>
//           <option value='Pharmacy'>Pharmacy</option>
//           <option value='patient'>Patient</option>
//         </select>

//         {/* ... */}

//         <span style={{ color: '#5353d7' }}>Register</span>
//         <select name='register' className='btn btn-primary dropdown-toggle m-2' onChange={handleRegisterChange}>
//           <option value='' disabled selected>Select an option</option>
//           <option value='Doctor'>Doctor</option>
//           <option value='Lab'>Lab</option>
//           <option value='Pharmacy'>Pharmacy</option>
//           <option value='patient'>Patient</option>
//         </select>
//       </div>
//       {/* ... */}
//     </div>
//   );
// };

// export default Header;