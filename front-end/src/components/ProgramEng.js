import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/program.scss';

class ProgramEng extends Component {
  
  redirectTo = () => {
    this.props.history.push('/en/program');
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className='program'>
        <h1>Program</h1>
        <p>
          Id aliqua velit nulla nulla consectetur mollit nisi id sint ea magna. 
          Magna ipsum eiusmod eu consequat laboris velit excepteur incididunt 
          culpa commodo et dolore occaecat veniam. Irure elit quis cillum et quis sunt 
          fugiat sint cillum mollit mollit. Fugiat qui reprehenderit ullamco consequat anim 
          voluptate elit exercitation. Id pariatur adipisicing commodo eiusmod minim eiusmod 
          elit eiusmod minim ad mollit do. Consequat labore nostrud nulla cupidatat tempor. 
          Voluptate deserunt eu cillum quis tempor excepteur nulla occaecat nulla irure ad.
        </p>
        <button onClick={this.redirectTo}>See details</button>
      </div>
    )
  }
}

export default withRouter(ProgramEng);