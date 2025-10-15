import React from 'react'

const Page5 = () => {
  return (
    <div id='pg-5'>
      <h1 id='pg5-heading'>
        FEATURED PRODUCTS
      </h1>
      <div id="product-container">

        <div className="product">
          <img src='product-1.png' alt="Modern Chair" />
          <div className="product-info">
            <h4>Modern Chair</h4>
            <h4>$299</h4>
          </div>
        </div>

        <div className="product-big">
          <img src='product-2.jpg' alt="Luxe Sofa" />
          <div className="product-info">
            <h4>Luxe Sofa</h4>
            <h4>$499</h4>
          </div>
        </div>

        <div className="product">
          <img src='product-3.jpg' alt="Classic Lamp" />
          <div className="product-info">
            <h4>Classic Lamp</h4>
            <h4>$199</h4>
          </div>
        </div>

        <div className="product-big">
          <img src='product-4.jpg' alt="Wooden Table" />
          <div className="product-info">
            <h4>Wooden Table</h4>
            <h4>$399</h4>
          </div>
        </div>

      </div>

      <div id="hidden-container">
        <div id="colum-1">
          <div className="img-box"><img src='product-1.png'></img></div>
          <div className="img-box"><img src='product-4.jpg'></img></div>
        </div>
        <div id="colum-2"><img src='colum-2.jpg'></img></div>
      </div>
    </div>
  )
}

export default Page5