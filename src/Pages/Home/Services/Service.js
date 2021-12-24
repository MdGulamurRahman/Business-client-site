import React from 'react';
import './Service.css';
const Service = (props) => {
    const {img, name, discription} = props.service;
    return (
        <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
            <div className="card">
              <div className="card-img">
                <img height={400} src={img} alt="..."/>
              </div>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{discription}</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
    );
};

export default Service;