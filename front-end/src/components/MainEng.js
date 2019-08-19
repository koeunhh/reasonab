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
        <footer>
            <h5>Copyright © 2019 RDA All rights reserved.</h5>
            <h5 className='credit'>Code by Koeun Lee</h5>
            <h5 className='credit'>Design by Luke Jung</h5>
        </footer>
      </div>
    )
  }
}