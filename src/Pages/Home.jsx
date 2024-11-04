import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import RowPost from '../components/RowPost';



function Home() {
  
  return (
    <>
    <Header/>

    
      <div  style={{backgroundImage: 'url(https://i.etsystatic.com/28878645/r/il/ca3254/3172261746/il_fullxfull.3172261746_4fnr.jpg)',
      backgroundSize: 'cover', // Adjust size (contain, cover, etc.)
      backgroundPosition: 'center', // Adjust position
       // Full height
      backgroundRepeat:'no-repeat'}} >
        <div style={{ backgroundColor:'rgba(0, 0, 0, 0.815)',
  width: '100%'}}>

    <div className='container-fluid'>
      <div className='row'>
        <div className="col-md-6">
        <h1 style={{paddingTop:'10%'}} className='text-light ms-5'>Title</h1>
        <p className='text-light ms-5' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam neque fugit accusantium debitis, minus perspiciatis nostrum tempore nihil cum. Harum aliquid dolor quia quo ducimus earum magni dicta a aut.</p>
        <div className='ms-5'>
          <button className='btn btn-outline-light rounded-0 me-2'>Play</button>
          <button className='btn btn-outline-light rounded-0'>My List</button>

          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center ">
        <Card className='border-0'  style={{ width: '80%',marginTop:'10%', height:'350px'}}>
      <Card.Img  variant="top" src="https://geekculture.co/wp-content/uploads/2021/09/squid-game.jpeg" style={{width:'100%',height:'100%'}} />
    </Card>
        </div>
      </div>
    </div>

    <div className='container-fluid'>
      <div className='ms-5 mt-5'>
        <RowPost/>
      </div>
    </div>


  
        
  
      </div>
    </div>
    
    </>
  )
}

export default Home