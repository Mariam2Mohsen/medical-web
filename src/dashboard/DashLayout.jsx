/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom';
const DashLayout = () => {
    return (  <>
    <div className='container'>
        <div className='row'>
            <div className='col-3'>
               
            <ul>
     <li>
       <a href="/dashboard/doctorapp">Doctor</a>
     </li>
     <li>
       <a href="/dashboard/patient">patient</a>
     </li>
    
   </ul>
            </div>
            <div className='col-1'>
                <Outlet/>

            </div>

        </div>

    </div>
    </>);
}
 
export default DashLayout;