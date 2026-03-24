import React from 'react'

const Corousel = () => {
  return (
      <section class="row">
            <div class="col-md-12">
                {/* <!-- a division containing carousel content  --> */}

                <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    {/* <!-- division containing images  --> */}
                     <div class="carousel-inner">
                        {/* <!-- div with image 1  --> */}
                         <div class="carousel-item " >
                           <img src="images/bmw.jpg" alt=""  style={{height:"600px",width:"1200px",objectFit:"cover"}}/>
                         </div>
                         {/* <!-- div with image 2  --> */}
                          <div class="carousel-item active">
                            <img src="images/mercedes.jpg" alt="slide2" style={{height:"600px",width:"1200px",objectFit:"cover"}}/>
                          </div>
                          {/* <!-- div with image 3  --> */}
                           <div class="carousel-item">
                            <img src="images/mercedes1.jpg" alt="slide3" style={{height:"600px",width:"1200px",objectFit:"cover"}}/>
                           </div>
                           {/* <!-- div with image 4  --> */}
                            <div class="carousel-item ">
                                <img src="images/cadillac.jpg" alt="slide4" style={{height:"600px",width:"1200px",objectFit:"cover"}}/>
                            </div>

                     </div>
                     {/* <!-- previous controls  --> */}
                      <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                      </a>
                      {/* <!-- next control  --> */}
                       <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                       </a>
                </div>
            </div>



          </section>
  )
}

export default Corousel