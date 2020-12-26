import React from 'react';

export default function Footer(){
  return (
    <React.Fragment>
      <div className='inline y-side'>
        <img src={require('assets/home-img/footer.png')} style={{width: '100%'}}/>
      </div>
    </React.Fragment>
  );
}
