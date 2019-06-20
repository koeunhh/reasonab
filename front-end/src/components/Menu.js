import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../styles/menu.scss';

export default class Main extends Component {

  render(){
    const { eng, kor, menuOpen, clickMenu } = this.props;

    var menu;
    if(menuOpen){
      menu = 'menu'
    }
    else{
      menu = 'closed'
    }

    return(
      <div className={menu}>
        <div className={eng}>
          <Link to='/about'><div onClick={clickMenu}>About RDA</div></Link>
          <Link to='/program'><div onClick={clickMenu}>Program</div></Link>
          <Link to='/trial'><div onClick={clickMenu}>Trial</div></Link>
        </div>
        <div className={kor}>
          <Link to='/about'><div onClick={clickMenu}>RDA이란?</div></Link>
          <Link to='/program'><div onClick={clickMenu}>프로그램 소개</div></Link>
          <Link to='/trial'><div onClick={clickMenu}>포트폴리오 리뷰</div></Link>
        </div>
      </div>
    )
  }
}