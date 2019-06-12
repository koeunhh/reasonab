import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.scss';

export default class Nav extends Component{
  render(){
    const { eng, kor, menuOpen, clickMenu, closeMenu, switchLanguage } = this.props;

    var menuImg;
    if(menuOpen){
      menuImg = '/assets/icons/x.svg';
    }
    else{
      menuImg = '/assets/icons/menu.svg';
    }

    return(
      <div className='nav'>
        <img onClick={clickMenu} src={menuImg} alt='menu'/>
        <Link to='/'><img onClick={closeMenu} src='/assets/icons/logo.svg' alt='logo'/></Link>
        <h3 onClick={switchLanguage}>
          <div className={eng}>한글</div>
          <div className={kor}>ENG</div>
        </h3>
      </div>
    )
  }
}