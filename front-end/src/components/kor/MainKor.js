import React, { Component } from 'react';
import axios from 'axios';

import '../../styles/main.scss';
export default class MainKor extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: [],
      qa: null
    }
  }

  componentDidMount(){
    this.props.whiteBackground();
    this.getData();
    this.getQuestions();
  }

  toLink = (lang, page) => {
    this.props.history.push(`/${lang}/${page}`);
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

  getQuestions = () => {
    const lang = this.props.checkLanguage();

    // axios.get('http://localhost:8080/content/questions')
    axios.get('https://rda-toronto.herokuapp.com/content/questions')
      .then(res => {
        this.setState({qa: res.data[lang]});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render(){
    const {data, qa} = this.state;
    const lang = this.props.checkLanguage();

    if(qa === null){
      return false;
    }

    return(
      <div className='main'>
        <div className='main__nav'></div>
        <div className='main__logo'>
          <img src='/assets/icons/mainlogo-white.svg' alt='logo'/>
        </div>
        {data.map(each => 
          <div className={`main__${each.section}`} key={data.indexOf(each)}>
            <img className={`main__${each.section}--img`} src={each.img} alt={each.imgAlt}/>
            <div className={`main__${each.section}--text`}>
              <h2>{each.title}</h2>
              <p>{each.sub}</p>
              <button onClick={() => this.toLink(lang, each.section)}>{each.btn}</button>
            </div>
          </div>  
        )} 
        <div className='main__welcome'>
          <img src='/assets/images/mainImg4.svg' alt='mainImg4'/>
          <h2>Welcome to RDA</h2>   
        </div>
        <div className='main__qa'>
          <div className='main__qa--title'>
            <h2>{qa.title}</h2>
            <img src='/assets/images/mainImg5.svg' alt='questionAnswer'/>
          </div>
          <div className='main__qa--questions'>
            {qa.questions.map(each => 
              <div className='qa-each' id={`q${each.id}`} key={each.id}>
                <h3>{`${each.id}. ${each.question}`}</h3>
                <p>{each.answer}</p>
              </div>
            )}
            <div id='qa-more'>
              <p>{qa.more}</p>
              <button>{qa.btn}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}