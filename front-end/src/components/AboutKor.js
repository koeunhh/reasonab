import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/about.scss';

class AboutKor extends Component {

  redirectTo = () => {
    this.props.history.push('/kor/about');
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className='about'>
        <img src='../assets/icons/mainlogo-white.svg' alt='logo'/>
        <h1>RDA를 소개합니다</h1>
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

export default withRouter(AboutKor);