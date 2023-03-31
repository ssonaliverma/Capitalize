import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
// import pic2 from "./Partners.png";


function LogIn() {
  return (
    <>
      <div className='log-in'>
        <div className='Headings'>
          Log In
          
        </div>
        <div className="mb-3 row logrows">
          <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" readonly className="form-control-plaintext spaces" id="staticEmail" />
          </div>
        </div>
        <div className="mb-3 row logrows">
          <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control spaces" id="inputPassword" />
          </div>

        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-4 logbutton">Log In</button>
        </div>
        <br />
        <a href='/' className='forgot'>Forgot Password?</a>
        <br /><br /><br />
        <div className='dont'>
          Don't have an account?
          <Link to="/sinup" className="sinup">Sign Up</Link>
        </div>
      </div>
      {/* <img src='https://st.depositphotos.com/1158045/3086/i/600/depositphotos_30861977-stock-photo-welcome-in-the-team.jpg' className='LogInImg' />
      {/* <img src={pic2} className="pic2"/> */}
      <Footer className="footer2"/> 
    </>
  )
}

export default LogIn
