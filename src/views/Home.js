import React, { Component } from 'react';
import HomeNavbar from '../components/Home/HomeNavbar';
import Promote from '../components/Home/Promote';
import AboutUs from '../components/Home/AboutUs';
import FindCreators from '../components/Home/FindCreators';
import Categories from '../components/Home/Categories';
import Creators from '../components/Home/Creators';
import Footer from '../components/Home/Footer';
import '../assets/styles/home.css';

export default class Home extends Component {
  render(){
    return (
      <React.Fragment>
        <img class='background' src={require("assets/home-img/Homepage.png")} style={{width: '100%', height: '100%'}}/>
        <div class='body'>
          <HomeNavbar/>
          <Promote/>
          <AboutUs/>
          <FindCreators/>
          <Categories/>
          <Creators/>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}
