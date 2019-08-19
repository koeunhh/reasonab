import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import MenuEng from './components/MenuEng';
import MenuKor from './components/MenuKor';
import MainEng from './components/MainEng';
import MainKor from './components/MainKor';
import AboutDetailEng from './components/AboutDetailEng';
import AboutDetailKor from './components/AboutDetailKor';
import ProgramDetailEng from './components/ProgramDetailEng';
import ProgramDetailKor from './components/ProgramDetailKor';
import TrialDetailEng from './components/TrialDetailEng';
import TrialDetailKor from './components/TrialDetailKor';
import TrialSubmissionEng from './components/TrialSubmissionEng';
import TrialSubmissionKor from './components/TrialSubmissionKor';

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

          <div className='content'>
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
            <Switch>
              <Route exact path='/en/' component={MainEng}/>
              <Route exact path='/kor/' component={MainKor}/>
              <Route path='/en/about' component={AboutDetailEng}/>
              <Route path='/kor/about' component={AboutDetailKor}/>
              <Route path='/en/program' component={ProgramDetailEng}/>
              <Route path='/kor/program' component={ProgramDetailKor}/>
              <Route exact path='/en/trial' component={TrialDetailEng}/>
              <Route exact path='/kor/trial' component={TrialDetailKor}/>
              <Route path='/en/trial/formSubmitted' component={TrialSubmissionEng}/>
              <Route path='/kor/trial/formSubmitted' component={TrialSubmissionKor}/>
            </Switch>
            <Redirect exact from='/' to='/en/'/>
          </div>
          {/* <footer>
            <h5>Copyright © 2019 RDA All rights reserved.</h5>
            <h5 className='credit'>Code by Koeun Lee</h5>
            <h5 className='credit'>Design by Luke Jung</h5>
          </footer> */}
        </div>
      </Router>
    )
  }
}