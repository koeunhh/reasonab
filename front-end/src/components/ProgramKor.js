import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/main.scss';

class ProgramKor extends Component {
  
  redirectTo = () => {
    this.props.history.push('/kor/program');
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className='program'>
      <h2 className='program__title'>
        RDA는 당신과 당신의 포트폴리오를 새로운 방법으로 생각합니다
      </h2>
      <h4 className='program__sub'>우리는 당신을 위해 다르게 생각합니다</h4>
      <img className='program__img' src='../assets/images/mainImg2.png' alt='mainImg2'/>
      <button onClick={this.redirectTo}>2019 RDA 프로그램</button>
    </div>
    )
  }
}

export default withRouter(ProgramKor);