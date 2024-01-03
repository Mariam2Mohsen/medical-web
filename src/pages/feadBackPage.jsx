import React, { useState } from 'react'
import homeIcon from '../images/home.png';
import locationIcon from '../images/location.jpg';
import emailIcon from '../images/email.png';
import followIcon from '../images/follow.png';
import twitterIcon from '../images/twitter.png';
import linkedinIcon from '../images/linkedin.png';
import instagramIcon from '../images/instagram.jpg';
import '../pages/FeadBack.css';
import { Link } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';

const FeadBackData = () => {
   const navigate = useNavigate();
  const fornext = () => {
    navigate("/AppChat");
  };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');
    const [message, setMessage] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeEmail = (event) => {
        setEmail(event.target.value);
    };

    const changePhone = (event) => {
        setPhone(event.target.value);
    };

    const changeDepartment = (event) => {
        setDepartment(event.target.value);
    };

    const changeMessage = (event) => {
        setMessage(event.target.value);
    };

    const FormHandler = (event) => {
        event.preventDefault();

        const feedbackData = {
            name,
            email,
            phone,
            department,
            message
        };

        console.log(feedbackData);

        setName('');
        setEmail('');
        setPhone('');
        setDepartment('');
        setMessage('');
    };
    return (
        <section className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <h2>SEND AN INQUIRY</h2>
                        <li>
                            <Link onClick={fornext}>
                                <img src={homeIcon} alt="" width='25px' />
                                <b>Home</b>
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
            <section className='contact-us'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <form onSubmit={FormHandler}>
                                <div className='form-control'>
                                    <input
                                        placeholder='Enter Your Name'
                                        type='text'
                                        value={name}
                                        onChange={changeName}
                                    />
                                </div>
                                <div className='form-control'>
                                    <input
                                        placeholder='Enter Your Email'
                                        type='email'
                                        value={email}
                                        onChange={changeEmail}
                                    />
                                </div>
                                <div className='form-control'>
                                    <input
                                        placeholder='Enter Your Phone'
                                        type='phone'
                                        value={phone}
                                        onChange={changePhone}
                                    />
                                </div>
                                <select value={department} onChange={changeDepartment}>
                                    <option selected>Doctors</option>
                                    <option>Lab</option>
                                    <option>Pharmacy</option>
                                </select>
                                <div className='form-control'>
                                    <textarea
                                        placeholder='Message'
                                        value={message}
                                        onChange={changeMessage}
                                    ></textarea>
                                </div>
                                <button type="submit" onClick={fornext} >Submit</button>                            </form>

                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='side'>
                                <div className='overlay'>
                                    <h3>Contact Us For Any Informations</h3>
                                    <li>
                                        <img src={locationIcon} alt="" width='25px' />
                                        <b>Location</b>
                                    </li>
                                    <hr />
                                    <p>EGYPT,ASYUT</p>
                                    <li className='li'>
                                        <img src={emailIcon} alt="" width='25px' />
                                        <span>
                                            <b>Email</b>
                                        </span>
                                    </li>
                                    <hr />
                                    <h4>Yalla Help@gmail.com </h4>
                                    <h4>01001234567</h4>
                                    <li className='li'>
                                        <img src={followIcon} alt="" width='25px' />
                                        <b>Follow Us</b> </li>
                                    <ul>
                                        <li><img src={twitterIcon} alt="" width='25px' /></li>
                                        <li><img src={linkedinIcon} alt="" width='25px' /></li>
                                        <li><img src={instagramIcon} alt="" width='25px' /></li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>


    )
}
export default FeadBackData;