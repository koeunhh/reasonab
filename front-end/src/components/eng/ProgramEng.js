import React, { Component } from 'react';

import '../../styles/program.scss';

export default class ProgramEng extends Component {

  componentDidMount(){
    document.querySelector('.content').style = 'revert';
    this.props.changeFooterColor();  
  }
  
  render(){    
    return(
      <div className='program'>
        <h1>RDA Program</h1>
        <div>
          <img src='../assets/images/program1.png' alt='graphicDesign'/>
          <img src='../assets/images/program2.png' alt='fineArt'/>
        </div>
        <div>
          <img src='../assets/images/program3.png' alt='animation'/>
          <img src='../assets/images/program1.png' alt='graphicDesign'/>
        </div>
      </div>
    )
  }
}