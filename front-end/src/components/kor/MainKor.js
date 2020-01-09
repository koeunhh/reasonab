import React, { Component } from 'react';

import '../../styles/main.scss';
export default class MainEng extends Component {
  componentDidMount(){
    this.props.whiteBackground();
  }

  toAbout = () => {
    this.props.history.push('/en/main__about');
  }

  toProgram = () => {
    this.props.history.push('/en/program');
  }

  toTrial = () => {
    this.props.history.push('/en/trial');
  }

  render(){
    return(
      <div className='main' lang='ko'>
        <div className='main__about'>
          <div className='main__about--logo'>
            <img src='../assets/icons/mainlogo-black.svg' alt='logo'/>
          </div>
          <h2 className='main__about--title'>
              아티스트들과 디자이너들이 <br/>
              함께 만들어가는 <br/>
              | <br/>
              새로운 형식의<br/>
              디자인 아카데미
          </h2>
          <img className='main__about--img' src='../assets/images/mainImg1.png' alt='mainImg1'/>
          <button className='main__about--btn' onClick={this.toAbout}>RDA 알아보기</button>
        </div>        
        <div className='main__program'>
          <h2 className='main__program--title'>
            RDA는 당신과 당신의 포트폴리오를 새로운 방법으로 생각합니다
          </h2>
          <h4 className='main__program--sub'>우리는 당신을 위해 다르게 생각합니다</h4>
          <img className='main__program--img' src='../assets/images/mainImg2.png' alt='mainImg2'/>
          <button onClick={this.toProgram}>2019 RDA 프로그램</button>
        </div>
        <div className='main__trial'>
          <h2 className='main__trial--title'>
            RDA는 학생들을 위해 기준 그 이상까지 갑니다
          </h2>
          <h4 className='main__trial--sub'>우리는 당신의 열정을 응원합니다</h4>
          <img className='main__trial--img' src='../assets/images/mainImg3.png' alt='mainImg2'/>
          <button onClick={this.toTrial}>무료체험</button>
          <h2 className='main__trial--welcome'>RDA에 오신 것을 환영합니다</h2>
        </div>
      </div>
    )
  }
}