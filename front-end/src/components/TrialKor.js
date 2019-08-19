import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/main.scss';

class TrialKor extends Component {

  redirectTo = () => {
    this.props.history.push('/kor/trial');    
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className='trial'>
        <h2 className='trial__title'>
          우리는 학생들을 위해 기준 그 이상까지 갑니다
        </h2>
        <h4 className='trial__sub'>우리는 당신의 열정을 응원합니다</h4>
        <img className='trial__img' src='../assets/images/mainImg3.png' alt='mainImg2'/>
        <button onClick={this.redirectTo}>무료체험</button>
        <h2 className='trial__welcome'>RDA에 오신 것을 환영합니다</h2>
      </div>
    )
  }
}

export default withRouter(TrialKor);