import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div id="footer-content">
        <div id="footer-left">
          <p>SUBSCRIBE TO OUR UPDATES SO YOU DON'T MISS OUT ON NEW ITEMS</p>
          <div class="input-container">
            <input type="email" placeholder="YOUR EMAIL" />
            <span class="arrow">➜</span>
          </div>
          <div id="footer-icons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>

        <div id="footer-right">
          <div id="links">
            <ul>
              <li><a href='#'>Shop</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Collections</a></li>
              <li><a href='#'>designers</a></li>
              <li><a href='#'>Log In</a></li>
            </ul>
            <ul>
              <li><a href='#'>Tables</a></li>
              <li><a href='#'>Sofas</a></li>
              <li><a href='#'>Chairs</a></li>
            </ul>

            <ul>
              <li><a href='#'>Contacts</a></li>
              <li><a href='#'>FAQ</a></li>
              <li><a href='#'>Policy</a></li>
            </ul>
          </div>

        </div>
      </div>
      <div id="footer-bottom">
        <h4>Design and Develop by HUMNA ASIF</h4>

      </div>
    </footer>
  )
}

export default Footer