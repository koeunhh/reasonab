import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Menu from './components/Menu';
import Main from './components/Main';
import AboutDetailEng from './components/AboutDetailEng';
import AboutDetailKor from './components/AboutDetailKor';
import ProgramDetail from './components/ProgramDetail';
import TrialDetail from './components/TrialDetail';

import './styles/app.scss';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // eng: 'show',
      // kor: 'hide',
      lang: 'eng',
      menuOpen: false
    }
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
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

  render() {
    const { eng, kor, menuOpen } = this.state;

    return (
      <Router>
        <div className="App">
          <Nav eng={eng} 
               kor={kor} 
               menuOpen={menuOpen}
               clickMenu={this.clickMenu}
               closeMenu={this.closeMenu}
               switchLanguage={this.switchLanguage}
               />

          <div className='content'>
            <Menu eng={eng} 
                  kor={kor}
                  menuOpen={menuOpen} 
                  clickMenu={this.clickMenu}/>

            <Switch>
              <Route path='/' exact render={(props) => (
                <Main {...props}
                      eng={eng} 
                      kor={kor} 
                      switchLanguage={this.switchLanguage}/>
              )} />
              <Route path='/en/about' render={(props) => (
                <AboutDetailEng {...props} eng={eng} kor={kor}/>
              )}/>
               <Route path='/kor/about' render={(props) => (
                <AboutDetailKor {...props} eng={eng} kor={kor}/>
              )}/>
              <Route path='/program' render={(props) => (
                <ProgramDetail {...props} eng={eng} kor={kor}/>
              )}/>
              <Route path='/trial' render={(props) => (
                <TrialDetail {...props} eng={eng} kor={kor}/>
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}