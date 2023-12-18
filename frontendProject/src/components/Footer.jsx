import React from 'react'
import logoall from './Img/WhiteLogo.png'

export default function Footer() {
  return (
    <>
        <div className="footer">
            <div className="Frame503">

                <div className="Frame500">
                    <div className="Frame500logo">
                        <img src={logoall} alt="logoall" />
                    </div>
                    <div className="Frame500text">
                        Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                    </div>
                </div>

                <div className="Frame502">

                    <div className="Frame501">
                        <div className="Frame501Head">
                            <h3>Our Technologies</h3>
                        </div>
                        <div className="Frame501Con">
                            <>ReactJS</>
                            <li>Gatsby</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                            <li>GraphQL</li>
                            <li>Laravel</li>
                        </div>
                    </div>

                    <div className="Frame496">
                        <div className="Frame496Head">
                            <h3>Our Services</h3>
                        </div>
                        <div className="Frame496Con">
                            <li>Social media Marketing</li>
                            <li>Web & Mobile App Development</li>
                            <li>Data & Analytics</li>
                            <li>Google Marketing solutions</li>
                            <li>Search Engine Optimization</li>
                        </div>
                    </div>
                </div>

            </div>

            <div className="Frame505">
                <div className="Frame505Line"></div>
                <div className="Frame504">
                    <div className="Frame504T1">Privacy Policy</div>
                    <div className="Frame504Line"></div>
                    <div className="Frame504T2">Terms & Conditions</div>
                </div>
            </div>
        </div>
    </>
  )
}
