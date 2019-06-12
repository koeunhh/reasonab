import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.scss';

export default class Nav extends Component{
  render(){
    const { eng, kor, switchLanguage } = this.props;

    return(
      <div className='nav'>
        <img src='/assets/icons/menu.svg' alt='menu'/>
        <Link to='/'><img src='/assets/icons/logo.svg' alt='logo'/></Link>
        <h3 className={eng} onClick={switchLanguage}>한글</h3>
        <h3 className={kor} onClick={switchLanguage}>ENG</h3>
      </div>
    )
  }
}