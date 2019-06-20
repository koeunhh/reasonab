import React, { Component } from 'react';

import '../styles/trial.scss';

export default class Trial extends Component {

  redirectTo = () => {
    this.props.history.push('/trial');
  }

  render(){
    const { eng, kor } = this.props;
    
    return(
      <div className='trial'>
        <div className={eng}>
          <h1>Trial</h1>
          <p>
            Labore qui do adipisicing ullamco est est nisi veniam ad deserunt reprehenderit excepteur ad. 
            Culpa aliquip mollit pariatur dolor elit esse ut proident adipisicing. 
            Consectetur adipisicing reprehenderit cupidatat proident sint ex qui. 
            Nisi aute aliqua deserunt reprehenderit. Dolore amet elit exercitation ipsum irure. 
            Occaecat exercitation eu ipsum esse consectetur ad nostrud. 
            Aute ex eu sint irure culpa laboris ea officia culpa aliqua.
          </p>
          <button onClick={this.redirectTo}>See details</button>
        </div>
        <div className={kor}>
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
      </div>
    )
  }
}