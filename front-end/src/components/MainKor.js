import React, { Component } from 'react';

import AboutKor from './AboutKor';
import ProgramKor from './ProgramKor';
import TrialKor from './TrialKor';

export default class MainKor extends Component {
  render(){
    return(
      <div className='main'>
        <AboutKor/>
        <ProgramKor/>
        <TrialKor/>
      </div>
    )
  }
}