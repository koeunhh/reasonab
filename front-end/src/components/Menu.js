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
        <Link to='/about'><div onClick={clickMenu}>
          <div className={eng}>About RDA</div>
          <div className={kor}>RDA이란?</div>
        </div></Link>
        <Link to='/program'><div onClick={clickMenu}>Program</div></Link>
        <Link to='/trial'><div onClick={clickMenu}>Trial</div></Link>
      </div>
    )
  }
}