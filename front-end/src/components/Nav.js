import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../styles/nav.scss';
class Nav extends Component{

  constructor(props){
    super(props);
    this.state = {
        language: '',
        about: '',
        program: '',
        trial: ''
      }
  }

  componentDidMount(){
    this.setCurrentLanguage();
  }

  goHome = () => {
    this.props.closeMenu();
    const lang = this.props.checkLanguage();
    const path = '/' + lang + '/';
    this.props.history.push(path);
  }

  setCurrentLanguage(){
    const lang = this.props.checkLanguage();
    if(lang === 'en'){
      this.setState({
        language: 'English',
        about: 'About',
        program: 'Program',
        trial: 'Trial'
      })
    }
    else if(lang === 'kor'){
      this.setState({
        language: 'Korean',
        about: 'RDA소개',
        program: '프로그램',
        trial: '무료 피드백'
      })
    }
  }

  switchLanguage = () => {
    this.props.closeMenu();
    const lang = this.props.checkLanguage();
    let path = window.location.pathname;
    let pathArray = path.split('/');
    if(lang === 'en'){
      pathArray[1] = 'kor';
      path = pathArray.join('/');
    }
    else if(lang === 'kor'){
      pathArray[1] = 'en';
      path = pathArray.join('/');
    }
    this.props.history.push(path);
    this.setCurrentLanguage();
  }

  render(){
    const { menuOpen, clickMenu, checkLanguage } = this.props;
    const {about, program, trial, language} = this.state;

    let lang = checkLanguage();
    const aboutPath = `/${lang}/about`;
    const programPath = `/${lang}/program`;
    const trialPath = `/${lang}/trial`;

    var menuImg;
    if(menuOpen){
      menuImg = '/assets/icons/x-white.svg';
    }
    else{
      menuImg = '/assets/icons/menu-white.svg';
    }

    return(      
      <nav className='nav' ref='nav'>
        <img className='nav__menu' onClick={clickMenu} src={menuImg} alt='menu'/>
        <img className='nav__logo' onClick={this.goHome} src='/assets/icons/logo-white.svg' alt='logo'/>
        <Link to={aboutPath}>{about}</Link>
        <Link to={programPath}>{program}</Link>
        <Link to={trialPath}>{trial}</Link>
        <button className='nav__lang' onClick={this.switchLanguage}>{language}</button>
      </nav>
    )
  }
}

export default withRouter(Nav);