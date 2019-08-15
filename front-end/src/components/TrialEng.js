import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/trial.scss';

class TrialEng extends Component {

  redirectTo = () => {
    this.props.history.push('/en/trial');
    window.scrollTo(0, 0);
  }

  render(){    
    return(
      <div className='trial'>
        <h1>Trial</h1>
        <p>
          Labore qui do adipisicing ullamco est est nisi veniam ad deserunt reprehenderit excepteur ad. 
          Culpa aliquip mollit pariatur dolor elit esse ut proident adipisicing. 
          Consectetur adipisicing reprehenderit cupidatat proident sint ex qui. 
          Nisi aute aliqua deserunt reprehenderit. Dolore amet elit exercitation ipsum irure. 
          Occaecat exercitation eu ipsum esse consectetur ad nostrud. 
          Aute ex eu sint irure culpa laboris ea officia culpa aliqua.
        </p>
        <button onClick={this.redirectTo}>See details</button>
      </div>
    )
  }
}

export default withRouter(TrialEng);