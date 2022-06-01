import React from 'react';

import {images, data} from '../../constants';
import './SpecialMenu.css';
import {MenuItem, SubHeading} from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id='menu'>
    {/*heading*/}
    <div className="app__specialMenu-title">
      <SubHeading title={'Menu that fits you palatte'}/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    {/*menu*/}
    <div className="app__specialMenu-menu">
      {/*WIne & Beer*/}
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {
            data.wines.map((wine, index) => <MenuItem key={index+wine.title} title={wine.title} price={wine.price} tags={wine.tags}/>)
          }
        </div>
      </div>
      {/*Center Img*/}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu"/>
      </div>
      {/*Cocktail*/}
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktail</p>
        <div className="app__specialMenu-menu_items">
          {
            data.cocktails.map((cocktail, index) => <MenuItem key={index+cocktail.title} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>)
          }
        </div>
      </div>
    </div>
    {/*Bottom btn*/}
    <div style={{marginTop: '15px'}}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
