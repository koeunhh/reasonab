import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import '../../styles/program.scss';

class ProgramEng extends Component {

  constructor(props){
    super(props);
    this.state = {
      program: []
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.whiteBackground();
    this.props.changeFooterColor();
    this.getPrograms();
  }

  getPrograms = () => {
    const lang = this.props.checkLanguage();
    // axios.get('http://localhost:8080/content/program')
    axios.get('https://rda-toronto.herokuapp.com/content/program')
    .then(res => {
        this.setState({program: res.data[lang]});
      })
      .catch(err => {
        console.log(err);
      })
  }

  toProgram = e => {
    const program = e.target.id;
    const path = `/en/program/${program}`;
    this.props.history.push(path);
  }
  
  render(){    
    const { program } = this.state;

    return(
      <div className='program'>
        {program.map(each => 
          <div className='program__each' id={each.oddEven} key={each.id}>
            <h1 className='program__each--title'>{each.title}</h1>
            <h3 className='program__each--subtitle'>{each.subtitle}</h3>
            {
              each.itemsMobile.map(item => 
                <p className='program__each--items' id='programItemsMobile' key={each.itemsMobile.indexOf(item)}>{item}</p>
              )
            }
            {
              each.itemsDesktop.map(item => 
                <p className='program__each--items' id='programItemsDesktop' key={each.itemsDesktop.indexOf(item)}>{item}</p>
              )
            }
            <button id={each.id} onClick={this.toProgram}>자세히 보기</button>
            <img src={each.img} alt={each.id}/>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(ProgramEng); 