import React from 'react'

const Page2 = () => {
  return (
    <div id='pg-2'>
      <h1 id='pg2-heading'>NEW COLLECTION</h1>
      <div id="box-container">
        <div className='box'>
          <img src='https://i.pinimg.com/1200x/60/ac/f5/60acf55c95a8695c0d06d36f3cb2609f.jpg' alt="collection" />
          <div className="overlay">
            <h4>Modern Woodworks</h4>
            <p>Perfect for dining, work, or cozy interiors.</p>
            <p id='visit-link'>Visit <i className="ri-arrow-right-line"></i></p>
          </div>
        </div>

        <div className='box'>
          <img src='https://i.pinimg.com/736x/de/e3/a9/dee3a9b58b8be6d1046a6c9f660d293a.jpg' alt="collection" />
          <div className="overlay">
            <h4>Noir Elegance</h4>
            <p>Explore our dark-toned furniture pieces.</p>
            <p id='visit-link'>Visit <i className="ri-arrow-right-line"></i></p>
          </div>
        </div>

        <div className='box'>
          <img src='https://i.pinimg.com/736x/96/8c/17/968c17464ce0eea549bc5acd96cac037.jpg' alt="collection" />
           <div className="overlay">
            <h4>Soft Minimalism</h4>
            <p>Light, airy, and effortlessly comfortable.</p>
            <p id='visit-link'>Visit <i className="ri-arrow-right-line"></i></p>
          </div>
        </div>

        <div className='box' id='hidden-img'>
          <img src='https://i.pinimg.com/1200x/09/c4/92/09c49242165ff6436e9a4c38045a46ba.jpg' alt="collection" />
          <div className="overlay">
            <h4>Elegant Seating</h4>
            <p>Luxury collection of chairs.</p>
            <p id='visit-link'>Visit <i className="ri-arrow-right-line"></i></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2
