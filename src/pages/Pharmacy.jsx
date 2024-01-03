import React from 'react'
import Footer from '../component/footer';
import { useNavigate } from 'react-router-dom';
import'./mydesign.css'
import"./all.css"
import trueImage from '../images/true.png';
import starImage from '../images/star.png';

const Pharmacy = () => {
    const navigate = useNavigate();
  const fornext = () => {
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
              src="https://img.freepik.com/free-photo/closeup-view-pharmacist-hand-taking-medicine-box-from-shelf-drug-store_342744-320.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>MedTech Pharmacy</h1>
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
              src="https://img.freepik.com/free-photo/young-hispanic-man-pharmacist-smiling-confident-scanning-pills-bottle-pharmacy_839833-10375.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>PulsePoint Pharmacy</h1>
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
              src="https://img.freepik.com/free-vector/health-care-graphic-design_24908-54847.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>LifeSync Pharmacy</h1>
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
              src="https://img.freepik.com/free-photo/tablet-drug-serious-touchscreen-pharmacy_1134-730.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>MedOptima</h1>
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
              src="https://img.freepik.com/free-photo/packings-pills-capsules-medicines_1339-2254.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>MedicoEdge </h1>
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
              src="https://img.freepik.com/free-vector/medical-design-poster-with-original-medicinal-capsule-consisting-green-blue-parts-leaves-as-life-symbol-illustration_1284-53606.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>VitaCore Pharmacy</h1>
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
              src="https://img.freepik.com/free-photo/packaged-pills-basket-with-defocused-backdrop-pharmacy-shelves_91128-3457.jpg?size=626&ext=jpg&ga=GA1.1.1151713492.1697357900&semt=sph"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>MedicoHealth</h1>
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
            <h1>CureCore Pharmacy</h1>
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
              src="https://hgoc.edu.pk/images/course/sm-1.jpg"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>PharmaPulse</h1>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dTtqn7gVBmRBYLNzggmot2pXdkoKDWDVTA&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>CureHealth</h1>
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
              src="data:image/jpeg;base64,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"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>MedicoScript </h1>
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
            src="data:image/jpeg;base64,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"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>PharmaVital</h1>
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
            src="data:image/jpeg;base64,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"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>CureClinique</h1>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsl5dppb5EeIaKOWI4e7SNrmTizqECrLMnw&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>MedicoVital</h1>
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
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgYGBgYHBoaGBgaGhoZGhoaGRgZGhgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSw0NDQ2NDQ0NDQ2NDQ0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAIgBcQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEAQAAIBAgQDBQYEBAUCBwAAAAECAAMRBBIhMQVBUSJhcYGRBhMyUqGxFMHR8EJicuEjgpKishXxFjNDRFNUwv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EAC8RAAICAQQCAgADBwUAAAAAAAABAhEDEiExUQRBE2EicZEUQlKBodHwBSMzscH/2gAMAwEAAhEDEQA/APW4pydvAZ0TsbedEYDopydgAoxo+MqQEcSdvOqNJ2ADSIDxPiKUVLMRfkPtB+PcbTDrqyhj8x28BzPdKDAWxL52dSAdWtz6K36TSje5GeWnpXJJhEr4p8zFkpjvIJ7lHTvtNKmACgBSwt3mPw+HyLZSQPUekl94R8VgPm5f2jlK9kKONLd89kWRl7x1Gh8xsZyhilYgBr32I2JG47m7o6tX5CUWOQpd0HZPxqNLj516EHW/nGlYSm4b+vZpCI0iV+DxZZd7kAa/MD8LedjfvBhIqEzJZST3RKyyt42LIp6Ov3lisA40pNOw11H3ifBpBt9JX8OplXqA7M2YeljDeQ8I20Bk1py0bmizRiKkYapmbexa415SSlhXDEm/rLQNHq0KAhoUyKZB3sZ5nR4M/vHdWtd2+5nqTt2T4TGVGyox/mb7wbCimx/s+9UgswFoKfYt/nmrwbEgSfEYoIAOZilmWONt0jMorlmIf2Kfk8WH9kaiOr5r5SDNecX2go84bWHZMzj8lZL0+tjMYxfBPhl7A8JJkkFDGIFGZgJw8SpA2Lr6iUUJP0ac4rlkzrYEyuTH3JGQixtqIS/E6W2dfUQF6tE7VAPMTcYP2jEskW9pImerc7Thex2kQq0bW94PIiOqPTAF3sO/SDj9DUk/aHcSS6TFcV4O7VFZbWHf+U1+N4hSKEBwT4iUmNwCVQWU2cLZbHXztJ6GuQlJSX4d/wCZnzg0GYF9SdhytPQMAuZFKXK2Gtpk+F8FYu2cXYKDl79Z6BwLB1EoIuikDW4vEgivoCNJvlMZUwxYWKn0mjSi43KnykgpnoJo1RjcPQZHFwcp52l1k7tJc+6B3AlNx3hleqoWnUCDW+lyRy15RBbittxvvF+YesUzn/gbE/8A2f8AlFAx8sv4TfXigfEMZ7tb5SzE2VRzP5ASro8eqN/7Z7E2BGYjpvl0HjEoNq0DyxT0t7mhBnRKOpxeqq5jhzYXv27WVd2JIGm/pIqftE2XM2HcX1ABubcja1/pHokP5Y3VminZRJ7RA/8Ao1B4qR9xHrx0m+Wi5IF+QHqYlGQPLFK2y6jWEpk46xBJw9UWtyBPgANzDeH8QFW/YZNARm5jUHzBGviIOLXIRnGXDDpUcd42lBDqM1vJehP6QbjvHTTPuqQDVLXJ3CA7X6nu8Jl3wbubtd3Outjr4k/pKQxWrk6ObL5Si3GKbf8ARE/CeDviaprVNFvzsWPjzv3cvHQbJcIiAKEAAFhpM1g8PXogWZ0A5aMn+nUDyMu8JxQnRwOmZdvMbiEk/TseKUf3k0/sJVLHsG3cdpV4zjoLGmFsRoQw0f15d/3jeNcR7DLTYC2/Xw7plUxYfsO1jrlYk6H5SflO3cdet4/KlLTL9Trlhm4a8e9eu0aXhuJyc702NhfdG+U/y9OkuGXumIw2KKuATdWFm7/lPjy9DNRw7GG4Qm4I7Jm26dEoVKNrh/5Q7hqFHKW0U9n+h9QPJgB5mXIQ9ICP/OU/yWPk6n9ZZ5oPd2PEqVdEQQ9JFiEIFzyhWaQY74G8IiseQGrm3DWEhOc/xyHC4oMuRt52rhWUdkkzOlFpaoumPKv88Zkf54N/ijZTC8FnOrC0NKE5tdCyP80eqv8ANDcs5aa0oXyv/EZLi3tT7l2pte9vvHU1z0lO2btXPfrMx7ZpfFW65fvPRaHDx7pFFtFG3hHpS4CUm9mA4Cyi0g4jhj8a7yxw/DnuQR4SwPDjI58Kyw0slKKkqMZhT2x4zQ1vgPhO4jgBzB1PPUQp8A9iO6cvg4ZYbi+zOOLjaZ5t7To1kYNbUj9+kz2R/mM9h4NgUKEOgYqxGoBhtfC0kGlNfQT3sPlQjFRcbOXL4uuTldHiBR/mMaUe+hJntDe7/wDjX0EnGFQW7C/6RKvzIfwk14N/vIxfsn7LMAKtVjcjRbbA9e+anE+zdJwA/att3SyVemkWextOGeRylZ2QwxjGqKBPYvDKCSCbnmSbeHSQ8B4YiVKyoLBcqgnXvM0VRpV+zwuazdah+lhMSk3s2bWOMd0kWWDwKIxfdjuYd72DZog0RvYJ97O+8g2aINAAn3kRqQa46xZ4BQTnE5B80UYUR1qg95Y2uAFF+/tNbyy+kNFQDpM9jah96xHLN9LLK/EcTbMmpsAxP0t9ptw4/I4IZd232zVYyoCANLFlHkNT9pLTqgtfnbfuFv1nmXFuP1UUsrWOZF62JV3Y+NinpL/2Q4u1dLue0HKG23wlgf8AbG8TUbCOZOVGzNQGQVGUuq2HX9+kgUmV2MqkM5U9qwUeJKj9ZOK5KZJVS7Zc16oVWI0IUkbb9YLQYU1GY6JnFz8oUt9gPSDI5a/QsB5Zl/vJOJg+6bvKf8lB/ffF9Gl2V3CeHhy1RxmZmJIOoBOp05nW2ugtpKz2rxz0nVECqgXN8I1OxPgNpouB/ARzV2B8TZh9GErfabFUGQoyGoyhrFCoyta1s/30Mnnk6e5XxoRTVKzMYD2lxFM6vnT5HG3g24ly/FqdVM9PsMPjU7j9V7x9DKHhdGjl/wAYHMdeeVb8tDfz/wC8jxnDHpsKlBrjfKTfTmA3Mdx9ZyQzSj+R3ZMEJL7DMRVzg20YD1EjSrRCFWTtW+Im5PnoV8pBRbOobUXvpsQRoRC8NggTr0E6ZR1rUcsJvHL4266/sd4bSuFvtcgde4fvoJpcHhySn8ov9ZXjBgBbfOn5zR8PpDU+Q+pP3lK/CiC2m69uwiiljm7rDw3vJjUjjTjQhmW5Fkoo576cxDXQ+Ef7ruidNDBavZq16M7hsGWF72hFPFMmh1nUob26zhwwO4l1D7Oh54vaStBtPFKZKHErfww6RZLa6x/H9kJaf3SzvGm0qxW8Zw1xzvD4WYMt7Z8Lc1kcbMwXwN9JvsE+SmtxfQSkxRVrHfKbi/US4wVfOgJEzKLjyN7hX4/+WI45vkkR05RjVJjYQQuNJ/hg44mSxXIdOfKRGrONU0PhAYPwbE5s5/nMOrHMJmvZam6vXzXsXJHhNN72C4BkCJbl9IQryF8Vra3nHmvHYqHq4MTPIHxSL8RtfadRgRcc4DB3xaXZcwuouRIPZgf4Rb5nc+pMw/HuE4ivjGem6hFsrLnysbakhdiNes9C4bRyUkQcgJmLtgwo3nVkYfWSXmgETIGbWSsYLAB+edD2kc4zRBRN72KC54oWMhq6s/8AmP8AuP6StxgA9F+rG/5QtnvUqjoG/wCbSsx6NfTmF+lzOjTueRjl+G/tlLxqmjWDGwz300uRTUa6SfgfEFw4yoo1bMb3OuUr12sTKvjiuLNlNhc6C9uwoufSUbY62t51RhcaZCU2pXE9a4bx9HuHshAvcXse624Me2IRnve4zU2G+oJe3/EfSeZYWrXZbp2Qb9om1/6f1m24aT7qle+bLSDX3uOvqZHJijFNorDNKUkpfZocE4sg+Yt9Mx/IQ3FpmplRuctv6gQQPUSu4X/Bfkz2/wB4/KXDsAFJNgLG52Fuf3nHLk9CG8Slw9QI972SsApO2Wp/A3dmBt45BMTj6D4eoyHToRsV5HvE3GONNswDKyPfML/CTvp0JN78iTrqLU+PT3iGnUBZlHYqCxNuj9/XrvoZLLFSjZfBJwlTXJlfxIJ7Wg5Hl4Hp+/MqjVZdtuY5Su4jh3pfFqCbafvxg9PFlBe916cx3CcKu6PTbSVs0GGVXY20O/mP7Q3hqXe19Mp+hEqeFYlS11OwJ+mn1hFFyCzXsLZb917m3fPT8aL0PUjw/OyR+ZaXe9lvjuKIrqo5dOXfLTAYgmxB0mSp4UO/Z66mbHheHsgETbuikUqT9lvSqXk0HooYSKZgUOq06x0nBTM6aZjAqEqhWa/Mxxqp1g+OSzmCs06IxTViLAunWI5OsqyY01DNfH9huWVk6xjqp5iVrVDI2czSx/Ybjw+pHjLrhRtSEpUSwJMveF0zkGklmZsIStfrIa9R76AQg0W6SN6LdJACBKjcwIOcQ+e2QZesKai3SL3TWOkVjI1QAlgN4r3nKtQBRIBUbkIakgUW+EOrDpImD20InO30MVn6Ral2a0y6Aa+BqOVzNopvbytLaiMqgXvYSFQ/SSqjbED1i1pex6JdHj2MxLHij6m2dRa57p7Nhycgt0EwmO9iXbF/iUdACQShBvp3jSbVWsAOgijKPZl45LlE4qkHWOFcQN6t4wNKWZosPeAxpIgRcxpYwCg0sJG7CCteJnIgMmig/vDFEBX18RkxdZD/ABBrd9wtTTyJ9DA14h22DDZrff8AQTQcR4GKtdKoYKyb3HxWDLa9+Ya3kJlOM0sjtfQkWv3jUfa3nO3HUv0PCzXhu1tbf6g+P4iwC2Nr2Bt0N+fTSBYfA4dbtoWN981teQ00EEdrgrffbx1I+59YIzsNLmXSpHMsupl2mJDAbdO7pL/geOViy81VNNOREw+Hq20vpe80XBeGVc5rrZ6ZphWswurBrr2d7aLqO+YyborCX4k+tza4fFKLW3U/diP/ANSbilbsqgPIMfAbfY+kpQLAkjVSrafy9q3na3nBcfxgLWf+JSEsQb27OnlrPOzrTE9fw5qUtwjE1DYW3v8Au4hVEDU8tbDew5C5lAvGqTOqX7TXsLHkCefhLlHZ1sg06nQes4FN7nsOC2ZQ8eKuwTf+I2302/OUlXhyDVmcAcmZQPtNUPZ8Fs9VySTeyCwHQXbl6SDGcPpqOzfwJuD/AHnTgyQUakt7PO8zBmnPVGVJLjsoExdKmtkBLHfQgerak+VpYYCs1TsASE8MDnsiaPhHDQgGmstLM+Hwc+Px4Ve99sI4fw/KJf4WkbQGlilvZRm+gkeIxz01uAW7lAJ9Li8h8+O+TuXjzS4L1ZICYLw12ZFZwQx1IO4hcrriSocrR2eRgxXi1x7CiuxNLM58IK9CHuhveRtSPSWjmivYUVj0T0kbUW6S1NNuk4aTdJr9pivaCmVP4ZukemGtLE026Tnu26QflR7Q6ZW1F0MucFUZaYt0gbYVjD6PZW0jl8mHaHpZz8S/cJC+Jc/xCTk35RuLwClcyEd/X/vCE4zjaMu0RNiWHORGu/zfSQ0VdhoLm2o+kFxLNlIXRtrNy85ial6OjE4cS5CveCMqYoAXvM4+PdDZ1IJJt0PgRoZAcQXftBgveDacrnR6EcUe9japWBH1nKldQLzPYfFFdjeSJWZ2HjD5FQfDvd7F8X00kfvu0ovv9xrBK2Yaj0lXj8ay5Xt8LAnrYb/S8Ty0wjh1GlNYA2MY7gwGtWBUMD2TY36gi4Mkw6GDk26MOCSskdVMj930MNFARgp2mlrjwyLUXygMq0iaqRDvdkcpxgL3lFmkuSbwxfAF7wxpcwlqSg7SVKMHnfpCWDtldmadll7kRTPzT6H8MewrEvZT4TK+0YDC3dNBxEnKbTNcQRmveehB0jxs8HKSMtUoKN4G9FZcPgXJjU4U55TfyMksC6KangSzaEjzM3nsjw009czdrQjMbHuI2MC4bwqx1FzNTgcIyWvYd17/AGi19jeC3sif3K3OgmB9oTTSuyI6pb4gFuAx1I0568tp6KidSJjOJewpd6lRcSt3d3Csht2mJylgx672ih8cm1kexaUckEnjW/ZQcP4SDVSs7CoEN8qa6W6X62uDva01lf2lpILarbQDI48h2bTzrEq9Go9Nuy6GzWPcCCCNwQQfOFUuLVj2AC5bQAguSTpYA317hHPwcbVxdDh/qGaLqaT/AOzStxxqroiL2nZUBY2F2NgbDlr18ptsFwlEANs7/OwF/wDKNlHh9Z59gfZmsmTEVFdSjB1Qi2TK1xcDnpz6z0DDY+6g6ai/d5GedHHpbvk9CebWlXBYBZHXorlJsLgE6aX0g78RUdPWT4Zw65jsb+m029yS2MQmPy6ZgLadrTaH8IxhqVlBYEA5jbXbXUzWLRQbKo8FAjDh01OVQTzAAPqJwLxNMrvbo9CXm6otVv2E+8W24jgwmT4pUdHsxAU7HW5HhfSEDj62Auvofteal5EIycWc6wTlFSRpMwiziZo8eHJl9CPzkuD4wruE0JOxHXexmFnhJ0EsE0raL/MI0uIITGMZRkg3OJw1BK7PyjGMnKI7LM1FjTUXrKwmNJkmh2Whqr1jDWHWVZMjeYkh2W6VASQOkjqCB8KPbP8ASfuJYuJ63hf8K/NkpcgmapScMVsNfMc7yPiVRHIYDK1wT3w/EY3MuVhfvgOApU3bK50tprz6GdTEnQxOHMyF0a5G6fvug1OuP4htoe7xEJxCPQeytodu8d4glEpnu6mzG7Cxsb72kM2CGVU0UjJofWdCLBAxPUaeZgmHT3Ru1ipO4Fst9vEcodxKglMqUPYcgAdD+kDxRJUg7Ecxob984o+KsN6dzuw5FVdhNWvppr95Vu4e62vfS3OQ4JncZdQynIS3Tkb89Jc4XBqguBqd26xO5M69UYL7IeE4JkpKjkHKTYdFv2QfAaeUt6awek+uv7/tHtXAlYpI5ZuUnbCS9pEaolZieIgc4yhWuQzf5U/N/wBJRyMrG6tlyryKo4g34nmTGPVvBvYzpdktQ9JJh20ghe0fTrACSqpGnwHXMUD/ABQim9jNMsMXTuJXVcJeXlVNJEKYnameY4lEMEOklTBd0tzhYjTtyhYaQfDYJepv3Sm45jPwzgOSFe+VgGINtxoDYi4lpgcWCzDYqdR3ciO6F47D06yZHAYXBF+RGxHqfWZlbWxuKSMjQ4wrsFUuSxAAyPqSbDcCa7DYEKO12m+nkIGnDKVPtqigrqD4QunxBef94op+wf0cfhOHckvQpMzbs1NCx0tqStzoB6QSnwDD0nNWlTCPlK6Xy2O9lOik2tpaHtjkGpaw77D7yrxfHqedUU5szBdNhc23578pqWRJU2ajicnen+hPhuIExww9JjmAym9yF0VvFdvSxhGAw6IgRFAUCwHd57+coce7+/emosoVHzX0s1xbxurad0yo3SFJpbl1icXlFiAynTa/laB4TEmklmVlUM1swOzMWAuel7eUhwqFTctmttddjsSDfext69Y3G8aCko4BzD4dDmB00Xc8xNyx1uzEZp7IMbjC/siSLjGYXAsJnOGcPrK6e8ClL673tyB+k1ioJNQTNlNxLhzVgpzDMpbe+UqbaddLbzL8Swb0dXpkr8ykFf1HmBPQiog+JK5SGtY7gyM/DhJ37OjH5UorT6PMxizyQ/T9Za+zdZ2q3KEBQbG+l9tfrNXQFBWZSi3BsbgfnCMLTRrlAAAfKZj4cU7KrydSaaIjiH6R2ZyL2hb01hKKLS3wxITcatIy/CMSTVdW3vt0EvCQZmTilTFOTztLKrxhAJZYlJVRzuVFgbdIsndKU+0KA/DcQ6lx6nzIEP2aPQvkK32m4mcPlsL3Moh7TudkvCPbPHJVKBCDY3lPh6PScs/HhqqjqjWjUa32T4q1XEZGUD/DdvQr+s1tQTzvgmLGGrLVZSVsyNbfK1tR1sQJvaHFqFW2SqhJ5Xs3+k2M6MUIwjpRGW+4wOuYX111HdO8RwS2z0yNtu+WNagjrpoZVLQYnKN7m0oZBMjuNAWt9IXRxCPT924sRs3Pu1naFVqDWYb7jkRyg+OKs+ZBbe474jSBaOHZzlUXIJIBPTn6SWrjAtJqNUWtc5ua2P1N9vGEtg2pqtVGzDfTcfvUSq4vj81RGZbLl0PV77Hvtt4SGZuMG1ydOFKc0nwLAsHuApRRqCen83SWIqbqeUqsXxIhApsoucqgWLHqfKRVMctOmrVGGc6AD6DvnDier+56E4e+Pr/0LxWKC3JOg5np4ymxfFyWyL68vDxg/Ekq1qYqoCUFwwAFx3nqILhwGSx3Fteemx8ZSUWhR0sOoVhftb9f3tD6dVet5UovI7/Q98nFH9iZUmblEtPxIHlO/ihKs025G/jHpSY8j9JrUTeMNfE3/MyF8XyEhq0so1+sbSVRqYhOKSJ/xRikf4hYoGT0NhKXi2LVGHatpL1hKviPCkqancTvPJKyjxQn4WDeBv8AaEpxgjcSqxfsud1Pr+sq6vCsUmisT53+jAwsdF1xHiKWzotnXe3NP4sw9LSjbj4cgKXuTawF5c+zvBailmrOWLC2XTKB4AAXlxQ4HSRsyooPW2szUnwO0iRaWakq6/CAb7nTW8y2IpVqZsRmQc+YX85uFSwtBeI0rowAuSp+0JJuOxqEkpJsyWHxyDe0jxzJUKgfFmGU/wA17L9eUB4Jg87t74EKgByi4zEkjfkBbl1E1FOjhiysEUMpuCCRY+uvnPOx+Pllu65/mevk8nDHZJvb1wH4bFqFBJ3APrMv7YcZ9y9JxYq4dGvpquUrr/maaH8KhFlfwvY+WlpXV/Z4VcwrZGX+DKSbDvuBrPVxtp2eHlSdozL+1QAvb/cAPWX/ALKVVrJ791BbMQptsgt8N+V7684NR9hMOrXK37idJqMPh1RQqgACXlJSVUQjFxd2PxHaRiBqBp4ylp8RG2axH8J0ImiwwuCJXY/gKOb2kJbPY6FugGpxIgfF9YGlc1XCqc1jckfCPPmYYnsql7kE+cucNw9UWygCG4zPLwxqjuVqMuuoltgMAKa5cxY3uSTc3juGpZ3/AKoYwEVGoyrkgZV6wtfhkJVZIjjaNDlJNHnnHOziGM63EEYBSu0l9pk/x/GQNgUKAhtfGVx0RZ2piUtoINicUmXTeSNwxbb/AFkZ4cltx6yyrszuUzm5vLnhy6SrekA9htNBwnDG1rTgzJ/JaPQxR/2RuIAItAmw+molnUwjB9BpO1sObbTa+yUkklRQ8Dx1da+RKrhflzXX/SbgT0GjjHWxaxI5jQ/pML7P4W2KN5u8QthGiTW9BtfiC1VsdGtO4TAI4a5sw1H78ZSs0nw9dlOjR2h6WWC1HS6Hpt+kiwVGmzZHUFe/re950YgMbtv1lnWVHUEWDAcucKsLozHtDwlUYFW+K47stjpbl4iVX/S1fKjtbKb32IB31M1Jwrutgua3K9rSYpTenkdbMBobkHTvk3jjeyKrNJLkzfEcA2GYrSe6ONj07+/vEoHwzAXmxXh7uLIAcu4Jtp3SuxGEuCLW5ETE4WXxZae5XYCiXFrecskwTAaiNwVZaYt+784U+PU8xOWkdjm29hi0es6agXYecruL8ZSimd725WGpPQQDA8VFZM5uoOwJ+8Pz2M3ey3CeIYnNfrAzVJhBVTEUS3O8dLtGW30wT3kUm9ynUzsKXaFv0z1UiNIiinceSNIjSg6RRQAQW06YooAK04VnYoAZ32lpMqZqa9q+unLnMh/1VlPbQjvGh9D+s7FMS24Kx4CKfGUuO2V/qB++31htHipZ1VXViSAO0LeJ7oopqMmTmjQf9TTmZJhsUrgldgbXiinSQDMG2phbGKKRlyVjwNzTpMUUQyrwnxuO+GFIooIBuTujlInYpoRjfaejepfulKcE9rgaRRSuEzMjem8iNF+kUU7EkS3Lv2W4OlUln3BtNrh+HogsAIopwZEtbOqOSWlRHNSTpKh8bR95kO/hFFJS9HRggp3fQDVwqfiQyDlraG1bnlFFBEQZlPSNsehiigwHZiAZU8Kxjh3IY2vtfS/htFFJZJNLYpiinyX/AA7jliCy2O111B8RD69ZKpzIQRre3XviimsUm1uPJjSuiQYdqQDq2YHfuHSB4pw7lgLXGvj1iilCSK8KgJ7K38BBfwa5r6RRTmyY4yqzohklFbAvFOHJiGVG+FdZBS4VQSy9mw74opPK0kth4m1J7mgo4jDhQunTadqVcOdCu2pFjsNde6KKRWTbgpvfI78Vhupiiii+V9D0/Z//2Q=="
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>HealthBliss</h1>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIqPE3D1kYz-RALujVZz21XvMmHNLn8SzAXZDPARCcpBXvvoeIB399twSgcsGUYH-_zY&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
            <h1>RxSymphony</h1>
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
       </>
    );
}
 
export default Pharmacy;