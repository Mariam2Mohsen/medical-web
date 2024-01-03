/* eslint-disable react/jsx-no-undef */
import React from "react";
import  "../component/design.css";
import Footer from "../component/footer";
import Section from "../component/Section";
import { Outlet } from 'react-router-dom';


const DoctorsPage = () => {
    return ( 
        <React.Fragment >
           <div className="doctor_page">

           
         <div className="new_header">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtHAtSUEEiKHqH0VjW4WG6Yl9oZluqadJeg&usqp=CAU" className="header_img"></img></div>
         <br /><br /><br />
           <Section/>
            
            <Footer/>

          
             <Outlet/>
             </div>
           
        </React.Fragment>
     );
}
 
export default DoctorsPage;