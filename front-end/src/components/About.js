import React, { Component } from 'react';

import '../styles/about.scss';

export default class About extends Component {

  redirectTo = () => {
    this.props.history.push('/about');
  }

  render(){
    const { eng, kor } = this.props;

    return(
      <div className='about'>
        <div className={eng}>
          <h1>About RDA</h1>
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
      </div>
    )
  }
}