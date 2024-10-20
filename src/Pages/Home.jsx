import React from 'react'
import Header from '../components/Header'



function Home() {
  
  return (
    <>
    <Header/>

    <div style={{backgroundImage: 'url(https://sm.ign.com/ign_latam/screenshot/default/mkposter1_11zt.jpg)',
    backgroundSize: 'cover', // Adjust size (contain, cover, etc.)
    backgroundPosition: 'center', // Adjust position
    height: '100vh', // Full height
    width: '100%',
    backgroundRepeat:'no-repeat'}} >
      

    </div>
    
    </>
  )
}

export default Home