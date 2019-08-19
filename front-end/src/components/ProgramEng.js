import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/main.scss';

class ProgramEng extends Component {
  
  redirectTo = () => {
    this.props.history.push('/en/program');
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className='program'>
        <h2 className='program__title'>
          RDA completely rethinks everything about you &amp; your Portfolio
        </h2>
        <h4 className='program__sub'>We think differently, because you need to</h4>
        <img className='program__img' src='../assets/images/mainImg2.png' alt='mainImg2'/>
        <button onClick={this.redirectTo}>2019 RDA Program</button>
      </div>
    )
  }
}

export default withRouter(ProgramEng);