import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/trial.scss';

class TrialKor extends Component {

  redirectTo = () => {
    this.props.history.push('/kor/trial');    
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className='trial'>
        <h1>포트폴리오 리뷰</h1>
        <p>
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다. 
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다. 
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
        </p>
        <button onClick={this.redirectTo}>자세히 보기</button>
      </div>
    )
  }
}

export default withRouter(TrialKor);