import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>Thời gian & Địa điểm</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Tiệc cưới nhà Phát</h5>
              <p>
                <i className='ti-location-pin'></i> Thôn 10, Liên Hiệp, Phúc Thọ, Hà Nội
              </p>
              <p>
                <i className='ti-time'></i> <span>12:00am – 13:00pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Tiệc cưới nhà Phương</h5>
              <p>
                <i className='ti-location-pin'></i> Thôn 6, Phù Vân, Phủ Lý, Hà Nam
              </p>
              <p>
                <i className='ti-time'></i> <span>14:00pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>Lễ thành hôn</h5>
              <p>
                <i className='ti-direction-alt'></i> Thôn 10, Liên Hiệp, Phúc Thọ, Hà Nội
              </p>
              <p>
                <i className='ti-direction'></i> 12 a.m
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where
