import React from 'react';
import {images} from '../../constants';

import './Chef.css';
import {SubHeading} from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit lorem</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dignissimos doloribus harum laborum nihil, porro provident repellendus. Doloribus facilis maiores obcaecati odit optio pariatur quia quos sed tenetur voluptatem?</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature"/>
      </div>
    </div>
  </div>
);

export default Chef;
