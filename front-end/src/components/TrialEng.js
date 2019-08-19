import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/main.scss';

class TrialEng extends Component {

  redirectTo = () => {
    this.props.history.push('/en/trial');
    window.scrollTo(0, 0);
  }

  render(){    
    return(
      <div className='trial'>
        <h2 className='trial__title'>
          We go above and beyond for our students
        </h2>
        <h4 className='trial__sub'>We respect your passion for your future</h4>
        <img className='trial__img' src='../assets/images/mainImg3.png' alt='mainImg2'/>
        <button onClick={this.redirectTo}>Free Trial</button>
        <h2 className='trial__welcome'>Welcome to RDA</h2>
      </div>
    )
  }
}

export default withRouter(TrialEng);