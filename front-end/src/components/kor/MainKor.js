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
    this.props.history.push('/en/about');
  }

  toProgram = () => {
    this.props.history.push('/en/program');
  }

  toTrial = () => {
    this.props.history.push('/en/trial');
  }

  getData = () => {
    const lang = this.props.checkLanguage();
    
    // axios.get('http://localhost:8080/content/main')
    axios.get('https://rda-toronto.herokuapp.com/content/main')
    .then(res => {
      this.setState({data: res.data[lang]});
    })
    .catch(err => {
      console.log(err);
    });
  }

  render(){
    const {data} = this.state;

    return(
      <div className='main'>
        <div className='main__logo'>
          <img src='/assets/icons/mainlogo-white.svg' alt='logo'/>
        </div>
        {data.map(each => 
          <div className={`main__${each.section}`} key={data.indexOf(each)}>
            <img className={`main__${each.section}--img`} src={each.img} alt={each.imgAlt}/>
            <div>
              <h2>{each.title}</h2>
              <h4>{each.sub}</h4>
              <button onClick={this.toAbout}>{each.btn}</button>
            </div>
          </div>  
        )} 
        <img src='/assets/images/mainImg4.svg' alt='mainImg4'/>
        <h2>Welcome to RDA</h2>   
      </div>
    )
  }
}