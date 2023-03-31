import React, { Component } from 'react'
export default function About() {
    return (
        <>
            <div className='AboutWhole'>
                <div className='about'>
                    <div className='Headings'>
                    Who We Are
                    </div>
                    <br />
                    <div className='AboutContent'>
                    Welcome to Capitalize, a leading financial company providing comprehensive investment solutions to clients since 2011. Our range of services includes mutual funds, stocks, bonds, and much more.
                    <br></br>
                    At Capitalize, we understand that every client has unique investment needs and goals. That's why we take a personalized approach to financial planning and investment management. Our team of experienced professionals works closely with each client to develop customized investment strategies that are tailored to their specific requirements.
                    <br></br>
                    When you partner with Capitalize, you'll benefit from our in-depth market knowledge, extensive industry experience, and comm`itment to excellence.
                
                    </div>
                </div>
                <img src="https://tse4.mm.bing.net/th?id=OIP.1oRzqjfb5sJxMJ1gEU83-AHaHa&pid=Api&P=0" className='AboutImg' />
            </div>

            {/* <div id="carouselExampleInterval" class="carousel slide directorwhole" data-bs-ride="carousel"> */}
              <h1>Our Business Philosophy</h1>
              <h2>Leadership</h2>
              <p>A recognized team of leader(s) from the field of financial services, capital market, education and business. Always thrive to providing best service standards under leadership of professionals to design, execute and manage your investment(s).</p>
              <h2>Transparency & Integrity</h2>
              <p>We believe Transparency & Integrity is not just a word but it’s a commitment which we ensure for our investors. No hidden cost model makes easier for customer to take decision to join us for their savings & investment journey. 100% client data provided directly from back office to registered email ID and web login of an investor makes easier for investor to get information anytime , anywhere.</p>



                {/* <p className='directorhead'>Board Of Directors</p> */}
                {/* <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://cdn-icons-png.flaticon.com/512/1753/1753732.png" class="d-block w-90 director" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://img.etimg.com/photo/msid-64916939/images-5.jpg" class="d-block w-90 director" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.etimg.com/photo/msid-64916939/images-5.jpg" class="d-block w-90 director" alt="..." />
                    </div>
                </div> */}
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            {/* </div>  */}

            <div className="About2whole">
                <div className='about2'>
                    <div className='Headings'>
                    "Our mission to bring prosperity to every Indian" 
                    </div>
                    <br />
                    <div className='About2Content'>
                        We will help them participate confidently in the public markets and build generational wealth through the power of compounding.
                        <br /><br />
                        We will help them invest by providing the right financial education to make the right investment decisions at the right time.
                        <br /><br />
                        We will do this through a seamless digital platform that will bring together the best of cutting-edge technology, intuitive design, ease and safety.


                    </div>
                </div>
                <img src="https://www.envisionautomotive.com/wp-content/uploads/2017/06/Mission-Vision-1024x1024.jpg" className="pic3" />
            </div>
            
        </>
    )
}