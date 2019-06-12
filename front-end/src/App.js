import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Nav from './components/Nav';
import Menu from './components/Menu';
import Main from './components/Main';
import AboutDetail from './components/AboutDetail';
import ProgramDetail from './components/ProgramDetail';
import TrialDetail from './components/TrialDetail';

import './styles/app.scss';

// function App() {
//   return (
//       <div className="App">
//         <Nav/>
//         <div className='content'>
//           <Main/>
//         </div>
//       </div>
//   );
// }

// export default App;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      eng: 'show',
      kor: 'hide',
      menuOpen: false
    }
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  switchLanguage = () => {
    if(this.state.eng === 'show'){
      this.setState({
        eng: 'hide',
        kor: 'show'
      });
    }
    else if(this.state.eng === 'hide'){
      this.setState({
        eng: 'show',
        kor: 'hide',
      })
    }
    return <Redirect to='/program'/>
  }

  clickMenu = () => {
    if(this.state.menuOpen){
      this.setState({
        menuOpen: false
      })
    }
    else{
      this.setState({
        menuOpen: true
      })
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
            <Route path='/' exact render={(routeProps) => (
              <Main {...routeProps}
                    eng={eng} 
                    kor={kor} 
                    switchLanguage={this.switchLanguage}/>
            )} />

            <Route path='/about' render={(routeProps) => (
              <AboutDetail {...routeProps} eng={eng} kor={kor}/>
            )}/>
            <Route path='/program' render={(routeProps) => (
              <ProgramDetail {...routeProps} eng={eng} kor={kor}/>
            )}/>
            <Route path='/trial' render={(routeProps) => (
              <TrialDetail {...routeProps} eng={eng} kor={kor}/>
            )}/>
          </div>
        </div>
      </Router>
    )
  }
}