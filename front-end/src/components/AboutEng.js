import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/main.scss';

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
        <img className='about__img' src='../assets/images/mainImg1.png' alt='mainImg1'/>
        <button className='about__btn' onClick={this.redirectTo}>More About RDA</button>
      </div>
    )
  }
}

export default withRouter(AboutEng);