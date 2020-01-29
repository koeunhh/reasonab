import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../../styles/menu.scss';

export default class MenuKor extends Component {

  componentDidUpdate(){
    console.log('close');
  }

  render(){
    const { menuOpen, clickMenu } = this.props;

    var menu;
    if(menuOpen){
      menu = 'menu';
    }
    else{
      menu = 'closed'; 
    }

    return(
      <div className={menu}>
        <Link to='/kor/about'><div onClick={clickMenu}>RDA이란?</div></Link>
        <Link to='/kor/program'><div onClick={clickMenu}>프로그램 소개</div></Link>
        <Link to='/kor/trial'><div onClick={clickMenu}>포트폴리오 리뷰</div></Link>
      </div>
    )
  }
}