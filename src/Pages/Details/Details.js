// import React from 'react';
// import { Card, CardGroup } from 'react-bootstrap';
// import './Details.css';

// const Details = () => {
//     return (
//         <>
//             <div className=" container-fluid d-banner">
//             <div className="container overflow-hidden">
//             <div className=" row d-flex align-items-center justify-content-center">
//                 <div className="col-md-6 col-sm-12">
                
//                 <h1 className=" fw-bold text-light">BUY YOUR WONDERFUL CAR</h1>
//                <h4 className=" fw-bold all-clr">{}</h4>
              
//                 <CardGroup>
                
//                <Card className="border-0">
//                 <div className="bg-image hover-zoom">
//                 <Card.Img style={{ width: '100%'}} variant="top" src={""} />
//                 </div>
//                 <Card.Body>
//                 <Card.Title className="fw-bold text-success">{}</Card.Title>
//                 <Card.Text className="text-secondary fs-5">
//                     {}
//                 </Card.Text>
//                 </Card.Body>
//                 <Card.Footer className="p-3 border-0">
//                 <Card.Title className="fw-bold text-danger"><small className="text-dark">PRICE: </small><span> ${}</span></Card.Title>
//                 </Card.Footer>
//             </Card>
           
//         </CardGroup>
//                 </div>
//                 <div className="col-md-6 col-sm-12">
               
//                 <h1 className=" fw-bold text-light">DROP US A <span className="all-clr">MESSAGE</span></h1>
//                 <h6 className="text-info">We'd Love To Hear From You</h6>
               
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                 <input className="input-field" defaultValue={""} {...register("name", )} placeholder="Name" required/> <br />
//                 <input className="my-2 input-field" defaultValue={""} {...register("email", )} placeholder="Email" required/> <br />
//                 <input className=" input-field" {...register("address", )} placeholder="Address" required/> <br />
//                 <input className="my-2 input-field" type="number"{...register("number")} placeholder="Phone" required/> <br />
//                 <input className="input-btn" type="submit" />
//                 </form>
               
//                 </div>
//             </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default Details;