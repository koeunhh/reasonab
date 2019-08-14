import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.scss';

export default class Nav extends Component{
  render(){
    const { eng, kor, menuOpen, clickMenu, closeMenu, switchLanguage } = this.props;

    var menuImg;
    if(menuOpen){
      menuImg = 'assets/icons/x-white.svg';
    }
    else{
      menuImg = 'assets/icons/menu-white.svg';
      const nav = document.querySelector('.nav');
      console.log(nav);
    }

    return(
      <nav className='nav'>
        <img className='nav__menu' onClick={clickMenu} src={menuImg} alt='menu'/>
        <Link to='/'><img className='nav__logo' onClick={closeMenu} src='assets/icons/logo-white.svg' alt='logo'/></Link>
        <h4 onClick={switchLanguage}>
          <div className={`${eng} nav__lang`}>한글</div>
          <div className={`${kor} nav__lang`}>ENG</div>
        </h4>
      </nav>
    )
  }
}