import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../styles/nav.scss';

class Nav extends Component{

  switchLanguage = () => {
    // if(this.state.eng === 'show'){
    //   this.setState({
    //     eng: 'hide',
    //     kor: 'show'
    //   });
    // }
    // else if(this.state.eng === 'hide'){
    //   this.setState({
    //     eng: 'show',
    //     kor: 'hide',
    //   })
    // }
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
    console.log(path);
    this.props.history.push(path);
  }

  render(){
    const { eng, kor, menuOpen, clickMenu, closeMenu } = this.props;

    var menuImg;
    if(menuOpen){
      menuImg = 'assets/icons/x-white.svg';
    }
    else{
      menuImg = 'assets/icons/menu-white.svg';
    }

    return(
      <nav className='nav'>
        <img className='nav__menu' onClick={clickMenu} src={menuImg} alt='menu'/>
        <Link to='/'><img className='nav__logo' onClick={closeMenu} src='assets/icons/logo-white.svg' alt='logo'/></Link>
        <h4 onClick={this.switchLanguage}>
          <div className={`kor nav__lang`}>한글</div>
          <div className={`eng nav__lang`}>ENG</div>
        </h4>
      </nav>
    )
  }
}

export default withRouter(Nav);