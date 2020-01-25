import React, { Component } from 'react';
import axios from 'axios';

import '../../styles/main.scss';
export default class MainKor extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.props.whiteBackground();
    this.getData();
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

  getData = () => {
    const lang = this.props.checkLanguage();
    axios.get('http://localhost:8080/content/main')
    .then(res => {
      this.setState({data: res.data[lang]});
    })
    .catch(err => {
      console.log(err);
    });
  }

  render(){
    let {about, program, trial} = this.state.data;
    
    if(about === undefined){
      return null;
    }
    if(program === undefined){
      return null;
    }
    if(trial === undefined){
      return null;
    }

    return(
      <div className='main' lang='en'>
        <div className='main__logo'>
          <img src='/assets/icons/mainlogo-white.svg' alt='logo'/>
        </div>
        <div className='main__about'>
          <img className='main__about--img' src='/assets/images/mainImg1.svg' alt='mainImg1'/>
          <div>
            <h2>{about.title}</h2>
            <h4>{about.sub}</h4>
            <button onClick={this.toAbout}>{about.btn}</button>
          </div>
        </div>        
        <div className='main__program'>
          <img className='main__program--img' src='/assets/images/mainImg2.svg' alt='mainImg2'/>
          <div>
            <h2>{program.title}</h2>
            <h4>{program.sub}</h4>
            <button onClick={this.toAbout}>{program.btn}</button>
          </div>
        </div>   
        <div className='main__trial'>
          <img className='main__trial--img' src='/assets/images/mainImg3.svg' alt='mainImg3'/>
          <div>
            <h2>{trial.title}</h2>
            <h4>{trial.sub}</h4>
            <button onClick={this.toAbout}>{trial.btn}</button>
          </div>
        </div>
        <img src='/assets/images/mainImg4.svg' alt='mainImg4'/>
        <h2>Welcome to RDA</h2>   
      </div>
    )
  }
}