import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/about.scss';

class AboutEng extends Component {

  redirectTo = () => {
    this.props.history.push('/en/about');
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className='about'>
        <img className='about__logo' src='../assets/icons/mainlogo-black.svg' alt='logo'/>
        <h2 className='about__title'>
            A New Kind of <br/>
            Tutoring Academy. <br/>
            | <br/>
            Created by <br/>
            Artists &amp; Designers
        </h2>
        <div className='about__section'>
          <img className='about__section--img1' src='../assets/images/mainImg1.png' alt='mainImg1'/>
          <p className='about__section--paragraph'>
            RDA completely rethinks everything about you and your Portfolio.
            It represents all the things RDA stands for.
            Like creativity, identity, and beauty.
          </p>
        </div>
        <div className='about__section'>
          <img className='about__section--img2' src='../assets/images/mainImg2.png' alt='mainImg2'/>
          <p className='about__section--paragraph'>
            We think differently, because we need to, not based on us,
            based on you with your passion for Art &amp; Design.
          </p>
        </div>
        <div className='about__section'>
          <img className='about__section--img3' src='../assets/images/mainImg3.png' alt='mainImg3'/>
          <p className='about__section--paragraph'>
            And it's the first private education that actually encourages
            you to get into CANADA.
          </p>
        </div>
        <h2 className='about__welcome'>Welcome to RDA</h2>
        <button className='about__btn' onClick={this.redirectTo}>Learn More</button>
      </div>
    )
  }
}

export default withRouter(AboutEng);