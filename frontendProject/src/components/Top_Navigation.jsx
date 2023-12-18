import React from 'react'

import logoall from './Img/WhiteLogo.png'
import './components.css'

export default function Top_Navigation() {
  return (
    <>
        <div className="navBar">
          
            <a className="WhiteLogo">
              <img className='logoall' src={logoall} alt="" />
            </a>
            <div >
                <ul className="fram496">
                  <li>SERVICES</li>
                  <li>ABOUT US</li>
                  <li>CONTACT US</li>
                  <li>CAREERS</li>
                </ul>
            </div>
          
        </div>
    </>
    
  )
}
