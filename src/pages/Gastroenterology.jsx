import React from 'react'
import Footer from '../component/footer';
import { useNavigate } from 'react-router-dom';
import'./mydesign.css'
import"./all.css"
import"./hospitalPage.css"
import trueImage from '../images/true.png';
import starImage from '../images/star.png';
const Gastroenterology = () => {
    const navigate = useNavigate();
  const fornext = () => {
    navigate("/FeadBackData");
  };
    
    return ( <>
 <div className='myflex'>
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
          <h1>William Osler Abbott Doctor</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 9 To 11</b>
    </h2>
    <h2>
      <b>Price:300</b>
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
          <h1>Virginia Apgar Doctors</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:120</b>
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
          <h1>Jean Astruc Doctors</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:320</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIP1ggkjLWoL2tDQdsRmZLc_LZXODg-09aJ-MlqytbwQMcseE5iOp2vNenmJABZHHbQXI&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>Charles Best Doctors</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:500</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0I81H2enkHIb54lm-xSpDh-qLQCbQQ9yLges3tUtStDMXo7DQ1_IkpixCrf5ByX9ecgE&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>ames Carson Doctors</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:120</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06BRyQF_RyLnEA6ekgMSHpbcI6QQONNL7DxS0D1uJ-CKTqgc50Pf1RQKu1px-VQtCx9w&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>ohn Hunter Doctor</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:220</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1U0wxIGbiVWMeHxCdOjrOCCiPft8FsnmcMKyUrG63LPUSf_bjLZNTi8w60J4cn9PdmEw&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>Leo Kanner Doctor</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:450</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1ndCH-I44b8Dw8qMQ7P3Qz_CsSGY5P6LkgqZT9eWIPVKzkuxHDC8WatVkgA3t2NHQf4&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>Thomas Bowdler Doctors</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:520</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtConVimhOPEZPm5XEBohH-ZkIzYkgMpH3NKmZXBHeyPyzlYoPpZ_5GmHDsfhOMJZY9Eg&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>Soha Ahmed Doctor</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:150</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-XGnS0cIpneBM5hlxT8GPnWpf7mRHD67OhXPMAsU1Vn078SYcUjyTYT7b8sHMlf8hmc&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>Ahmed Mohamed Doctor</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:350</b>
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
          <h1>Essam Ahmed Doctor  </h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:370</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjLKr77NkERuZZbbdeNOXd-GF9mt9RktQ_A&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>Ali Ahmed Doctor</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:120</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEtFmSAkikzL-IurY-MsisqoeWslLv1krXQ&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>Maha Amgad Doctor </h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:470</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstTjEyJGJYVsFJr3mrx6uEcbbTyUoYZ_aoA&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>Emy Anes Doctor</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:180</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSi2QHwPRcEPBoZC7xpRKVEXbqDtGvUnS9Q&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>Gamal Ali Doctor</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:500</b>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzhDKU3Qi4Bzp75cu39W_mhyZ3OgFWzEJAA&usqp=CAU"
              alt="Avatar"
              
            />
          </div>
          <div className="mainpara">
          <h1>Samir Ali Doctor</h1>
           <br /><br />
           <div class='h2'>
    <h2>
      <img src={trueImage} />
      <b>Available From 10 To 12</b>
    </h2>
    <h2>
      <b>Price:120</b>
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
              </> );
}
 
export default Gastroenterology;