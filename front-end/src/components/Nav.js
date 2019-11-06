import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../styles/nav.scss';

class Nav extends Component{

  componentDidMount(){
    this.navLanguage();
  }

  componentDidUpdate(){
    this.navLanguage();
  }

  goHome = () => {
    this.props.closeMenu();
    const lang = this.props.checkLanguage();
    const path = '/' + lang + '/';
    this.props.history.push(path);
  }

  navLanguage = () => {
    let path = window.location.pathname;
    const lang = path.split('/')[1];
    if(lang === 'en'){
      document.querySelector('.navEng').style = 'revert';
      document.querySelector('.navKor').style.display = 'none';
    }
    else if(lang === 'kor'){
      document.querySelector('.navKor').style = 'revert';
      document.querySelector('.navEng').style.display = 'none';
    }
  }

  switchLanguage = () => {
    this.props.closeMenu();
    let path = window.location.pathname;
    const lang = path.split('/')[1];
    if(lang === 'en'){
      document.querySelector('.kor').style.display = 'none';
      document.querySelector('.eng').style.display = 'block';
      path = path.replace('/en/', '/kor/');
    }
    else if(lang === 'kor'){
      document.querySelector('.eng').style.display = 'none';
      document.querySelector('.kor').style.display = 'block';
      path = path.replace('/kor/', '/en/');
    }
    this.props.history.push(path);
  }

  render(){
    const { menuOpen, clickMenu } = this.props;

    var menuImg;
    if(menuOpen){
      menuImg = '../assets/icons/x-white.svg';
    }
    else{
      menuImg = '../assets/icons/menu-white.svg';
    }

    return(
      <nav className='nav' ref='nav'>
        <img className='nav__menu' onClick={clickMenu} src={menuImg} alt='menu'/>
        <img className='nav__logo' onClick={this.goHome} src='../assets/icons/logo-white.svg' alt='logo'/>
        <div className='navEng nav__desktop'>
          <Link to='/en/about'>About</Link>
          <Link to='/en/program'>Program</Link>
          <Link to='/en/trial'>Trial</Link>
        </div>
        <div className='navKor nav__desktop'>
          <Link to='/kor/about'>RDA소개</Link>
          <Link to='/kor/program'>프로그램</Link>
          <Link to='/kor/trial'>무료체험</Link>
        </div>
        <h4 onClick={this.switchLanguage}>
          <div className={`kor nav__lang`}>한글</div>
          <div className={`eng nav__lang`}>ENG</div>
        </h4>
      </nav>
    )
  }
}

export default withRouter(Nav);