import React, { Component } from 'react';

import About from './About';
import Program from './Program';
import Trial from './Trial';

export default class Main extends Component {
  render(){
    const { eng, kor } = this.props;
    return(
      <div className='main'>
        <About {...this.props} eng={eng} kor={kor}/>
        <Program {...this.props} eng={eng} kor={kor}/>
        <Trial {...this.props} eng={eng} kor={kor} />
      </div>
    )
  }
}