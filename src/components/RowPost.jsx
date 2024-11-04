import React from 'react'
import Banner from './Banner'

function RowPost() {
  return (
    <>
    <h3 className='text-light'>Title</h3>
    <div className='row '>
            <Banner/>
    </div>

    <h3 className='text-light mt-5'>Trending Now</h3>
    <div className='row '>
            <Banner/>
    </div>
    </>
  )
}

export default RowPost