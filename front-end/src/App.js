import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import MenuEng from './components/eng/MenuEng';
import MenuKor from './components/kor/MenuKor';
import MainEng from './components/eng/MainEng';
import MainKor from './components/kor/MainKor';
import AboutEng from './components/eng/AboutEng';
import AboutKor from './components/kor/AboutKor';
import ProgramEng from './components/eng/ProgramEng';
import ProgramKor from './components/kor/ProgramKor';
import TrialEng from './components/eng/TrialEng';
import TrialKor from './components/kor/TrialKor';
import TrialSubmissionEng from './components/eng/TrialSubmissionEng';
import TrialSubmissionKor from './components/kor/TrialSubmissionKor';

import './styles/app.scss';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  componentDidMount(){
    this.changeFooterColor(); 
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
    document.querySelector('.content').style = 'revert';
    this.changeFooterColor(); 
  }

  changeFooterColor = () => {
    const content = document.querySelector('.content').style.backgroundColor;
    let footer = document.querySelector('footer').style;
    let copyright = document.querySelector('.copyright').style;
    if (content === 'black'){
      footer.borderColor = '#9A9A9A';
      copyright.color = 'white';
    }
    else {
      footer.borderColor = 'black';
      copyright.color = 'black';    
    }
  }

  clickMenu = () => {
    const nav = document.querySelector('nav');
    if(this.state.menuOpen){
      this.setState({
        menuOpen: false
      })
      nav.style.opacity = 0.85;
    }
    else{
      this.setState({
        menuOpen: true
      })
      nav.style.opacity = 1;
    }
  }

  closeMenu = () => {
    this.setState({
      menuOpen: false
    })
  }

  checkLanguage = () => {
    let path = window.location.pathname;
    const lang = path.split('/')[1];
    return lang;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav menuOpen={this.state.menuOpen}
               clickMenu={this.clickMenu}
               closeMenu={this.closeMenu}
               checkLanguage={this.checkLanguage}/>
          <Route path='/en/' 
                  render={props => {return <MenuEng {...props} 
                                                    menuOpen={this.state.menuOpen} 
                                                    clickMenu={this.clickMenu}
                                                    checkLanguage={this.checkLanguage}/>}}/>
          <Route path='/kor/' 
                  render={props => {return <MenuKor {...props} 
                                                    menuOpen={this.state.menuOpen} 
                                                    clickMenu={this.clickMenu}
                                                    checkLanguage={this.checkLanguage}/>}}/>
          <div className='content'>
            <Switch>
              <Route exact path='/en/' component={MainEng}/>
              <Route exact path='/kor/' component={MainKor}/>
              <Route path='/en/about' render={props => {return <AboutEng {...props} changeFooterColor={this.changeFooterColor}/>}} />
              <Route path='/kor/about' render={props => {return <AboutKor {...props} changeFooterColor={this.changeFooterColor}/>}} />
              <Route path='/en/program' render={props => {return <ProgramEng {...props} changeFooterColor={this.changeFooterColor}/>}} />
              <Route path='/kor/program' render={props => {return <ProgramKor {...props} changeFooterColor={this.changeFooterColor}/>}} />
              <Route exact path='/en/trial' render={props => {return <TrialEng {...props} changeFooterColor={this.changeFooterColor}/>}} />
              <Route exact path='/kor/trial' render={props => {return <TrialKor {...props} changeFooterColor={this.changeFooterColor}/>}} />
              <Route path='/en/trial/formSubmitted' component={TrialSubmissionEng}/>
              <Route path='/kor/trial/formSubmitted' component={TrialSubmissionKor}/>
              <Redirect exact from='/' to='/en/'/>
            </Switch>
            <footer>
              <h5 className='copyright'>Copyright © 2019 RDA All rights reserved.</h5>
              <h5 className='credit'>Code by Koeun Lee</h5>
              <h5 className='credit'>Design by Luke Jung</h5>
            </footer>
          </div>
        </div>
      </Router>
    )
  }
}