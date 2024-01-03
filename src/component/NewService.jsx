/* eslint-disable no-restricted-globals */
// import React from 'react'
import './design.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// let movetodoctor=({ to, label })=> 
// return (
//     <Link to={to}>
//       <button>{label}</button>
//     </Link>
//   );
function NewService() {
    const navigate = useNavigate();
    const handledoctor = () => {
      navigate("/doctors");
    };
    const handlelab = () => {
        navigate("/lab");
      };
      const handlepharmacy = () => {
        navigate("/pharmacy");
      };

    const doctorImage = [
        { id: 1, src: 'https://t4.ftcdn.net/jpg/02/65/95/81/240_F_265958166_YTEL6wHpfxnPlN9nNYxL7UKHiOWCln59.jpg', alt: 'Image 1' },
        { id: 2, src: 'https://t3.ftcdn.net/jpg/02/67/69/48/240_F_267694804_CDG47weTSEzPb67X3SmvYmM3bpqSBFFE.jpg', alt: 'Image 2' },
        { id: 3, src: 'https://t3.ftcdn.net/jpg/02/94/42/80/240_F_294428065_KXyOKn2Vpg5yZcyRNw4dgNZN1G9U7V5I.jpg', alt: 'Image 3' },
    ];
    const labImage = [
        { id: 1, src: 'https://t3.ftcdn.net/jpg/02/01/60/64/240_F_201606422_GRUnyGJgZkxVwQ5ZGV25aFsR5eS3zAY6.jpg', alt: 'Image 1' },
        { id: 2, src: 'https://t3.ftcdn.net/jpg/01/65/71/76/240_F_165717604_4TtKHuqRAC2yEl9SpycojkXuKabjrGwm.jpg', alt: 'Image 2' },
        { id: 3, src: 'https://t4.ftcdn.net/jpg/01/82/07/33/240_F_182073314_Dj8BYitZY6fS09uXkoILFKmUyGudqZlu.jpg', alt: 'Image 3' },
    ];
    const pharmcyImage = [
        { id: 1, src: 'https://t3.ftcdn.net/jpg/02/65/53/52/240_F_265535255_7n7ZTmjOBXojWrjSOT0y91TyAKIEUyXR.jpg', alt: 'Image 1' },
        { id: 2, src: 'https://t3.ftcdn.net/jpg/01/21/24/22/240_F_121242217_NBPm3VeOaKVhBv20BGs6BYo9l6bbBPjP.jpg', alt: 'Image 2' },
        { id: 3, src: 'https://t3.ftcdn.net/jpg/02/44/06/00/240_F_244060062_BcG5v8lFkRO1RqNyxzZUcrb3WhCltllu.jpg', alt: 'Image 3' },
    ];






    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => prevIndex === doctorImage.length - 1 ? 0 : prevIndex + 1
            );
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="container_gallary" id='services'>
            <h1 class="text-center " >our services</h1>

            <div className='row align-items-start'>
            <div className='gallary col-sm-12 col-lg-4'>
            <img  className='my_photo  m-2 rounded' 
                src={doctorImage[currentImageIndex].src}
                alt={doctorImage[currentImageIndex].alt} />
                <br></br>
<button type="button" className="btn btn-primary btn-lg mx-5" onClick={handledoctor} >
{/* <button type="button" className="btn btn-primary btn-lg mx-5" > */}

   Doctors
</button>
            </div>
            <br></br>
            <div>
            <div className='gallary col-sm-12 col-lg-4'>
           <img  className='my_photo m-2 rounded'
                src={labImage[currentImageIndex].src}
                alt={labImage[currentImageIndex].alt} />
                 <br></br>
  <button  type="button" className="btn btn-primary btn-lg mx-5" onClick={handlelab}>
  {/* <button  type="button" className="btn btn-primary btn-lg mx-5" > */}

    Laboratory
  </button>
            </div>
           
                
           </div>
           <br></br>
           <div className='gallary col-sm-12 col-lg-4'>
            
<img  className='my_photo m-2 rounded'
                src={pharmcyImage[currentImageIndex].src}
                alt={pharmcyImage[currentImageIndex].alt}  />
                <br></br>
<button type="button" className="btn btn-primary btn-lg mx-5" onClick={handlepharmacy}>
{/* <button type="button" className="btn btn-primary btn-lg mx-5" > */}

    Pharmacy
</button>
           </div>
            </div>
            



        </div>
    );
}
 
export default NewService;