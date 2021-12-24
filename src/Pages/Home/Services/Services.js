import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="services" className="services section-bg mt-5 mb-3">
      <div className="container">

        <div className="section-title">
          <h2 className='text-center' data-aos="fade-in">Services</h2>
          <p className='text-center mt-3 mb-4' data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          {
              services.slice(0,4).map(service => <Service service={service} key={service._id}></Service>)
          }
       
   
        
        </div>

      </div>
    </div>
    );
};

export default Services;