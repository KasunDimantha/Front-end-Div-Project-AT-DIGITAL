import React from 'react'
import heroimg from './Img/HeroImage.png'

export default function Hero_section() {
  return (
    <>
        <section className='hero'>
            
            <img src={heroimg} alt="heroimg" className='HeroImg'/>
            
            <div className="Frame497">
                <div className="text497">
                    <h3>We crush your competitors, goals, and sales records - without the B.S.</h3>
                </div>
                <div className='button497'>
                    <button >GET FREE CONSULTATION</button>
                </div>
            </div>
        </section>
    </>
  )
}
