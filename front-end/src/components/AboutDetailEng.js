import React, { Component } from 'react';

import '../styles/aboutDetail.scss';

export default class AboutDetailEng extends Component {
  render(){
    const { eng, kor } = this.props;
    
    return(
      <div className='aboutDetail'>
        <h1 className={eng}>About Detail</h1>
        <p className={eng}>
          Labore qui do adipisicing ullamco est est nisi veniam ad deserunt reprehenderit excepteur ad. 
          Culpa aliquip mollit pariatur dolor elit esse ut proident adipisicing. 
          Consectetur adipisicing reprehenderit cupidatat proident sint ex qui. 
          Nisi aute aliqua deserunt reprehenderit. Dolore amet elit exercitation ipsum irure. 
          Occaecat exercitation eu ipsum esse consectetur ad nostrud. 
          Aute ex eu sint irure culpa laboris ea officia culpa aliqua.
        </p>
        <p className={eng}>
          Labore qui do adipisicing ullamco est est nisi veniam ad deserunt reprehenderit excepteur ad. 
          Culpa aliquip mollit pariatur dolor elit esse ut proident adipisicing. 
          Consectetur adipisicing reprehenderit cupidatat proident sint ex qui. 
          Nisi aute aliqua deserunt reprehenderit. Dolore amet elit exercitation ipsum irure. 
          Occaecat exercitation eu ipsum esse consectetur ad nostrud. 
          Aute ex eu sint irure culpa laboris ea officia culpa aliqua.
        </p>
        <p className={eng}>
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