import React, { Component } from 'react';

import AboutEng from './AboutEng';
import ProgramEng from './ProgramEng';
import TrialEng from './TrialEng';

export default class MainEng extends Component {
  render(){
    return(
      <div className='main'>
        <AboutEng/>
        <ProgramEng/>
        <TrialEng/>
      </div>
    )
  }
}