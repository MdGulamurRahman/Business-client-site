import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/hero-img.png';
import client1 from '../../../images/clients/client-1.png';
import client2 from '../../../images/clients/client-2.png';
import client3 from '../../../images/clients/client-3.png';
import client4 from '../../../images/clients/client-4.png';
import client5 from '../../../images/clients/client-5.png';
import client6 from '../../../images/clients/client-6.png';
const Banner = () => {
    return (
        <>
        <div id="hero">
            <div className="container">
            <div className="row d-flex align-items-center">
            <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
                <h1>Your new digital experience with Bocor</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                <img src={bannerImg} className="img-fluid" alt=""/>
            </div>
            </div>
            </div>
        </div>
       {/* Clients area */}
            <div id="clients" className="clients section-bg">
            <div className="container">

                <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

                <div className="col-lg-2 col-md-4 col-6">
                    <div className="client-logo">
                    <img src={client1} className="img-fluid" alt="" data-aos="flip-right"/>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                    <div className="client-logo">
                    <img src={client2} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="100"/>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                    <div className="client-logo">
                    <img src={client3} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="200"/>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                    <div className="client-logo">
                    <img src={client4} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="300"/>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                    <div className="client-logo">
                    <img src={client5} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="400"/>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                    <div className="client-logo">
                    <img src={client6} className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="500"/>
                    </div>
                </div>

                </div>
            </div>
            </div>
            {/* Client Discussion area */}
           
        <div id="about" className="about section-bg">
        <div className="container">
            <div className="row">
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
            <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                <div className="content d-flex flex-column justify-content-center">
                <h3 data-aos="fade-in" data-aos-delay="100">Voluptatem dignissimos provident quasi</h3>
                <p data-aos="fade-in">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                </p>
                <div className="row">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="bx bx-receipt"></i>
                    <h4><a href="#">Corporis voluptates sit</a></h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                    <i className="bx bx-cube-alt"></i>
                    <h4><a href="#">Ullamco laboris nisi</a></h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <i className="bx bx-images"></i>
                    <h4><a href="#">Labore consequatur</a></h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    <i className="bx bx-shield"></i>
                    <h4><a href="#">Beatae veritatis</a></h4>
                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Banner;