import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className='bg-black'>
      <div id='footer' className='container-fluid'>
        <div className='row w-100 py-5 '>
          <div className="col-md-3 ">
            <ul className='list-unstyled ms-5'>
              <a className='text-light' href=""><li className='mt-1'>FAQ</li></a>
              <a className='text-light' href=""><li className='mt-1'>Help Centre</li></a>
              <a className='text-light' href=""><li className='mt-1'>Media Centre</li></a>
              <a className='text-light' href=""><li className='mt-1'>Terms Of Use</li></a>
              <a className='text-light' href=""><li className='mt-1'>Cookie Preferences</li></a>

            </ul>
          </div>
          <div className="col-md-3">
          <ul className='list-unstyled ms-5'>
              <Link to={'/home'} className='text-light'><li className='mt-1'>Home</li></Link>
              <Link to={'/landing'} className='text-light'><li className='mt-1'>Landing</li></Link>
              <a className='text-light' href=""><li className='mt-1'> Account</li></a>
              <a className='text-light' href=""><li className='mt-1'> Privacy</li></a>
              <a className='text-light' href=""><li className='mt-1'> Only on Netflix</li></a>
            </ul>

          </div>
          <div className="col-md-3">
            <ul className='list-unstyled ms-5'>
              <li className='text-light mt-1'>React</li>
              <li className='text-light mt-1'>React-Bootstrap</li>
              <li className='text-light mt-1'>Bootswatch</li>
              <li className='text-light mt-1'>Materials UI</li>
              
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className='text-light ms-5 ms-md-0'>CONTACT <span className='text-primary'>US</span></h4>
            <div className='d-md-flex ms-5 ms-md-0  '>
              <input type="text" placeholder='Email Address' className='text-light form-control bg-dark rounded p-1' style={{width:'65%'}}  />
              <button className='btn btn-primary ms-0 ms-md-2 mt-2 mt-md-0'>Subscribe</button>
            </div>
            <p className=' text-light mt-3 ms-5 ms-md-0'>Netflix India</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer