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

    axios.get('http://localhost:8080/program')
    .then(res => {
        this.setState({program: res.data});
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
            <h4 className='program__each--subtitle'>{each.subtitle}</h4>
            <h5 className='program__each--items'>{each.items}</h5>
            <button id={each.id} onClick={this.toProgram}>자세히 보기</button>
            <img src={each.img} alt={each.id}/>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(ProgramEng);