import React, { useState } from 'react';
import Dashboard from '../dashboard/HomeDash';
import emailIcon from '../images/email.png';
import passwordIcon from '../images/password.png';
import '../pages/login.css'

const UserData = ({ loginData }) => {
 
  return (
    <div className="user-data" >
      <h2>User Information</h2>
      <p>Email: {loginData.email}</p>


    </div>
  );
};

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginData, setLoginData] = useState(null);
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
    
  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate login process here
    if (email === email && password ===password) {
      const loginData = {
        email: email,
      };
      setLoginData(loginData);
    } else {
      alert('Invalid credentials');
    }
    
  };

  return (
    <div className="login-page">

      <form onSubmit={handleSubmit}>
        <div className="input" onClick={()=>validateForm()}>
            <img src={emailIcon} alt="" width='30px' />
            <input type="email"placeholder="Enter Your Email"
                        onChange={(e) => setEmail(e.target.value)}

             />

          </div>
          <div className="input" onClick={()=>validateForm()}>
            <img src={passwordIcon} alt="" width='30px' />
            <input type="password"placeholder="Enter Your Password" 
                        onChange={(e) => setPassword(e.target.value)}

            />

          </div>
          <div className="submit-container" >
  

  <button type="submit">Login</button>

</div>
      </form>

      {loginData && (
        <div>
          <Dashboard />
          <UserData loginData={loginData} />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
