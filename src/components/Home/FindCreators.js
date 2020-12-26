import React, { Component } from 'react';

export default class FindCreators extends Component {
  render(){
    return (
      <React.Fragment>
        <div className='inline y-side' style={{marginTop: '10%', marginBottom: '12%'}}>
          <div className='row'>
            <div className='col-6' style={{paddingRight: '2%'}}>
              <div className='SemiBold-54'>
                Follow your favorite creator get exclusive content
              </div>
              <div className='Regular-22 mb-2 mb-sm-3 mb-md-4'>
                Lorem ipsum knows the importance of relying on qualified
                professionals for every health service. When we need a
                nurse for our needs and those of our loved ones, we want
                to rely on trusted staff.
              </div>
              <button className='button inline-button Medium-white'>Find Creators</button>
            </div>
            <div className='col-6' style={{paddingLeft: '2%'}}>
              <img src={require('assets/home-img/crazy.png')} style={{width: '100%'}}/>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}
