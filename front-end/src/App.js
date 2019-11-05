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

  componentDidUpdate() {
    window.scrollTo(0, 0);
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
              <Route path='/en/about' component={AboutEng}/>
              <Route path='/kor/about' component={AboutKor}/>
              <Route path='/en/program' component={ProgramEng}/>
              <Route path='/kor/program' component={ProgramKor}/>
              <Route exact path='/en/trial' component={TrialEng}/>
              <Route exact path='/kor/trial' component={TrialKor}/>
              <Route path='/en/trial/formSubmitted' component={TrialSubmissionEng}/>
              <Route path='/kor/trial/formSubmitted' component={TrialSubmissionKor}/>
            </Switch>
            <Redirect exact from='/' to='/en/'/>
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