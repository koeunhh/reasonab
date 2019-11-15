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
      <div className='main'>
        <div className='main__about'>
          <div className='main__about--logo'>
            <img src='../assets/icons/mainlogo-black.svg' alt='logo'/>
          </div>
          <h2 className='main__about--title'>
              A New Kind of <br/>
              Tutoring Academy. <br/>
              | <br/>
              Created by <br/>
              Artists &amp; Designers
          </h2>
          <img className='main__about--img' src='../assets/images/mainImg1.png' alt='mainImg1'/>
          <button className='main__about--btn' onClick={this.toAbout}>More About RDA</button>
        </div>        
        <div className='main__program'>
          <h2 className='main__program--title'>
            RDA completely rethinks everything about you &amp; your Portfolio
          </h2>
          <h4 className='main__program--sub'>We think differently, because you need to</h4>
          <img className='main__program--img' src='../assets/images/mainImg2.png' alt='mainImg2'/>
          <button onClick={this.toProgram}>2019 RDA Program</button>
        </div>
        <div className='main__trial'>
          <h2 className='main__trial--title'>
            We go above and beyond for our students
          </h2>
          <h4 className='main__trial--sub'>We respect your passion for your future</h4>
          <img className='main__trial--img' src='../assets/images/mainImg3.png' alt='mainImg2'/>
          <button onClick={this.toTrial}>Free Trial</button>
          <h2 className='main__trial--welcome'>Welcome to RDA</h2>
        </div>
      </div>
    )
  }
}