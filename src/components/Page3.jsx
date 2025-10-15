import React from 'react'

const Page3 = () => {
  return (
    <div id='pg-3'>
        <h1 id='pg3-heading'>ABOUT US</h1>
        <div id='pg3-content'>
            <div id="pg3-left">
                <video muted loop autoPlay src='left-video.mp4'></video>
                <p id='left-p'>Our designs blend timeless craftsmanship with modern aesthetics, creating spaces that feel both elegant and effortless. Every piece tells a story of precision, comfort, and artful simplicity.</p>
            </div>
            <div id="pg3-right">
                <p>At KANNO, we believe furniture should do more than fill a room — it should define it.</p>
                <p id='hidden-p'>Our designs blend timeless craftsmanship with modern aesthetics, creating spaces that feel both elegant and effortless. Every piece tells a story of precision, comfort, and artful simplicity.</p>
                  <p id='hidden-p'>We source the finest materials and work closely with skilled artisans to ensure each detail reflects quality and care. From natural wood textures to refined finishes, our furniture is built to stand the test of time — both in durability and design.</p>

              <div id='right-img-div'> <img src='https://i.pinimg.com/1200x/f0/37/7f/f0377ff1bb3502ad81af1111140df9cb.jpg'></img></div>
           
            </div>
        </div>
    </div>
  )
}

export default Page3