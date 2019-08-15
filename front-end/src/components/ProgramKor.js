import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/program.scss';

class ProgramKor extends Component {
  
  redirectTo = () => {
    this.props.history.push('/kor/program');
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className='program'>
        <h1>프로그램</h1>
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

export default withRouter(ProgramKor);