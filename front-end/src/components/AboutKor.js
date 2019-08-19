import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/main.scss';

class AboutKor extends Component {

  redirectTo = () => {
    this.props.history.push('/kor/about');
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className='about'>
      <img className='about__logo' src='../assets/icons/mainlogo-black.svg' alt='logo'/>
      <h2 className='about__title'>
          아티스트들과 디자이너들이 <br/>
          함께 만들어가는 <br/>
          | <br/>
          새로운 형식의<br/>
          디자인 아카데미
      </h2>
      <img className='about__img' src='../assets/images/mainImg1.png' alt='mainImg1'/>
      <button className='about__btn' onClick={this.redirectTo}>RDA 알아보기</button>
    </div>
    )
  }
}

export default withRouter(AboutKor);