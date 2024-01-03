import React, { useState } from 'react';
import '../pages/login.css'
import userIcon from '../images/person.png'
import emailIcon from '../images/email.png';
import passwordIcon from '../images/password.png';
import { useNavigate } from 'react-router-dom';

const Lab_log = () => {
  const navigate = useNavigate();
  const fornext = () => {
    navigate("/");
  };
    const  [action,setAction]=useState("Login");
      const [firstName, setFirstName] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
function validateForm() {

  // if (firstName.length == 0) {
  //   alert('Invalid Form, First Name can not be empty')
  //   return
  // }


  if (email.length == 0) {
    alert('Invalid Form, Email Address can not be empty')
    return
  }

  if (password.length < 8) {
    alert(
      'Invalid Form, Password must contain greater than or equal to 8 characters.',
    )
    return
  }

  let countUpperCase = 0
  let countLowerCase = 0
  let countDigit = 0
  let countSpecialCharacters = 0

  for (let i = 0; i < password.length; i++) {
    const specialChars = [
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '_',
      '-',
      '+',
      '=',
      '[',
      '{',
      ']',
      '}',
      ':',
      ';',
      '<',
      '>',
    ]

    if (specialChars.includes(password[i])) {
      countSpecialCharacters++
    } else if (!isNaN(password[i] * 1)) {
      countDigit++
    } else {
      if (password[i] == password[i].toUpperCase()) {
        countUpperCase++
      }
      if (password[i] == password[i].toLowerCase()) {
        countLowerCase++
      }
    }
  }

  if (countLowerCase == 0) {
    alert('Invalid Form, 0 lower case characters in password')
    return
  }

  if (countUpperCase == 0) {
    alert('Invalid Form, 0 upper case characters in password')
    return
  }

  if (countDigit == 0) {
    // invalid form, 0 digit characters
    alert('Invalid Form, 0 digit characters in password')
    return
  }

  if (countSpecialCharacters == 0) {
    alert('Invalid Form, 0 special characters in password')
    return
  }


  alert('Form is valid')
}
    return (
      <div className='container'>
        <div className="header">
          <div className="text"> {action} </div>
          <div className="underline"></div>
        </div>
        <div className="inputs"  onClick={()=>validateForm()}>
          {action==="Login"?<div></div>: <div className="input">
            <img src={userIcon} alt=""width='30px' />
            <input type="text" placeholder="Enter Your Name"
                        onChange={(e) => setFirstName(e.target.value)}

            />
          </div>}
         
          <div className="input"  onClick={()=>validateForm()}>
            <img src={emailIcon} alt="" width='30px' />
            <input type="email"placeholder="Enter Your Email"
                        onChange={(e) => setEmail(e.target.value)}

             />

          </div>
          <div className="input"  onClick={()=>validateForm()}>
            <img src={passwordIcon} alt="" width='30px' />
            <input type="password"placeholder="Enter Your Password" 
                        onChange={(e) => setPassword(e.target.value)}

            />

          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-passowrd">Forgot Password? <span>Click Here!</span></div>
  }
        <div className="submit-container" onClick={fornext}>
  
        <div className={action==="Sign Up"?"submit gray":"submit"} >Log in</div>        


  </div>
      </div>
    )}
 
export default Lab_log;

