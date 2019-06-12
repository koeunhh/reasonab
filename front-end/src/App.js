import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Main from './components/Main';
import AboutDetail from './components/AboutDetail';

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
      kor: 'hide'
    }
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
        kor: 'hide'
      })
    }
  }

  render() {
    const { eng, kor } = this.state;

    return (
      <Router>
        <div className="App">
          <Nav eng={eng} 
               kor={kor} 
               switchLanguage={this.switchLanguage}/>

          <div className='content'>
            <Route path='/' exact render={(routeProps) => (
              <Main {...routeProps}
                    eng={eng} 
                    kor={kor} 
                    switchLanguage={this.switchLanguage}/>
            )} />
            <Route path='/about' render={(routeProps) => (
              <AboutDetail {...routeProps} eng={eng} kor={kor}/>
            )}/>
          </div>
        </div>
      </Router>
    )
  }
}