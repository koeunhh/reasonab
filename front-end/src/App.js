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
import ProgramDetailEng from './components/eng/ProgramDetailEng';
import TrialEng from './components/eng/TrialEng';
import TrialKor from './components/kor/TrialKor';
import TrialSubmissionEng from './components/eng/TrialSubmissionEng';
import TrialSubmissionKor from './components/kor/TrialSubmissionKor';

import './styles/app.scss';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false,
      backgroundColor: 'whiteBackground'
    }
  }

  componentDidMount(){
    this.changeFooterColor(); 
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
    this.changeFooterColor(); 
  }

  changeFooterColor = () => {
    const content = this.state.backgroundColor;
    let footer = document.querySelector('footer').style;
    let copyright = document.querySelector('.copyright').style;
    if (content === 'blackBackground'){
      footer.backgroundColor = 'black';
      footer.borderColor = '#9A9A9A';
      copyright.color = 'white';
    }
    else if (content === 'whiteBackground'){
      footer.backgroundColor = 'white';
      footer.borderColor = '#797979';
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

  blackBackground = () => {
    this.setState({backgroundColor: 'blackBackground'});
  }

  whiteBackground = () => {
    this.setState({backgroundColor: 'whiteBackground'});
  }

  closeMenu = () => {
    this.setState({
      menuOpen: false
    })
  }

  checkLanguage = () => {
    let path = window.location.pathname;
    let lang = path.split('/')[1];
    if(lang === ''){
      lang = 'kor'
    }
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
          <div className='content' id={this.state.backgroundColor}>
            <Switch>
              <Route exact path='/en/' render={props => {return <MainEng {...props} checkLanguage={this.checkLanguage} whiteBackground={this.whiteBackground}/>}}/>
              <Route exact path='/kor/' render={props => {return <MainKor {...props} checkLanguage={this.checkLanguage} whiteBackground={this.whiteBackground}/>}}/>
              <Route path='/en/about' render={props => {return <AboutEng {...props} changeFooterColor={this.changeFooterColor} whiteBackground={this.whiteBackground}/>}} />
              <Route path='/kor/about' render={props => {return <AboutKor {...props} changeFooterColor={this.changeFooterColor} whiteBackground={this.whiteBackground}/>}} />
              <Route exact path='/en/program' render={props => {return <ProgramEng {...props} checkLanguage={this.checkLanguage} changeFooterColor={this.changeFooterColor} whiteBackground={this.whiteBackground}/>}} />
              <Route exact path='/kor/program' render={props => {return <ProgramKor {...props} checkLanguage={this.checkLanguage} changeFooterColor={this.changeFooterColor} whiteBackground={this.whiteBackground}/>}} />
              <Route path='/en/program/graphicDesign' render={props => {return <ProgramDetailEng {...props} changeFooterColor={this.changeFooterColor} whiteBackground={this.whiteBackground}/>}} />
              <Route path='/en/program/animation' render={props => {return <ProgramDetailEng {...props} changeFooterColor={this.changeFooterColor} whiteBackground={this.whiteBackground}/>}} />
              <Route exact path='/en/trial' render={props => {return <TrialEng {...props} changeFooterColor={this.changeFooterColor} blackBackground={this.blackBackground} whiteBackground={this.whiteBackground}/>}} />
              <Route exact path='/kor/trial' render={props => {return <TrialKor {...props} changeFooterColor={this.changeFooterColor} blackBackground={this.blackBackground} whiteBackground={this.whiteBackground}/>}} />
              <Route path='/en/trial/formSubmitted' render={props => {return <TrialSubmissionEng {...props} whiteBackground={this.whiteBackground}/>}}/>
              <Route path='/kor/trial/formSubmitted' render={props => {return <TrialSubmissionKor {...props} whiteBackground={this.whiteBackground}/>}}/>
              <Redirect exact from='/' to='/kor/'/>
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