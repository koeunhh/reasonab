import React, { Component } from 'react';

import '../../styles/program.scss';

export default class ProgramEng extends Component {

  componentDidMount(){
    document.querySelector('.App').style = 'revert';
  }
  
  render(){    
    return(
      <div className='program'>
        <h1>Program Detail</h1>
        <p>
          Labore qui do adipisicing ullamco est est nisi veniam ad deserunt reprehenderit excepteur ad. 
          Culpa aliquip mollit pariatur dolor elit esse ut proident adipisicing. 
          Consectetur adipisicing reprehenderit cupidatat proident sint ex qui. 
          Nisi aute aliqua deserunt reprehenderit. Dolore amet elit exercitation ipsum irure. 
          Occaecat exercitation eu ipsum esse consectetur ad nostrud. 
          Aute ex eu sint irure culpa laboris ea officia culpa aliqua.
        </p>
        <p>
          Labore qui do adipisicing ullamco est est nisi veniam ad deserunt reprehenderit excepteur ad. 
          Culpa aliquip mollit pariatur dolor elit esse ut proident adipisicing. 
          Consectetur adipisicing reprehenderit cupidatat proident sint ex qui. 
          Nisi aute aliqua deserunt reprehenderit. Dolore amet elit exercitation ipsum irure. 
          Occaecat exercitation eu ipsum esse consectetur ad nostrud. 
          Aute ex eu sint irure culpa laboris ea officia culpa aliqua.
        </p>
        <p>
          Labore qui do adipisicing ullamco est est nisi veniam ad deserunt reprehenderit excepteur ad. 
          Culpa aliquip mollit pariatur dolor elit esse ut proident adipisicing. 
          Consectetur adipisicing reprehenderit cupidatat proident sint ex qui. 
          Nisi aute aliqua deserunt reprehenderit. Dolore amet elit exercitation ipsum irure. 
          Occaecat exercitation eu ipsum esse consectetur ad nostrud. 
          Aute ex eu sint irure culpa laboris ea officia culpa aliqua.
        </p>
      </div>
    )
  }
}