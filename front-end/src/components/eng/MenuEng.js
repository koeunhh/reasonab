import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../../styles/menu.scss';

export default class MenuEng extends Component {

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
      <div className={`menuEng ${menu}`}>
        <Link to='/en/about'><div onClick={clickMenu}>About RDA</div></Link>
        <Link to='/en/program'><div onClick={clickMenu}>Program</div></Link>
        <Link to='/en/trial'><div onClick={clickMenu}>Trial</div></Link>
      </div>
    )
  }
}