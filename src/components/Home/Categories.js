import React, { Component } from 'react';
import Category from './Category';
import { CategoryImageUrl } from './CategoryImageUrl';
import { CategoryImageName } from './CategoryImageName';

export default class Categories extends Component {
  render(){
    return (
      <React.Fragment>
        <div className='inline y-creators-side'>
          <div className='SemiBold-48 text-center'>
            Are you creator of any of These categories
          </div>
          <div className='Regular-26 text-center mb-3'>
            Lorem ipsu Promote your stuffs, Build a resonating fan base. Get paid
          </div>
          <img src={require('assets/home-img/33898.png')} style={{width: '100%'}}/>
          {/*<div className="table-responsive Medium-32">*/}
          {/*  <table className='table borderless'>*/}
          {/*    <tbody>*/}
          {/*    <tr>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/video-films.png')}/>*/}
          {/*        {CategoryImageName[0]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/comics.png')}/>*/}
          {/*        {CategoryImageName[3]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/podcast.png')}/>*/}
          {/*        {CategoryImageName[6]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/comedy.png')}/>*/}
          {/*        {CategoryImageName[9]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/craft-diy.png')}/>*/}
          {/*        {CategoryImageName[12]}*/}
          {/*      </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/music.png')}/>*/}
          {/*        {CategoryImageName[1]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/drawing-painting.png')}/>*/}
          {/*        {CategoryImageName[4]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/games.png')}/>*/}
          {/*        {CategoryImageName[7]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/science.png')}/>*/}
          {/*        {CategoryImageName[10]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/dance-theater.png')}/>*/}
          {/*        {CategoryImageName[13]}*/}
          {/*      </td>*/}
          {/*    </tr>*/}
          {/*    <tr>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/writing.png')}/>*/}
          {/*        {CategoryImageName[2]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/animation.png')}/>*/}
          {/*        {CategoryImageName[5]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/photography.png')}/>*/}
          {/*        {CategoryImageName[8]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/education.png')}/>*/}
          {/*        {CategoryImageName[11]}*/}
          {/*      </td>*/}
          {/*      <td>*/}
          {/*        <img id='categoryImage' src={require('assets/home-img/categories/software.png')}/>*/}
          {/*        {CategoryImageName[14]}*/}
          {/*      </td>*/}
          {/*    </tr>*/}
          {/*    </tbody>*/}
          {/*  </table>*/}
          {/*</div>*/}
        </div>
      </React.Fragment>
    );
  }
}
