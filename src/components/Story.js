import React from 'react'
import storyImage from '../assets/images/anhdoi.jpg'
function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our love.</h4>
            <h3 className='oliven-story-title'>Our Story</h3>
            <p>
              Viet story o day
            </p>
            <p>
              day nua
            </p>
            <p>
              thich thi viet tiep day nua
            </p>
            <h4>15/03/2024, Tao da bi lua lay vo roi!</h4>
            <p>
              Van dang tuoi an tuoi choi ma bi lay vo
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
