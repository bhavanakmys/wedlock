import React, { Component } from 'react'  

import Carousel from 'react-bootstrap/Carousel'  

export class Mid extends Component {  

        render() {  

  

                return (  

                        <div>  

                         <div class='container-fluid' >  

                          <div className="row title" style={{ marginBottom: "20px" }} >  

                          <div class="col-sm-12 btn btn-warning">  


                         </div>  

                         </div>  

                         </div>  

                        <div className='container-fluid' >  

                         <Carousel>  

                         <Carousel.Item style={{'height':"800px"}} >  

                         <img style={{'height':"800px"}}  

                         className="d-block w-100"  

                        src={'./marraige.jpg'}  />  

                           <Carousel.Caption>  

                             <h3>First Demo </h3>  

                                 </Carousel.Caption>  

                                 </Carousel.Item  >  

                                 <Carousel.Item style={{'height':"800px"}}>  

                                 <img style={{'height':"800px"}}  

                                   className="d-block w-100"  

                                    src={'./marraige2.jpg'}    />  

                                       <Carousel.Caption>  

                                   <h3>Second Demo</h3>  

                                      </Carousel.Caption>  

                                         </Carousel.Item>  

                                       <Carousel.Item style={{'height':"800px"}}>  

                                       <img style={{'height':"800px"}}  

                                        className="d-block w-100"  

                                         src={'./marraige3.jpg'}   />  

                                        <Carousel.Caption>  

                                          <h3>Third Demo</h3>  

                                          </Carousel.Caption>  

                                         </Carousel.Item>  

                                        </Carousel>  

                                </div>  

                        </div>  

                )  

        }  

}  

export default Mid  