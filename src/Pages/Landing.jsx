import React from 'react'
import './Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'


function Landing() {
  return (
    <>
    
    <div id='main'>
      <div id='dark'>
        <div className='container-fluid'>
          <div className='row'>
            <div className="col-md-2">
            <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="no image" width={'100%'} className='ms-5 mt-3' />

            </div>
            <div className="col-md-8"></div>
            <div className="col-md-2">
              <button className='btn btn-primary mt-3 px-4 border border-dark'>Sign In</button>
            </div>
          </div>
          

        
        </div>

        <div className='container-fluid' style={{marginTop:'12%'}}>
          <div className='row'>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1 className=' text-light  text-center' style={{fontSize:'40px'}}>Unlimited movies, TV <br/>shows and more</h1>
              <p className='text-light text-center'>Starts at ₹149. Cancel at any time.</p>
              <p className='text-light text-center pt-2'>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className='d-flex justify-content-center'>
                <input type="text" placeholder='Email Address' className='form-control bg-transparent text-light w-50 py-3'  />
                <button className='btn btn-primary py-3 ms-2'>Get Started   <FontAwesomeIcon icon={faGreaterThan} /></button>
              </div>
              
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

        
      </div>
    </div>

    </>
  )
}

export default Landing