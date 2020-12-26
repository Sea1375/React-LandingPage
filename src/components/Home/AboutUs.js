import React, { Component } from 'react';

export default class AboutUs extends Component {
  render(){
    return (
      <React.Fragment>
        <div className='inline y-side'>
          <div class='row'>
            <div class='col-6' style={{paddingRight: '2%'}}>
              <img src={require('assets/home-img/female.png')} style={{width: '100%'}}/>
            </div>
            <div className='col-6' style={{paddingLeft: '2%'}}>
              <div class='SemiBold-54'>
                Building a Resonating fan base and monetize your stuffs.
              </div>
              <div class='Regular-22 mb-1 mb-sm-2 mb-md-3'>
                Lorem ipsum knows the importance of relying on qualified
                professionals for every health service. When we need a
                nurse for our needs and those of our loved ones, we want
                to rely on trusted staff.
              </div>
              <div className='row'>
                <div className='col-6'>
                  <button className='button outline-button Medium-pink'>Watch Video</button>
                </div>
                <div className='col-6'>
                  <button className='button inline-button Medium-white'>About Us</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}
