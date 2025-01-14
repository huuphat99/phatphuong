import React from 'react'
import Logo from '../assets/images/logo.png'
function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Hữu Phát <small>&</small> Linh Phương
                </span>
              </a>
            </h2>
            <p className='copyright'>31 / 03 / 2024 – Hà Nội</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
