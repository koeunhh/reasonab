import React, { Component } from 'react';

import '../styles/program.scss';

export default class Program extends Component {
  
  redirectTo = () => {
    this.props.history.push('/program');
  }

  render(){
    const { eng, kor } = this.props;

    return(
      <div className='program'>
        <div className={eng}>
          <h1>Program</h1>
          <p>
            Id aliqua velit nulla nulla consectetur mollit nisi id sint ea magna. 
            Magna ipsum eiusmod eu consequat laboris velit excepteur incididunt 
            culpa commodo et dolore occaecat veniam. Irure elit quis cillum et quis sunt 
            fugiat sint cillum mollit mollit. Fugiat qui reprehenderit ullamco consequat anim 
            voluptate elit exercitation. Id pariatur adipisicing commodo eiusmod minim eiusmod 
            elit eiusmod minim ad mollit do. Consequat labore nostrud nulla cupidatat tempor. 
            Voluptate deserunt eu cillum quis tempor excepteur nulla occaecat nulla irure ad.
          </p>
          <button onClick={this.redirectTo}>See details</button>
        </div>
        <div className={kor}>
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
      </div>
    )
  }
}