import React, { Component } from 'react';

import '../styles/nav.scss';

export default class Nav extends Component{
  render(){
    return(
      <div className='nav'>
        <a>About</a>
        <a>Program</a>
        <a>Trial</a>
      </div>
    )
  }
}