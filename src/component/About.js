import React from 'react';
import './About.css';

const About = () => {
  return (
    
    <section className="about mt-5" id='about'>
    
      <div className="container " >
        
        <div className="row">
          <div className="col-md-6">
           

            <img src="https://media.istockphoto.com/id/1188678645/photo/heart-and-stethoscope.jpg?s=612x612&w=0&k=20&c=bU1h8i4P4QpzRnkmiDwO4n1nmJj1F2yMkiTJXWQzodM=" 
             width="400"  style={{paddingTop:"100px",borderBottomRightRadius:"50%",borderTopLeftRadius:"50%"}}/>
          </div>

          <div className="col-md-6 pt-3 ">

          <h2 >About Us</h2>
          <hr style={{color:"white",width:"20%",marginLeft:"15px",borderWidth:"8px",borderRadius:"20px",}}></hr><br></br>

            <h4>Not getting enough sleep can make you more likely to catch viruses or germs.  And you also may take longer to get better. That’s because your body can’t make as many infection-fighting cells and proteins called antibodies that help defend against illness. Your body releases certain proteins that help the immune system, called cytokines, only during sleep. </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;